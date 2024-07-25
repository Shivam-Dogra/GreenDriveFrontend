import React, { useEffect, useState } from 'react';
import image from '../graphImages/avgPriceEV.png';

const AvgEVPrice = () => {
  return (
    <div className="flex justify-center mt-8">
      <img 
        src={image}  
      />
    </div>
  );
};

export default AvgEVPrice;
