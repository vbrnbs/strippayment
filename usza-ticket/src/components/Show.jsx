import React from 'react';

const Show = ({ image, title, desc, time, price }) => {
  return (
    <div className='flex justify-between border rounded-sm mb-6'>
      <div className='flex justify-center items-center h-52'>
        <img src={image} alt={title} 
        className='object-cover object-center w-72 h-52'
        />
      </div>
      <div className='w-3/6 py-2 pl-2'>
        <div className='text-xl font-bold'>{title}</div>
        <div className='text-sm'>{desc}</div>
        <div className='text-sm'>{time}</div>
        <div className='text-sm'>{price} Ft</div>
      </div>
      <div className='w-1/6 before:border flex justify-end items-end md:items-center p-2'>
        <button className='btn btn-primary'>vasarlas</button>
      </div>
    </div>
  );
};

export default Show;
