import ResultCard from 'components/ResultCard';
import Icon from 'components/Icon';

const ResultsContainer = (props) => {
  let iconType = props.result ? 'checkmark' : 'prohibited';

  return (
    <div className="results-container">
      <ResultCard title="Redirects">
        <Icon type={iconType} />
      </ResultCard>

      <ResultCard title="Location">
        <p> {props.redirectLocation} </p>
      </ResultCard>
    </div>
  );
};

export default ResultsContainer;
