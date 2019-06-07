import React from "react";
import { View, Text, ImageBackground,Image } from "react-native";
import { Container, Content, Form, Item, Input, Button } from "native-base";
const Login = ({ navigation }) => (
  <Container>
    <Content>
      <Form>
        <Item>
          <Input placeholder="Login" />
        </Item>

        <Item>
          <Input placeholder="Senha" />
        </Item>

        <Button block info onPress={() => navigation.navigate("Principal")}>
          <Text> Logar </Text>
        </Button>

        <Button block light onPress={() => navigation.navigate("About")}>
          <Text> Criar conta </Text>
        </Button>
      </Form>
      <Image
          
          source={require('./img/tindu.png')}
        />
    </Content>
  </Container>
);

Login.navigationOptions = {
  title: "Bem-Vindo!"
};

export default Login;
