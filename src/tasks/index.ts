import { showError } from '../tools/cli';
import { createProjectStructure } from './createProjectTask';
import { updateProjectStructure } from './updateProjectTask';

/**
 * Available tasks
 * @type {{CREATE_PROJECT: string; UPDATE_PROJECT: string}}
 */
export const taskList = {
  CREATE_PROJECT: 'Create a new Project',
  UPDATE_PROJECT: 'Update an existing Project',
};

/**
 * Map of registered tasks to actions
 * @type {{}}
 */
export const taskMap: { [key: string]: (...args: any[]) => any } = {
  [taskList.UPDATE_PROJECT]: updateProjectStructure,
  [taskList.CREATE_PROJECT]: createProjectStructure,
};

/**
 * Execute any registered task
 *
 * @param {string} taskName - name of the task
 * @param args - any additional argument a task may require e.g. project name
 */
export const executeTask = (taskName: string = '', args?: { [key: string]: any }) => {
  if (!taskMap.hasOwnProperty(taskName)) {
    showError(`Missing task ${taskName}`);
  }
  taskMap[taskName](args);
};
