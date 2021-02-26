import React from 'react';

const Counter = ({ key, onDelete, onIncrement, counter }) => {
  const style = {
    fontSize: 20,
    fontWeight: 'bold',
  };

  const getBadgeClasses = () => {
    let classes = 'badge m-2 badge-';
    classes += counter.value === 0 ? 'warning' : 'primary';
    return classes;
  };

  const formatCount = () => {
    const { value } = counter;
    return value === 0 ? 'Zero' : value;
  };

  return (
    <div>
      <span style={style} className={getBadgeClasses()}>
        {formatCount()}
      </span>
      <button
        onClick={() => onIncrement(counter)}
        className='btn btn-secondary btn-sm'
      >
        Increment
      </button>
      <button
        onClick={() => onDelete(counter.id)}
        className='btn btn-danger btn-sm m-2'
      >
        Delete
      </button>
    </div>
  );
};

export default Counter;
