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

  return (
    <div className="task-list">
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