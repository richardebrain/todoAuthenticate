import CustomInput from "./CustomInput";
import CustomButton from "./CustomButton";
import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";
const Todo = ({ todo }) => {
  const {
    id,
    fields,
    fields: { description, completed },
  } = todo;
  const { updateTodos, deleteTodos } = useContext(TodoContext);

  const handleDelete = () => {
    deleteTodos(id);
  };
  const handleToggleCompleted = () => {
    updateTodos({ ...todo, fields: { ...fields, completed: !completed } });
  };
  return (
    <li className=" flex items-center shadow-lg  my-2 mx-4 py-2 px-1 dark:bg-slate-800  sm:px-4 sm:rounded-lg">
      <CustomInput
        name={description}
        type="checkbox"
        className="mr-2 form-checkbox h-5 w-5 outline-none cursor-pointer checked:focus:shadow-none dark:checked:bg-slate-600 dark:checked:focus:bg-slate-600 " 
        checked={completed}
        onChange={handleToggleCompleted}
        id="checkbox"
      />
      <p className={`flex-1 text-gray-800 dark:text-white ${completed ? "line-through" : " "}`}>
        {description}
      </p>
      <CustomButton
        className="text-sm text-white py-1 px-2 rounded mr-1 cursor-pointer bg-red-500 hover:bg-red-600 dark:bg-slate-400 dark:hover:bg-slate-500 "
        onClick={handleDelete}
      >
        Delete
      </CustomButton>
    </li>
  );
};

export default Todo;
