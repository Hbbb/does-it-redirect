import Inferno, {linkEvent} from 'inferno';
import Component from 'inferno-component';

import TextInput from 'components/TextInput';
import Button from 'components/Button';
import ResultsContainer from 'components/ResultsContainer';
import ErrorMarker from 'components/ErrorMarker';


import ApiService from './ApiService';

class App extends Component {
  constructor(props) {
    super(props);
    this.dispatchUpdate = this.dispatchUpdate.bind(this);
    this.submitForm = this.submitForm.bind(this);

    this.state = {
      url: '',
      result: null,
      redirectLocation: null,
      error: null
    };
  }

  dispatchUpdate(newState) {
    this.setState( Object.assign({}, this.state, newState) );

    // console.log('Old State: ', this.state);
    // console.log('New State: ', Object.assign({}, this.state, newState));
  }

  submitForm() {
    if (!this.state.url) {
      return;
    }

    ApiService.determineRedirect(this.state.url, (err, res) => {
      if (err) {
        this.dispatchUpdate({
          result: null,
          redirectLocation: null,
          error: err.message
        });
      }

      this.dispatchUpdate({
        result: res.body.result,
        redirectLocation: res.body.location,
        error: res.body.error
      });
    });
  }

  render() {
    return (
      <div className="app">
        <div className="form">
          <TextInput
            dispatchUpdate={this.dispatchUpdate}
            value={this.state.url}
            label="URL"
            helpText="full URL including protocol, e.g. https://google.com"
          />
          <Button
            handleClick={this.submitForm}
          />
        </div>
        <ResultsContainer
          result={this.state.result}
          redirectLocation={this.state.redirectLocation}
        />
        <ErrorMarker error={this.state.error}/>
      </div>
    );
  }
}

Inferno.render(
  <App />,
  document.getElementById('app')
);
