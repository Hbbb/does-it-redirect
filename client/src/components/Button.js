import Component from 'inferno-component';

const Button = ({handleClick}) => {
  return (
    <button onClick={handleClick}> Does it Redirect? </button>
  )
};

export default Button;
