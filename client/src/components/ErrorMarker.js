const ErrorMarker = (props) => {
  if (!props.error) {
    return null;
  }

  return (
    <div className="error">
      {props.error}
    </div>
  );
};

export default ErrorMarker;