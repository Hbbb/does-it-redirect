import Inferno, {linkEvent} from 'inferno';
const ResultCard = (props) => {
  return (
    <div className="result-card">
      <h3> {props.title} </h3>
      {props.children}
    </div>
  );
};

export default ResultCard;