export interface Task {
    title: string;
    description: string;
    completed?: boolean;
    level: LEVELS
}

export enum LEVELS{
    "INFO",
    "URGENT",
    "BLOCKING"
}