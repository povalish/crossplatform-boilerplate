import React, { useLayoutEffect, useState } from 'react';


export const Application: React.FC = () => {
  const [timer, setTimer] = useState(0);

  useLayoutEffect(() => {
    const counter = setTimeout(() => {
      setTimer(timer + 1);
    }, 1000);

    return () => { clearInterval(counter); };
  }, []);

  return (
    <h1>Timer: {timer}</h1>
  );
};
