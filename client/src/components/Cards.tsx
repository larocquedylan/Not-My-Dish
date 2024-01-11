import "./Cards.css";

interface CardProps {
  task: string;
  value: number;
  assigner: string;
  onComplete: () => void;
}

const Card: React.FC<CardProps> = ({ task, value, assigner, onComplete }) => (
  <div className="card-container">
    <h3 className="card-title">{task}</h3>
    <p className="card-value">Value: {value}</p>
    <p className="card-assigner">Assigner: {assigner}</p>
    <button className="card-button" onClick={onComplete}>
      Complete Task
    </button>
  </div>
);

export default Card;