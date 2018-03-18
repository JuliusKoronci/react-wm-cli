import { StructureObject } from '../typings/structure';

/**
 * Base folder structure, empty array means an empty folder without sub folders
 * array of string is a list of subfolder, if more nesting instead of a string
 * provide an object with key => array mapping where key will be the root folder
 *
 * @param {string} projectPath - in case of a new project the main folder needs
 * to be included otherwise leave empty
 *   for CWD
 * @returns {StructureObject} - generated folder structure object
 */
export const baselineStructure = (projectPathName?: string): StructureObject => {
  const projectPath = projectPathName ? `${projectPathName}/` : '';

  return {
    [`${projectPath}app`]: ['store'],
    [`${projectPath}components`]: [
      'atoms',
      'molecules',
      'organisms',
      'templates',
    ],
    [`${projectPath}modules`]: [],
    [`${projectPath}pages`]: [],
  };
};
