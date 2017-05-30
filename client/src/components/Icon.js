const Icon = ({size = 'large', type = 'checkmark'}) => {
  const iconMap = {
    checkmark: '✅',
    prohibited: '🚫'
  };

  const sizeMap = {
    small: '30px',
    medium: '50px',
    large: '70px'
  };

  return (
    <p style={{fontSize: sizeMap[size]}}> {iconMap[type]} </p>
  );
};

export default Icon;