import React, { useState } from 'react';
import { HiMiniPlus, HiOutlineTrash } from 'react-icons/hi2';

const TodoListInput = ({ todoList, setTodoList }) => {
  const [option, setOption] = useState("");

  // إضافة خيار إلى القائمة
  const handleAddOption = () => {
    if (option.trim()) {
      setTodoList([...todoList, { text: option.trim(), completed: false }]); // استخدام كائن مع خاصية text
      setOption("");
    }
  };

  // حذف خيار من القائمة
  const handleDeleteOption = (index) => {
    const updatedArr = todoList.filter((_, idx) => idx !== index);
    setTodoList(updatedArr);
  };

  return (
    <div>
      {todoList.map((item, index) => (
        <div
          key={index}  // استخدم index كـ key لأن `item` هو كائن
          className='flex justify-between bg-gray-50 border border-gray-100 px-3 py-2 rounded-md mb-3 mt-2'
        >
          <p className='text-xs text-black'>
            <span className='text-xs text-gray-400 font-semibold mr-2'>
              {index < 9 ? `0${index + 1}` : index + 1}
            </span>
            {item.text} {/* الآن نعرض النص فقط */}
          </p>

          <button
            className='cursor-pointer'
            onClick={() => handleDeleteOption(index)}
          >
            <HiOutlineTrash className='text-lg text-red-500' />
          </button>
        </div>
      ))}

      <div className='flex items-center gap-5 mt-4'>
        <input
          type='text'
          placeholder='Enter Task'
          value={option}
          onChange={({ target }) => setOption(target.value)}
          className='w-full text-[13px] text-black outline-none bg-white border border-gray-100 px-3 py-2 rounded-mo'
        />

        <button className='card-btn text-nowrap' onClick={handleAddOption}>
          <HiMiniPlus className='text-lg' /> Add
        </button>
      </div>
    </div>
  );
};

export default TodoListInput;
