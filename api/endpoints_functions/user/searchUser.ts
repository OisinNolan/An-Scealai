import User from "../../models/user";
import { API404Error, API400Error } from "../../utils/APIError";
import { z } from  "zod";
import { Request, Response } from "express";

const roles_enum = z.enum(["STUDENT", "TEACHER", "ADMIN"]);

const body_schema = z.object({
  searchString: z.string().default(""),
  limit: z.number().min(0).default(20),
  currentPage: z.number().min(0).default(0),
  roles: z.array(roles_enum).max(3).min(1),
});

/**
* Search for users in the DB whose usernames match a search string.
* Uses pagination to prevent too many DB operations at once.
* See: https://stackoverflow.com/a/61354694
* @param {Object} req body: search string to find user, display limit, and current page
* @param {Object} res
* @return {Promise} Object of found users and its count
*/
export default async function searchUser(req: Request, res: Response) {
  function fail(why: string, things: any[] = []) {
    console.warn(new Error(), ...things);
    return res.status(400).json("an error occurred");
  }

  // default values for req body
  const v = body_schema.safeParse(req.body);

  if(!v.success) return fail("bad body", [v, req.body]);

  const reqBody = v.data;

  // find username containing searchRegex as substring
  const searchRegex = new RegExp(reqBody.searchString, 'i'); // i for case insensitive
  const mongoQuery = {
    username: {$regex: searchRegex},
    role: {$in: reqBody.roles},
  };

  // TODO pretty sure this can be done with just one database query, users = await ...where(...); count = users.countDocuments();
  const users = await User.find(mongoQuery)
      .sort({username: 'asc'})
  // skip first N users, if navigating through multiple pages
      .skip(reqBody.currentPage * reqBody.limit)
      .limit(reqBody.limit); // only return K users
  const userCount = await User.where(mongoQuery).countDocuments();

  if (!users) return fail("no users", [users, userCount, req.body])

  // TODO we should not send user's resetPassword and verification codes
  return res.json({users: users, count: userCount});
}