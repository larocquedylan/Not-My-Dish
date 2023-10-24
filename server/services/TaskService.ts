import Task from "../models/Task";

class TaskService {
    private static instance: TaskService;
    private tasks: Task[] = [];

    private constructor() {}

    public static getInstance(): TaskService {
        if (!TaskService.instance) {
            TaskService.instance = new TaskService();
        }
        return TaskService.instance;
    }

    public create(task: Task): Task {
        this.tasks.push(task);
        return task;
    }

    public getTasks(): Task[] {
        return this.tasks;
    }

    public getTaskByID(taskID: string): Task {
        return this.tasks.find(taskid => taskid._id === taskID)
    }

    public removeTask(taskID: string) {
        this.tasks.filter(task => task._id === taskID);
    


}

const mockTasks : Task [] = [
    {
            _id: '0',
            title: 'Clean Kitchen',
            description: 'clean that bish',
            points: 1,
            createdOn: new Date(),
            updatedOn: new Date() 
    },
    {
        _id: '1',
        title: 'Clean Bathroom',
        description: 'clean that bish',
        points: 3,
        createdOn: new Date(),
        updatedOn: new Date() 
    },
    {
        _id: '2',
        title: 'Sweep Floors',
        description: 'clean that bish',
        points: 2,
        createdOn: new Date(),
        updatedOn: new Date() 
    },
    {
        _id: '3',
        title: 'Clean Out Garage',
        description: 'clean that bish',
        points: 10,
        createdOn: new Date(),
        updatedOn: new Date() 
    }
]


export default TaskService;
