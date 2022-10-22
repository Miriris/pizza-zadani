import React, { useState } from 'react';
import Topping from '../Topping';
import './style.css';

const ToppingsSelect = ({ toppings }) => {
  const [selectedToppings, setSelectedToppings] = useState(toppings);

  const handleSelectedChange = (index, newSelected) => {
    const newSelectedToppings = [...selectedToppings];
    newSelectedToppings[index].selected = newSelected;
    setSelectedToppings(newSelectedToppings);
  };

  let toppingsCount = 0;
  selectedToppings.forEach((topping) => (toppingsCount += topping.selected));

  let toppingsPrice = 0;
  selectedToppings.forEach((topping) => {
    if (topping.selected) {
      toppingsPrice += topping.price;
    }
  });

  return (
    <>
      <p>Choose as many toppings as you want</p>
      <p>
        Selected toppings: {toppingsCount}, total price: {toppingsPrice} Euro
      </p>

      <div className="toppings">
        {toppings.map((topping, index) => (
          <Topping
            topping={topping}
            key={topping.name}
            onSelectedToppingsChange={(newSelected) =>
              handleSelectedChange(index, newSelected)
            }
          />
        ))}
      </div>
    </>
  );
};

export default ToppingsSelect;
