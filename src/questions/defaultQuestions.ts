import { taskList } from '../tasks';

export default [
  {
    choices: [taskList.CREATE_PROJECT, taskList.UPDATE_PROJECT],
    message: 'Select an action:',
    name: 'actions',
    type: 'list',
  },
];
