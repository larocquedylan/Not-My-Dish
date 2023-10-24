// Task interface definition goes here

interface Task {
    _id: string;
    title: string;
    description: string;
    points: number; 
    createdOn: Date;
    updatedOn: Date;
}