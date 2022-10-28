import { GrammarChecker} from '../types';
import { ErrorTag} from '../types';

export const anGramadoir: GrammarChecker = {
  name: "AnGramadoir",
  check: check
}; 

export type GramadoirTag = {
  fromy: string;
  fromx: number;
  toy: string;
  tox: number;
  ruleId: string;
  msg: string;
  context: string;
  contextoffset: string;
  errortext: string;
  errorlength: string;
};

export type GramadoirUrl = 'https://www.abair.ie/cgi-bin/api-gramadoir-1.0.pl' | 'https://cadhan.com/api/gramadoir/1.0';

const gramadoirUrl: GramadoirUrl = 'https://www.abair.ie/cgi-bin/api-gramadoir-1.0.pl';

async function check(input):Promise<ErrorTag[]>{
  return new Promise<ErrorTag[]>(async (resolve, reject) => {
    const errorsEN = await callAnGramadoir(input, 'en');
    const errorsGA = await callAnGramadoir(input, 'ga');
    
    let errorTags:ErrorTag[] = [];
    
    for (let i = 0; i < errorsEN.length; i++) {
      let tag:ErrorTag = {
        errorText: errorsEN[i].errortext,
        messageGA: errorsGA[i].msg,
        messageEN: errorsEN[i].msg,
        context: errorsEN[i].context,
        type: 'URU',
        color: "color",
        fromX: errorsEN[i].fromx,
        toX: errorsEN[i].tox,
      }
      
      errorTags.push(tag);
    }

    resolve(errorTags);
  });
}

async function callAnGramadoir(input: string, language: 'en' | 'ga'): Promise<GramadoirTag[]> {

  const res = await fetch(gramadoirUrl, {
       headers: {
         'Content-Type': 'application/x-www-form-urlencoded',
       },
       method: 'POST',
       body: gramadoirXWwwFormUrlencodedRequestData(input.replace(/\n/g, ' '), language)
     });

  if (res.ok) {
    return await res.json();
  }

  throw new Error(res.statusText);
    
}


function gramadoirXWwwFormUrlencodedRequestData(input: string, language: 'en' | 'ga') {
  return `teacs=${encodeURIComponent(input)}&teanga=${language}`;
}