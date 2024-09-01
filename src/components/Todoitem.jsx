import React from 'react';
import click from '../assets/click.png';
import no_click from '../assets/no_click.png'; 
import del from '../assets/delete.png';

const Todoitem = ({ text, id, isComplete, deleteTodo, toggleComplete }) => {
  return (
    <div className='flex items-center gap-2 my-3'>
      <div onClick={() => toggleComplete(id)} className='flex items-center flex-1 cursor-pointer'>
        <img src={isComplete ? click : no_click} alt="Toggle status icon" className='w-7' />
        <p className={`text-slate-700 ml-4 text-[17px] ${isComplete ? 'line-through' : ''}`}>
          {text}
        </p>
      </div>
      
      <img 
        onClick={() => deleteTodo(id)} 
        src={del} 
        alt="Delete icon" 
        className='w-5 cursor-pointer'
      />
    </div>
  );
};

export default Todoitem;


