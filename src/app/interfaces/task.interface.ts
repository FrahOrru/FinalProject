import { UserI } from "./user.interface";

export interface TaskI {
    id: number;

    user: UserI;

    title: string;

    description: string;

    time: string;

    position: string;

    type: TaskType;
}

enum TaskType {
    FITNESS = 'FITNESS',
    APPOINTMENT = 'APPOINTMENT',
    FOOD = 'APPOINTMENT',
    WORK = 'WORK'
}