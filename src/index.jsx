import Inferno from 'inferno';
import Component from 'inferno-component';

import TextInput from 'components/TextInput';
import Button from 'components/Button';

class App extends Component {
  render() {
    return (
      <div> I am Inferno!
        <TextInput />
        <Button />
      </div>
    );
  }
}

Inferno.render(
  <App />,
  document.getElementById('app')
);
