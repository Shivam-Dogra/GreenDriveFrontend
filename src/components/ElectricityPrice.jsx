import React, { useEffect, useState } from 'react';
import image from '../graphImages/electricityPrice.png';

const ElectricityPrice = () => {
  return (
    <div className="flex justify-center mt-8">
    <img 
      src={image} 
    />
  </div>
  );
};

export default ElectricityPrice;
