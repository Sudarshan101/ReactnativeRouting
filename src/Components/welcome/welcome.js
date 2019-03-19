
import React, {Component} from 'react';
import { StyleSheet, View,Text, StatusBar } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';

const styles = StyleSheet.create({
  buttonCircle: {
    width: 40,
    height: 40,
    backgroundColor: 'rgba(0, 0, 0, .2)',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 320,
    height: 320,
  }
});
 
const slides = [
  {
    key: 'somethun',
    title: 'Title 1',
    text: 'Description.\nSay something cool',
    image: require('./img/w1.png'),
    imageStyle: styles.image,
    backgroundColor: '#59b2ab',
  },
  {
    key: 'somethun-dos',
    title: 'Title 2',
    text: 'Other cool stuff',
    image: require('./img/w1.png'),
    imageStyle: styles.image,
    backgroundColor: '#febe29',
  },
  {
    key: 'somethun1',
    title: 'Rocket guy',
    text: 'I\'m already out of descriptions\n\nLorem ipsum bla bla bla',
    image: require('./img/w1.png'),
    imageStyle: styles.image,
    backgroundColor: '#22bcb5',
  }
];
 
export default class Welcome extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showRealApp: false,
      loading: true,
      //To show the main page of the app
    };
  }
  componentDidMount() {
    // AsyncStorage.getItem('first_time').then((value) => {
    //   this.setState({ showRealApp: !!value, loading: false });
    // });
  }
  _renderDoneButton = () => {
    // AsyncStorage.setItem('first_time', 'true').then(() => {
      // this.setState({ showRealApp: true });
        this.props.navigation.navigate('Login');
    // });
  }
 
  _onSkip = () => {
    // AsyncStorage.setItem('first_time', 'true').then(() => {
    //   this.setState({ showRealApp: true });
         this.props.navigation.navigate('Login');
    // });
  };
  render() {
    return (
        <AppIntroSlider
          slides={slides}
          bottomButton
          hideNextButton = {true}
          onDone = {this._renderDoneButton}
          showSkipButton={true}
          onSkip={this._onSkip}
        />
        
    );
  }
}