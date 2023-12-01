import User from "../../models/user";
import Classroom from "../../models/classroom";
import { Request, Response } from "express";

/**
* Returns the number of teachers who have at least one classroom
* @param {Object} req
* @param {Object} res
* @return {Promise} Number of teachers who have at least one classroom
*/
export default async function countTeachersWithClassrooms(req: Request, res: Response) {
  const userIds = await User.find({'role': 'TEACHER'}, {'_id': 1});
  const ids = userIds.map(u=>u._id);

  let teachersWithClassrooms = 0;

  // count the number of users that have not written any stories
  // TODO long for loop could be a Promise.all
  for (const teacherId of ids) {
    const numOfClassrooms = await Classroom.find({teacherId}).countDocuments();

    if (numOfClassrooms > 0) {
      teachersWithClassrooms++;
    }
  }

  return res.status(200).json(teachersWithClassrooms);
  // try {
  //   let totalTeachersWithAClassroom = 0;
  //   const result = await User.aggregate([
  //     {
  //       $lookup: {
  //         from: 'classroom',
  //         localField: '_id',
  //         foreignField: 'teacherId',
  //         as: 'classrooms'
  //       }
  //     },
  //     {
  //       $match: {
  //         classrooms: { $exists: true, $ne: [] }
  //       }
  //     },
  //     {
  //       $group: {
  //         _id: null,
  //         count: { $sum: 1 }
  //       }
  //     }
  //   ]);
  //   console.log(result);
  //   totalTeachersWithAClassroom = result.length > 0 ? result[0].count : 0;
  //   return res.status(200).json(totalTeachersWithAClassroom);
  // } catch (error: any) {
  //   console.error('Error:', error.message);
  //   return res.status(500).json('Error calculating the number of teachers who have at least one classroom');
  // }
}