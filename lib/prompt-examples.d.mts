import type { OutputExampleData, PostSection } from "./posts";
export function getPromptReferences(sections: PostSection[]): { sectionIndex: number; promptNumber: number }[];
export function isCompleteOutputExample(example?: OutputExampleData): boolean;
