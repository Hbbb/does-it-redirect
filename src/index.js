import Inferno from 'inferno';
import Component from 'inferno-component';

class App extends Component {
  render() {
    return (
      <div> I am Inferno! </div>
    );
  }
}

Inferno.render(
  <App />,
  document.getElementById('app')
);
