import Component from 'inferno-component';

export default class Button extends Component {
  render() {
    return (
      <button onClick={this.props.handleClick} />
    )
  }
}
