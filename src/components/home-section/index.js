import React, {useContext} from 'react';
import {View, Text, FlatList} from 'react-native';
import styles from './styles';
import {TodoContext} from '../../hooks';
import TodoForm from '../todo-form';

const HomeSection = () => {
  const {todoList, addTodo} = useContext(TodoContext);

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
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={
            <View style={styles.emptyList}>
              <Text style={styles.emptyListPlaceholder}>
                There are no items in the list
              </Text>
            </View>
          }
          renderItem={({item, index}) => (
            <Text style={styles.emptyListPlaceholder}>
              {item.text}
            </Text>
          )}
        />
      </View>
    </View>
  );
};

export default HomeSection;
