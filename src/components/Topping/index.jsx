import React, { useState } from 'react';
import Check from '../Check';
import './style.css';

const Topping = ({ topping, onSelectedToppingsChange }) => {
  return (
    <div className="topping">
      <Check checked={topping.selected} onChange={onSelectedToppingsChange} />
      <span className="topping__content">
        {topping.name} : {topping.price} €
      </span>
    </div>
  );
};

export default Topping;
