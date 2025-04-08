import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount((prevCount) => prevCount + 1);
  const decrement = () => {
    if (count > 0) setCount((prevCount) => prevCount - 1);
  };
  const reset = () => setCount(0);

  return (
    <div className="flex flex-col items-center space-y-4 p-6 rounded-lg">
      <h2 className="text-2xl font-semibold">Count: {count}</h2>
      <div className="flex space-x-4">
        <button className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 focus:outline-none" onClick={increment}>
          Increment
        </button>
        <button className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 focus:outline-none" onClick={decrement}>
          Decrement
        </button>
        <button className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none" onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default Counter;
