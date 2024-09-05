import React, { useRef, useState, useEffect } from 'react';
import list from '../assets/list.png'; // Ensure this file exists in assets
import Todoitem from './Todoitem';
import girl from '../assets/girl.png';

const Todolist = () => {
  const [todolist, setTodolist] = useState([]);
  const inputRef = useRef();

  const add = () => {
    const inputText = inputRef.current.value.trim();
    if (inputText === "") {
      return;
    }
    const newTodo = {
      id: Date.now(),
      text: inputText,
      isComplete: false,
    };
    setTodolist((prev) => [...prev, newTodo]);
    inputRef.current.value = "";
  };

  const deleteTodo = (id) => {
    setTodolist((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const toggleComplete = (id) => {
    setTodolist((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, isComplete: !todo.isComplete } : todo
      )
    );
  };

  useEffect(() => {
    console.log(todolist);
  }, [todolist]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="flex flex-col max-w-md bg-[#F9EEE3] p-7 h-[667px] rounded-xl w-[375px] outline outline-offset-4 outline-black">
        {/* Greeting */}
        <div className="relative mt-4">
          <h1 className="text-3xl font-semibold">
            Hello Chathuu
          </h1>
          <img
            className="absolute top-0 right-0 w-9 h-9 mt-2 mr-[-0.5rem]"
            src={girl}
            alt="Girl Icon"
          />
        </div>
        
        {/* To-Do List Header */}
        <div className='flex items-center gap-2 mt-6'>
          <img src={list} alt="List icon" className="w-6 h-6" />
          <h3 className='text-2xl font-semibold'>To-Do List</h3>
        </div>
        
        {/* Input Section */}
        <div className='flex items-center rounded-full my-7 bg-slate-400'>
          <input 
            ref={inputRef} 
            className='flex-1 pl-6 pr-2 bg-transparent border-0 outline-none h-14 placeholder:text-slate-400' 
            type="text" 
            placeholder='Add Your Task' 
          />
          <button 
            onClick={add} 
            className='w-32 text-lg font-medium text-white bg-[#E4B080] border-none rounded-full cursor-pointer h-14'
          > 
            Add+ 
          </button>
        </div>
        
        {/* To-Do Items */}
        <div>
          {todolist.map((item) => (
            <Todoitem 
              key={item.id} 
              text={item.text} 
              id={item.id}
              isComplete={item.isComplete} 
              deleteTodo={deleteTodo} 
              toggleComplete={toggleComplete}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Todolist;

