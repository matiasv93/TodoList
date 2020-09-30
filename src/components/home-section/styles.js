import {StyleSheet, Dimensions} from 'react-native';
import theme from '../../theme';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: theme.colors.white,
    flex: 1,
    justifyContent: 'center',
  },
  titleContainer: {
    backgroundColor: theme.colors.primary,
    alignItems: 'center',
    width: Dimensions.get('window').width,
  },
  title: {
    color: theme.colors.white,
    fontWeight: '300',
    padding: 20,
  },
  listContainer: {
    flex: 1,
    paddingTop: 20,
    alignItems: 'center',
    width: Dimensions.get('window').width,
  },
  emptyList: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 70,
  },
  emptyListPlaceholder: {
    color: theme.colors.primary,
    fontSize: 20,
  },
});

export default styles;
