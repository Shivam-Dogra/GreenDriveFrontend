import React, { useEffect, useState } from 'react';
import image from '../graphImages/ev_sales_plot.png';

const EVSalesChart = () => {
  return (
    <div className="flex justify-center mt-8">
      <img 
        src={image} 
      />
    </div>
  );
};

export default EVSalesChart;
