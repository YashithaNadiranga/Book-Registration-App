import React, {Component} from 'react';
import {Alert, Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {container} from 'native-base';

export default class WelcomeScreen extends Component {

  constructor(props) {
    super(props)
    
  }

  render() {
    return (
      <View style={styles.container}>
        <Image
          source={require('../assets/book.png')}
          style={{width: '100%', height: 300}}
          resizeMode="contain"
        />
        <Text style={{fontSize: 30, fontWeight: 'bold'}}>Welcome</Text>

        <Text style={{fontSize: 16, marginTop: 10, color: 'gray'}}>
          Welcome to Book Registration system
        </Text>

        <View style={{flexDirection: 'row', paddingVertical: 20}}>
          <TouchableOpacity
            style={{
              backgroundColor: '#4255ff',
              padding: 10,
              width: 150,
              borderRadius: 30,
              marginHorizontal: 3,
            }} onPress={()=>{this.props.navigation.navigate('Login')}}>
            <Text style={{textAlign: 'center', color: 'white', fontSize: 18}}>
              Login
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              backgroundColor: 'white',
              padding: 10,
              width: 150,
              borderRadius: 30,
              marginHorizontal: 3,
              borderWidth: 1,
              borderColor: '#4255ff',
            }} onPress={()=>{this.props.navigation.navigate('SignUp')}}>
            <Text style={{textAlign: 'center', color: 'black', fontSize: 18}}>
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>

        <Text style={{fontSize: 16, marginTop: 10}}>Or Via Social Media</Text>

        <View style={{flexDirection: 'row', marginTop: 20}}>
          <TouchableOpacity
            style={{
              height: 40,
              width: 40,
              borderRadius: 40 / 2,
              backgroundColor: '#3f51b5',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={{fontSize: 20, color: 'white', fontWeight: 'bold'}}>
              f
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              height: 40,
              width: 40,
              borderRadius: 40 / 2,
              backgroundColor: '#f44336',
              marginHorizontal: 10,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={{fontSize: 20, color: 'white', fontWeight: 'bold'}}>
              G
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              height: 40,
              width: 40,
              borderRadius: 40 / 2,
              backgroundColor: '#1565c0',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={{fontSize: 20, color: 'white', fontWeight: 'bold'}}>
              in
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
