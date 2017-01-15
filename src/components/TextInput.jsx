import {linkEvent} from 'inferno'
import Component from 'inferno-component';

export default class TextInput extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <input
        type="text"
        value={this.props.value}
        onInput={linkEvent(this, handleChange)}
      />
    )
  }
};

function handleChange(self, event) {
  self.props.dispatchUpdate({url: event.target.value});
};