import {linkEvent} from 'inferno'
import Component from 'inferno-component';

const TextInput = (props) => {
  let label = null;
  let helpText = null;

  if (props.label) {
    label = <label> {props.label} </label>
  }

  if (props.helpText) {
    helpText = <p style={{color: 'lightgrey'}}> {props.helpText} </p>
  }

  return (
    <div className="form-control">
      {label}
      <input
        type="text"
        value={props.value}
        onInput={linkEvent(this, handleChange(props.dispatchUpdate))}
      />
      {helpText}
    </div>
  )
};

function handleChange(dispatchUpdate) {
  return function(self, event) {
    dispatchUpdate({url: event.target.value});
  };
};

export default TextInput;
