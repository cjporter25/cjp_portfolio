import React from 'react';
import './Transition.css';

interface TransitionProps {
  title: string;
}

const Transition: React.FC<TransitionProps> = ({ title }) => {
  return (
    <div className="TransitionContainer">
      <h1 className="TransitionHeader">{title}</h1>
    </div>
  );
};

export default Transition;