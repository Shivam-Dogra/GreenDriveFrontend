import React, { useEffect, useState } from 'react';
import image from '../graphImages/teslaStock.png';

const TeslaStock = () => {
  return (
    <div className="flex justify-center mt-8">
      <img 
        src={image} 
      />
    </div>
  );
};

export default TeslaStock;
