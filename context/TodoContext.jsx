import { createContext, useState } from "react";

export const TodoContext = createContext();

const TodoWrapper = ({ children }) => {
  const [todos, setTodos] = useState([]);

  //  fetching todos from api endpoint
  const refreshTodos = async () => {
    try {
      const res = await fetch("/api/getTodos");
      const latestTodos = await res.json();
      setTodos(latestTodos);
    } catch (err) {
      console.log(err);
    }
  };

    // adding a new todo to the api endpoint
    const addTodos = async (description) => {
        try {
            const res = await fetch("/api/createTodo", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({description}),
            });
            const newTodo = await res.json();
            setTodos((prevTodos) =>{ 
              return[newTodo, ...prevTodos]});
        } catch (err) {
            console.log(err);
        }
    }

    // updating a todo in the api endpoint
  
    const updateTodos = async (todo) => {
        try {
            const res = await fetch(`/api/updateTodo/`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(todo),
            });
            const updatedTodo = await res.json();
            setTodos(prevTodos => prevTodos.map(prevTodo => (prevTodo.id === updatedTodo.id ? updatedTodo : prevTodo)));
        } catch (err) {
            console.log(err);
        }
    }
    // const updateTodos = async (updatedTodo) => {
    //     try {
    //         const res = await fetch("/api/updateTodo", {
    //         method: "PUT",
    //         body: JSON.stringify(updatedTodo),
    //         headers: {
    //             "Content-Type": "application/json",
    //         },
            
    //         });
    //         await res.json();
    //         setTodos(prevTodos => {
    //           const existingTodos =[...prevTodos];
    //             const existingTodo = existingTodos.find(todo => todo.id === updatedTodo.id);
    //             existingTodo.fields = updatedTodo.fields;
    //             return existingTodos;
    //         })
          
    //     } catch (err) {
    //         console.log(err,'error updating todo');
    //     }
    // }



    // deleting a todo in the api endpoint

    const deleteTodos = async (id) => {
        try {
            const res = await fetch("/api/deleteTodo", {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({id}),
            });
            const deletedTodo = await res.json();
            setTodos(todos.filter((t) => t.id !== deletedTodo.id));
        } catch (err) {
            console.log(err);
        }
    }
  return (
    <TodoContext.Provider
      value={{
        todos,
        setTodos,
        refreshTodos,
        updateTodos,
        deleteTodos,
        addTodos,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};
export default TodoWrapper;

