import React, { useState } from 'react';

const Hidden = () => {
  const [isVisible, setIsVisible] = useState(true);

  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <div className="flex flex-col items-center">
      <button
        className="px-6 py-2 mt-[100px] bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 focus:outline-none mb-4"
        onClick={toggleVisibility}
      >
        {isVisible ? 'Hide' : 'Show'}
      </button>

      {isVisible && (
       <a href="">Hello</a>
      )}
    </div>
  );
};

export default Hidden;
