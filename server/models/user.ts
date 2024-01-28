// User interface definition goes here

import Task from "./task";

interface User {
    _id: string;
    name: string;
    email: string;
    password: string;
    createdOn: Date;
    updatedOn: Date;
    completedTaskList: Array<Task>;
}

export default User;