import React, { useState } from 'react';
import NavBar from './components/navbar';
import Counters from './components/counters';

const App = () => {
  const [counters, setCounters] = useState([
    { id: 0, value: 5 },
    { id: 1, value: 1 },
    { id: 2, value: 2 },
  ]);

  const handleDelete = (counterId) => {
    const counterss = counters.filter((c) => c.id !== counterId);
    setCounters(counterss);
  };

  const handleReset = () => {
    const counterss = counters.map((c) => {
      c.value = 0;
      return c;
    });
    setCounters(counterss);
  };

  const handleIncrement = (counter) => {
    const counterss = [...counters];
    const index = counterss.indexOf(counter);
    counterss[index] = { ...counter };
    counterss[index].value++;
    setCounters(counterss);
  };

  return (
    <React.Fragment>
      <NavBar totalCounters={counters.filter((c) => c.value > 0).length} />
      <main className='container'>
        <Counters
          counters={counters}
          onReset={handleReset}
          onDelete={handleDelete}
          onIncrement={handleIncrement}
        />
      </main>
    </React.Fragment>
  );
};

export default App;
