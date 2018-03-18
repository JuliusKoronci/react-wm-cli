export type StructureFolder = string | StructureObject;
export type StructureObject = { [key: string]: StructureFolder[] };
export type FolderName = string | StructureObject;
