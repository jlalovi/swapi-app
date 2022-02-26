import { useState } from 'react';
const useInput = ({ type = 'text', placeholder }) => {
  const [value, setValue] = useState('');
  const input = (
    <input
      value={value}
      onChange={(e) => setValue(e.target.value)}
      type={type}
      placeholder={placeholder}
    />
  );
  return [value, input];
};

export default useInput;
