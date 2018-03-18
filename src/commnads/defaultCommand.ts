import { prompt } from 'inquirer';
import defaultQuestions from '../questions/defaultQuestions';
import projectNameQuestion from '../questions/projectNameQuestion';
import { executeTask, taskList, taskMap } from '../tasks';

export interface IAnswer {
  actions?: string;
};

export const defaultCommand = async () => {
  const answers: IAnswer = await prompt(defaultQuestions);
  if (answers.actions === taskList.CREATE_PROJECT) {
    const question: { projectName?: string } = await prompt(projectNameQuestion);
    executeTask(answers.actions, question);
  } else {
    executeTask(answers.actions);
  }
};
