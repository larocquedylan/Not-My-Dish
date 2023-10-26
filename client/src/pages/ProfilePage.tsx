interface ProfileProps {
    points: number;
    completedTasks: Task[];
  }
  
  const ProfilePage: React.FC<ProfileProps> = ({ points, completedTasks }) => (
    <div>
      <h1>Profile</h1>
      <h2>Points: {points}</h2>
      <div>
        Completed Tasks:
        {completedTasks.map((task) => (
          <div key={task.id}>{task.task}</div>
        ))}
      </div>
    </div>
  );
  
  export default ProfilePage;