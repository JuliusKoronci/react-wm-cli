import { baselineStructure } from '../templates/directory-structure';
import { createFolderStructure } from '../tools/folder';

export const updateProjectStructure = () => createFolderStructure(
  baselineStructure(),
);
