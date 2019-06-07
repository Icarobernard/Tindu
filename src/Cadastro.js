

import React from 'react';
import { Container, Content, Form, Item, Input,Button } from 'native-base';
import { View, Text, Image } from 'react-native';


const Cadastro = () => (
    <Container>
    <Content>
      <Form>
        <Item>
          <Input placeholder="Nome" />
        </Item>

        <Item>
          <Input placeholder="Login" />
        </Item>

        <Item>
          <Input placeholder="Senha"  secureTextEntry={true} />
        </Item>

        <Item>
          <Input placeholder="Repetir senha"  secureTextEntry={true}  />
        </Item>
        <Item last>
          <Input placeholder="Descrição" />
        </Item>
  
    <Button block success onPress={() => alert("Cadastrado com sucesso!") }><Text> Cadastrar </Text></Button>

        
      </Form>

      <Image
          
          source={require('./img/cadastro.png')}
        />
    </Content>
  </Container>
);

Cadastro.navigationOptions = {
  title: 'Cadastro',
}


export default Cadastro;