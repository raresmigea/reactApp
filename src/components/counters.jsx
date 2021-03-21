import React from 'react';
import PropTypes from 'prop-types';
import Counter from './counter';

const Counters = ({ counters, onReset, onDelete, onIncrement }) => {
  return (
    <div>
      <button onClick={onReset} className='btn btn-primary-btn-sm m-2'>
        Reset
      </button>
      {counters.map((counter) => (
        <Counter
          key={counter.id}
          onDelete={onDelete}
          onIncrement={onIncrement}
          counter={counter}
        />
      ))}
    </div>
  );
};

Counter.propTypes = {
  counters: PropTypes.array,
  onReset: PropTypes.func,
  onDelete: PropTypes.func,
  onIncrement: PropTypes.func,
};

export default Counters;
