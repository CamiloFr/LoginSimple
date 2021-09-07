import {StyleSheet, Dimensions} from 'react-native';
const {height} = Dimensions.get('screen');
const heightlogo = height * 0.18;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#739DE5',
  },
  containerlogo: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    paddingTop: '1%',
  },
  imagelogo: {
    width: heightlogo,
    height: heightlogo,
  },
  containertitlelogin: {
    flex: 1,
    paddingTop: '3%',
    backgroundColor: '#1E1E80',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  lettertitletextlogin: {
    color: '#FFFFFF',
    textAlign: 'center',
  },
  containerinputslogin: {
    backgroundColor: '#E8E8F2',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: '10%',
    height: '100%',
  },
  inputsLogin: {
    marginTop: '2%',
    marginBottom: '2%',
  },
  containernews: {
    backgroundColor: '#FFFFFF',
    flex: 1,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  containerboxnews: {
    flex: 1,
    backgroundColor: '#F2F2F2',
    margin: '3%',
    borderRadius: 20,
  },
  containerflatbox: {
    flex: 1,
    marginTop: '3%',
  },
  texttitlebox: {
    padding: '2%',
  },
  containericons: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: '5%',
  },
});
