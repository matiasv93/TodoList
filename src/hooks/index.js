import React, {createContext, useState, useCallback} from 'react';
import AsyncStorage from '@react-native-community/async-storage';

export const TodoContext = createContext({});

const TodoContextProvider: React.FC = ({children}) => {
  const [todoList, changeTodoList] = useState([]);

  const saveOnAsyncStorage = useCallback(async (list) => {
    try {
      await AsyncStorage.setItem('@todo_list', JSON.stringify(list));
    } catch (e) {
      alert('Failed to save the data');
    }
  }, []);

  const addTodo = useCallback(
    (newTodo) => {
      saveOnAsyncStorage([newTodo, ...todoList]);
      changeTodoList([newTodo, ...todoList]);
    },
    [todoList, changeTodoList, saveOnAsyncStorage],
  );

  return (
    <TodoContext.Provider
      value={{
        todoList,
        addTodo,
        // changeTodoStatus,
        // deleteTodo,
        // editTodo,
      }}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;
