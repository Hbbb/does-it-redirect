import Inferno, {linkEvent} from 'inferno';
import Component from 'inferno-component';

import TextInput from 'components/TextInput';
import Button from 'components/Button';
import ResultsContainer from 'components/ResultsContainer';
import ApiService from './ApiService';

const intialState = {
  url: '',
  result: null,
  redirectLocation: null,
  error: null
};

class App extends Component {
  constructor(props) {
    super(props);
    this.dispatchUpdate = this.dispatchUpdate.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  dispatchUpdate(newState) {
    this.setState( Object.assign({}, this.state, newState) );
  }

  submitForm() {
    ApiService.determineRedirect(this.state.url, (err, res) => {
      if (err) {
        this.dispatchUpdate({
          error: err.message
        });
      } else {
        this.dispatchUpdate({
          result: res.result,
          redirectLocation: res.location
        });
      }
    });
  }

  render() {
    return (
      <div> Does it Redirect?
        <TextInput
          dispatchUpdate={this.dispatchUpdate}
          value={this.state.url}
        />
        <Button 
          handleClick={this.submitForm}
        />
        <ResultsContainer 
          result={this.state.result}
          redirectLocation={this.state.redirectLocation}
        />
      </div>
    );
  }
}

Inferno.render(
  <App />,
  document.getElementById('app')
);
