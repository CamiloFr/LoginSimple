import React from 'react';
import {connect} from 'react-redux';
import * as actions from './../store/actions/userAction';
import * as Animatable from 'react-native-animatable';
import {View, Image} from 'react-native';
import logo from './../images/logo.png';
import {
  Input,
  Box,
  NativeBaseProvider,
  Center,
  Button,
  Modal,
} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import {styles} from '../css/style';

const mapStateToProps = state => {
  return {
    user: state.user,
  };
};

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      email: '',
      password: '',
      openModal: false,
    };
    this.showPassword = this.showPassword.bind(this);
    this.Login = this.Login.bind(this);
  }
  showPassword() {
    this.setState({show: !this.state.show});
  }
  Login() {
    if (this.state.email === 'admi' && this.state.password === 'hola123') {
      return this.props.user_token({email: 'admi'});
    }
    this.setState({openModal: !this.state.openModal});
  }
  render() {
    return (
      <NativeBaseProvider>
        <View style={styles.container}>
          <View style={styles.containerlogo}>
            <Image style={styles.imagelogo} source={logo} />
          </View>
          <Animatable.View
            style={styles.containertitlelogin}
            animation="zoomInUp">
            <Animatable.Text
              style={styles.lettertitletextlogin}
              animation="bounce">
              Inicio de sesión
            </Animatable.Text>
            <View style={styles.containerinputslogin}>
              <Center>
                <Box w="100%">
                  <View style={styles.inputsLogin}>
                    <Input
                      InputRightElement={<Icon name="envelope" size={30} />}
                      placeholder="Usuario"
                      onChangeText={e => this.setState({email: e})}
                      value={this.state.email}
                    />
                  </View>
                  <View style={styles.inputsLogin}>
                    <Input
                      type={this.state.show ? 'text' : 'password'}
                      onChangeText={e => this.setState({password: e})}
                      InputRightElement={
                        this.state.showPassword ? (
                          <Icon
                            name="eye"
                            size={30}
                            onPress={this.showPassword}
                          />
                        ) : (
                          <Icon
                            name="eye-slash"
                            size={30}
                            onPress={this.showPassword}
                          />
                        )
                      }
                      placeholder="Contraseña"
                    />
                  </View>
                  <Button
                    ml={1}
                    roundedLeft={0}
                    roundedRight="md"
                    endIcon={<Icon name="sign-in" color={'#FFF'} size={30} />}
                    onPress={this.Login}>
                    Ingresar
                  </Button>
                </Box>
              </Center>
            </View>
          </Animatable.View>
          <Modal isOpen={this.state.openModal}>
            <Modal.Content maxWidth="400px">
              <Modal.Header>Error en el inicio de sesión</Modal.Header>
              <Modal.Body>El usuario o la Contraseña es incorrecta</Modal.Body>
              <Modal.Footer>
                <Button.Group variant="ghost">
                  <Button
                    onPress={() =>
                      this.setState({openModal: !this.state.openModal})
                    }>
                    Aceptar
                  </Button>
                </Button.Group>
              </Modal.Footer>
            </Modal.Content>
          </Modal>
        </View>
      </NativeBaseProvider>
    );
  }
}

export default connect(mapStateToProps, actions)(Login);
