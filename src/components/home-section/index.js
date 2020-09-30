import React from 'react';
import {View, Text, TouchableOpacity, FlatList, Image} from 'react-native';
import styles from './styles';

const HomeSection = () => {
  const todoList = [{
    id: '449f00ad-3fe3-4c7d-ad7a-8d637dc7b27d',
    text: 'todo 1',
    completed: false,
  },
  {
    id: '449f00ad-3fe3-4c7d-ad7a-8d637dc7b272',
    text: 'todo 2',
    completed: false,
  }];

  const handleAddToDo = () => {};

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>
          Todo List
        </Text>
      </View>
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
