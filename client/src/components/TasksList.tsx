import Card from "./Cards";

interface Task {
    id: string;
    task: string;
    value: number;
    assigner: string;
  }
  
  interface TaskListProps {
    tasks: Task[];
  }
  
  const TaskList: React.FC<TaskListProps> = ({ tasks }) => {
    const handleComplete = (id: string) => {
      // Do something when task is completed.
    };

    const currentTasks = [1, 2, 3, 4, 5];
  
    return (
      <div>
        {tasks.map((task) => (
          <Card
            key={task.id}
            task={task.task}
            value={task.value}
            assigner={task.assigner}
            onComplete={() => handleComplete(task.id)}
          />
        ))}
      </div>
    );
  };
  
  export default TaskList;