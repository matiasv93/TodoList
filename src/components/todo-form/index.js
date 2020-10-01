import React, {useState} from 'react';
import {
  View,
  Text,
  KeyboardAvoidingView,
  TouchableOpacity,
  TextInput,
  Platform,
} from 'react-native';
import styles from './styles';
import {generateId} from '../../helpers';

const TodoForm = (props) => {
  const { addTodo } = props;
  const [todo, setTodo] = useState('');

  const handleAddTodo = () => {
    addTodo({
      id: generateId(),
      text: todo,
      completed: false,
    });
    setTodo('')
  };

  const handleTodoChange = (value) => {
    setTodo(value);
  };

  return (
    <KeyboardAvoidingView
      keyboardVerticalOffset={Platform.select({
        ios: 0,
        android: -500,
      })}
      style={styles.container}
      behavior="padding">
      <View style={styles.mainContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Add a Todo</Text>
        </View>
        <View style={styles.formContainer}>
          <TextInput
            style={styles.todoInput}
            placeholder="Write your text here"
            onChangeText={(value) => handleTodoChange(value)}
            value={todo}
          />
          <TouchableOpacity
            style={[styles.addButton, !todo && styles.buttonDisabled]}
            disabled={!todo}
            onPress={handleAddTodo}>
            <Text style={styles.addButtonText}>ADD</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default TodoForm;
