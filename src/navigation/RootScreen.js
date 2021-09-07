import React from 'react';
import {connect} from 'react-redux';
import * as actions from './../store/actions/userAction';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import Login from '../screens/Login';
import News from '../screens/News';

const mapStateToProps = state => {
  return {
    user: state.user,
  };
};

class RootScreens extends React.Component {
  componentDidMount() {
    console.log(this.props);
  }
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      email: '',
      password: '',
    };
    this.showPassword = this.showPassword.bind(this);
    this.Login = this.Login.bind(this);
  }
  showPassword() {
    this.setState({show: !this.state.show});
  }
  Login() {
    if (this.state.email === 'admin' && this.state.password === 'hola123') {
      console.log('ingreso correctamente');
    }
  }
  render() {
    return (
      <NavigationContainer>
        {this.props.user.email.trim() === '' ? (
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
            }}>
            <Stack.Screen name="Home" component={Login} />
          </Stack.Navigator>
        ) : (
          <News />
        )}
      </NavigationContainer>
    );
  }
}

export default connect(mapStateToProps, actions)(RootScreens);
