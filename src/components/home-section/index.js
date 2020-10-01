import React, {useContext, useCallback} from 'react';
import {View, Text, FlatList, TouchableOpacity, Image} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import styles from './styles';
import {TodoContext} from '../../hooks';
import TodoForm from '../todo-form';
import deleteIcon from '../../../assets/icons/delete.png';

const HomeSection = () => {
  const {todoList, addTodo, updateTodo} = useContext(TodoContext);

  const handleCheckBoxChange = useCallback(
    (todoIndex) => {
      let newlist = [...todoList];
      newlist[todoIndex].completed = !todoList[todoIndex].completed;
      updateTodo(newlist);
    },
    [todoList, updateTodo],
  );

  const handleDeleteTodo = useCallback(
    (todoId) => {
      const newlist = todoList.filter((item) => item.id !== todoId);
      updateTodo(newlist);
    },
    [todoList, updateTodo],
  );

  const renderTodoList = useCallback(
    (data) => {
      return (
        <View style={styles.todoContainer}>
          <View style={styles.infoContainer}>
            <CheckBox
              style={styles.checkbox}
              boxType={'square'}
              value={data.item.completed}
              disabled={false}
              onValueChange={() => handleCheckBoxChange(data.index)}
            />
            <Text style={[styles.todoText, data.item.completed && styles.todoTextCompleted]}>
              {data.item.text}
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => handleDeleteTodo(data.item.id)}
            style={styles.deleteContainer}
          >
            <Image style={styles.deleteIcon} source={deleteIcon} />
          </TouchableOpacity>
        </View>
      );
    },
    [handleCheckBoxChange],
  );

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>
          Todo List
        </Text>
      </View>
      <TodoForm addTodo={addTodo} />
      <View style={styles.listContainer}>
        <FlatList
          data={todoList}
          keyboardShouldPersistTaps="always"
          keyExtractor={(item) => `${item.id}`}
          enableOnAndroid={true}
          contentContainerStyle={styles.flatList}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={
            <View style={styles.emptyList}>
              <Text style={styles.emptyListPlaceholder}>
                There are no items in the list
              </Text>
            </View>
          }
          renderItem={(item) => renderTodoList(item)}
        />
      </View>
    </View>
  );
};

export default HomeSection;
