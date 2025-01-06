import { agent } from 'fabrice-ai/agent';
import { teamwork } from 'fabrice-ai/teamwork';
import { workflow } from 'fabrice-ai/workflow';
import { solution } from 'fabrice-ai/solution';

import 'dotenv/config';

const translator = agent({
  description: 'You are a skilled translator.',
});

const technicalWriter = agent({
  description: 'You are a skilled technical writer.',
});

const wf = workflow({
  team: { translator, technicalWriter },
  knowledge: `
    Original text:
    
    "${process.argv[2]}"
  `,
  description: `
    Please review the grammar, style, and overall accuracy. Suggest improvements
    while keeping modifications to the source minimal.
  `,
  output: `
    A revised version of the original text followed by a list of changes.
  `,
});

console.log(solution(await teamwork(wf)));
