interface CardProps {
    task: string;
    value: number;
    assigner: string;
    onComplete: () => void;
  }
  
  const Card: React.FC<CardProps> = ({ task, value, assigner, onComplete }) => (
    <div className="card">
      <h3>{task}</h3>
      <p>Value: {value}</p>
      <p>Assigner: {assigner}</p>
      <button onClick={onComplete}>Complete Task</button>
    </div>
  );

  export default Card;