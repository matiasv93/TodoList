import React, {createContext, useState, useCallback} from 'react';
import AsyncStorage from '@react-native-community/async-storage';

export const TodoContext = createContext({});

const TodoContextProvider: React.FC = ({children}) => {
  const [todoList, updateTodoList] = useState([]);

  const saveOnAsyncStorage = useCallback(async (list) => {
    try {
      await AsyncStorage.setItem('@todo_list', JSON.stringify(list));
    } catch (e) {
      alert('Failed to save the data');
    }
  }, []);

  const getOnAsyncStorage = useCallback(async () => {
    try {
      const storedTodoList = await AsyncStorage.getItem('@todo_list');

      if (storedTodoList) {
        updateTodoList(JSON.parse(storedTodoList));
      }
    } catch (e) {
      alert('Failed to get the data');
    }
  }, []);

  const addTodo = useCallback(
    (newTodo) => {
      saveOnAsyncStorage([newTodo, ...todoList]);
      updateTodoList([newTodo, ...todoList]);
    },
    [todoList, updateTodoList, saveOnAsyncStorage],
  );

  const updateTodo = useCallback(
    (updatedList) => {
      updateTodoList(updatedList);
      saveOnAsyncStorage(updatedList);
    },
    [todoList, updateTodoList, saveOnAsyncStorage],
  );

  return (
    <TodoContext.Provider
      value={{
        todoList,
        addTodo,
        updateTodo,
        getOnAsyncStorage,
      }}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;
