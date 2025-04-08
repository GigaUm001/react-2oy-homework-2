import { useState } from 'react';

function Input() {
  const [text, setText] = useState('');

  return (
    <div className="flex items-center justify-center mt-[100px]">
      <div className="p-6 bg-white shadow-md rounded-xl w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">Input Change</h2>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Write-text"
          className="w-full border border-gray-300 rounded-full px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <p className="mt-4 text-lg"><strong>Your Text:</strong> {text}</p>
      </div>
    </div>
  );
}

export default Input;
