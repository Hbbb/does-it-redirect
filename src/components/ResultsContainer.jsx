import Inferno, {linkEvent} from 'inferno';
import Component from 'inferno-component';

export default class ResultsContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let resultsText = null;
    let redirectLocationText = null;
    let errorText = null;

    if (!isNullOrUndef(this.props.result)) {
      resultsText = <p> {this.props.result.toString()} </p>;
    }

    if (!isNullOrUndef(this.props.redirectLocation)) {
      redirectLocationText = <p> {this.props.redirectLocation} </p>;
    }

    if (!isNullOrUndef(this.props.error)) {
      errorText = <p> {this.props.error} </p>;
    }

    return (
      <div>
        {resultsText}
        {redirectLocationText}
        {errorText}
      </div>
    );
  }
}

function isNullOrUndef(value) {
  return value === undefined || value === null;
};