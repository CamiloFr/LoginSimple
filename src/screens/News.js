import React from 'react';
import {connect} from 'react-redux';
import * as actions from './../store/actions/userAction';
import {View, ScrollView, Text} from 'react-native';
import {
  Box,
  NativeBaseProvider,
  Center,
  FlatList,
  Image,
  Button,
  Modal,
} from 'native-base';
import logo from './../images/logo.png';
import {styles} from '../css/style';
import dataJson from './../information/news.json';
import Icon from 'react-native-vector-icons/FontAwesome';
import image from './../images/image.jpg';

const mapStateToProps = state => {
  return {
    user: state.user,
  };
};

class News extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openModal: false,
      noticeliked: '',
    };
    this.likeNew = this.likeNew.bind(this);
  }
  likeNew(data) {
    this.setState({openModal: !this.state.openModal, noticeliked: data});
  }
  render() {
    return (
      <NativeBaseProvider style={{flex: 1}}>
        <View style={styles.container}>
          <View style={styles.containerlogo}>
            <Image style={styles.imagelogo} source={logo} />
          </View>
          <View style={styles.containernews}>
            <ScrollView>
              <View style={styles.containerflatbox}>
                <Text style={{textAlign: 'center'}}>Noticias de hoy</Text>
                <FlatList
                  data={dataJson}
                  renderItem={({item}) => (
                    <View style={styles.containerboxnews}>
                      <Center>
                        <Image
                          source={image}
                          size={'2xl'}
                          alt="Alternate Text"
                        />
                      </Center>
                      <Box w="100%">
                        <Text style={styles.texttitlebox}>{item.title}</Text>
                        <Text style={styles.texttitlebox}>
                          {item.description}
                        </Text>
                      </Box>
                      <View style={styles.containericons}>
                        <Icon
                          name="heart"
                          size={30}
                          onPress={() => this.likeNew(item.title)}
                        />
                      </View>
                    </View>
                  )}
                  keyExtractor={item => item.key}
                  nestedScrollEnabled
                />
              </View>
            </ScrollView>
            <View>
              <Button onPress={() => this.props.user_token({email: ''})}>
                Cerrar sesion
              </Button>
            </View>
          </View>
        </View>
        <Modal isOpen={this.state.openModal}>
          <Modal.Content maxWidth="400px">
            <Modal.Header>Te ha gustado la noticia: </Modal.Header>
            <Modal.Body>{this.state.noticeliked}</Modal.Body>
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
      </NativeBaseProvider>
    );
  }
}

export default connect(mapStateToProps, actions)(News);
