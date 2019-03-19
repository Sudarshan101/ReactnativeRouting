
import React, {Component} from 'react';
import {  View } from 'react-native';
import { Container, Header, Content, Button, Text } from 'native-base';
export default class Login extends Component {
    render() {
        return (
            <Container>
            <Content>
              <Button bordered className="bg" light>
                <Text>Light</Text>
              </Button>
              <Button bordered>
                <Text>Primary</Text>
              </Button>
              <Button bordered success>
                <Text>Success</Text>
              </Button>
              <Button bordered info>
                <Text>Info</Text>
              </Button>
              <Button bordered warning>
                <Text>Warning</Text>
              </Button>
              <Button bordered danger>
                <Text>Danger</Text>
              </Button>
              <Button bordered dark>
                <Text>Dark</Text>
              </Button>
            </Content>
          </Container>
        );
      }
}