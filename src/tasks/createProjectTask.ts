import { baselineStructure } from '../templates/directory-structure';
import { createFolderStructure } from '../tools/folder';

export interface IArgs {
  projectName: string;
};

/**
 * Create project structure
 * @param {string} projectName - name of the project
 */
export const createProjectStructure = ({ projectName }: IArgs) => createFolderStructure(
  baselineStructure(projectName),
);
