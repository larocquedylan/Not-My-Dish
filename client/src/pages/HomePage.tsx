import TaskList from "../components/TasksList";

const HomePage: React.FC = () => {
    const tasks: Task[] = [
      // get from backend
    ];
  
    return (
      <div>
        <h1>Home</h1>
        {/* to do create TaskList + Card components for each task */}
        <TaskList tasks={tasks} />

      </div>
    );
  };

  export default HomePage;
  