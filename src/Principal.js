import React, { Component } from 'react';
import { Image, Alert } from 'react-native';
import { Container, View, DeckSwiper, Card, CardItem, Thumbnail, Text, Left, Body,Button,Toast  } from 'native-base';

import Icon from 'react-native-vector-icons/FontAwesome';

const cards = [
  {
    text: 'Ana Clara',
    name: 'Apaixonada em gatos',
    image: require('./img/img1.jpeg'),
  },
  {
    text: 'Liu ',
    name: 'Hi moom, im so lost',
    image: require('./img/img2.jpeg'),
  },
  {
    text: 'Siri ',
    name: 'IM A WITCHEEERR! ',
    image: require('./img/img.jpeg'),
  },
];
export default class EstiloTinder extends Component {
    
  render() {
    return (
      <Container>
        <View>
          <DeckSwiper
            ref={(c) => this._deckSwiper = c}
            dataSource={cards}
            renderEmpty={() =>
              <View style={{ alignSelf: "center" }}>
                <Text>Over</Text>
              </View>
            }
            renderItem={item =>
              <Card style={{ elevation: 3 }}>
                <CardItem>
                  <Left>
                    <Thumbnail source={item.image} />
                    <Body>
                      <Text>{item.text}</Text>
                      <Text note>criado em 16/02/19</Text>
                    </Body>
                  </Left>
                </CardItem>
                <CardItem cardBody>
                  <Image style={{ height: 300, flex: 1 }} source={item.image} />
                </CardItem>
                <CardItem>
                <Icon name="times-circle" size={34} color="#E84320" onPress={() => this._deckSwiper._root.swipeLeft()} />
                  <Text>                {item.name}                 </Text>
                  
            
                  <Icon name="heart" size={28} color="#57BB1D" onPress={this.showAlert}/>
                </CardItem>
              </Card>
            }
          />
        </View>
        {/* <View style={{ flexDirection: "row", flex: 1, position: "absolute", bottom: 50, left: 0, right: 0, justifyContent: 'space-between', padding: 15 }}>
          <Button iconLeft onPress={() => this._deckSwiper._root.swipeLeft()}>
          <Icon name="home" size={18} color="#999" />
            <Text>Swipe Left</Text>
            
          </Button>
          <Button iconRight onPress={() => this._deckSwiper._root.swipeRight()}>
          <Icon name="home" size={18} color="#999" />
            <Text>Swipe Right</Text>
          </Button>
        </View> */}
      </Container>
    );

  }
  showAlert = () => {
    Alert.alert(
      'Olha só!!!',
      'Você recebeu um match!',
      [
        {text: 'Continuar seguindo', onPress: () => console.log('OK Pressed')},
      ],
      { cancelable: false }
    )
  }
}