import {StyleSheet, Dimensions} from 'react-native';
import theme from '../../theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainContainer: {
    flex: 1,
    width: Dimensions.get('window').width,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleContainer: {
    alignSelf: 'stretch',
    marginHorizontal: 32,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: theme.colors.primary,
    alignSelf: 'center',
    marginBottom: 15,
  },
  formContainer: {
    paddingBottom: 30,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: theme.colors.secondary,
  },
  todoInput: {
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: theme.colors.secondary,
    width: Dimensions.get('window').width * 0.9,
    maxWidth: 400,
    borderRadius: 5,
    height: 50,
    marginTop: 10,
    paddingHorizontal: 16,
    fontSize: 18,
  },
  addButton: {
    marginTop: 24,
    height: 50,
    width: Dimensions.get('window').width * 0.9,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.secondary,
  },
  addButtonText: {
    color: theme.colors.white,
    fontWeight: '600',
    fontSize: 20,
  },
  buttonDisabled: {
    backgroundColor: theme.colors.grey,
  },
});

export default styles;
