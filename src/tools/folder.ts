import * as fs from 'fs-extra';
import * as path from 'path';
import { FolderName, StructureObject } from '../typings/structure';

/**
 * Get the working directory where CLI was invoked
 *
 * @type {string}
 */
export const getWorkingDir = (): string => path.basename(process.cwd());

/**
 * Check if directory exists
 *
 * @param {string} filePath - path to directory
 * @returns {boolean} exists or not
 */
export const dirExists = (filePath: string) => {
  try {
    return fs.statSync(filePath).isDirectory();
  } catch (err) {
    return false;
  }
};

/**
 * Create a directory if it doesn't exists
 *
 * @param {string} path - path to direcotry
 */
export const createDir = (path: string) => {
  try {
    fs.ensureDir(path);
  } catch (e) {
    // handle error somehow
  }
};

/**
 * If a structure has chldren we need to handle them separately
 * @param {FolderName[]} child - child folder
 * @param {string} parentDir if a nested dir needs to be created the parent must already exist
 */
const createStructureChildren = (child: FolderName[], parentDir: string): void => {
  child.forEach((folder) => {
    createDir(parentDir);
    if (typeof folder === 'object') {
      createFolderStructure(folder);
    }
    if (typeof folder === 'string') {
      createDir(`${parentDir}/${folder}`);
    }
  });
};

/**
 * Create a folder structure from a structure object
 *
 * @param {StructureObject} structure
 */
export const createFolderStructure = (structure: StructureObject) => {
  const keys = Object.keys(structure);

  keys.forEach((key: string) => {
    const child = structure[key];
    if (child.length === 0) {
      createDir(`${key}`);
    }
    createStructureChildren(child, key);
  });
};
