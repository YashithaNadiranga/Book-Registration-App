import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';

export default class LoginScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={{fontSize: 25, marginTop: 20}}>Welcome Back</Text>
        <Text style={{fontSize: 16, color: 'gray', marginTop: 20}}>
          Sign in to continue
        </Text>

        <TextInput
          style={{
            marginTop: 40,
            borderBottomColor: '#ddd',
            borderBottomWidth: 1,
            paddingBottom: 20,
          }}
          placeholder="User Name"
        />

        <TextInput
          style={{
            marginTop: 40,
            borderBottomColor: '#ddd',
            borderBottomWidth: 1,
            paddingBottom: 20,
          }}
          placeholder="Password"
        />

        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 20,
          }}>
          <TouchableOpacity
            style={{
              width: 200,
              backgroundColor: '#4255ff',
              padding: 15,
              borderRadius: 50,
              marginTop: 20,
            }} onPress={()=>{this.props.navigation.navigate('Home')}}>
            <Text style={{textAlign: 'center', color: 'white', fontSize: 18}}>
              Login Now
            </Text>
          </TouchableOpacity>

          <Text style={{marginTop: 20}}>Forget Password?</Text>

          <View style={{flexDirection: 'row', marginTop: 50}}>
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
          <View style={{flexDirection:'row', marginTop:40}}>
            <Text>Don't have an account? </Text>
            <Text style={{fontWeight:'bold'}} onPress={()=>{this.props.navigation.navigate('SignUp')}}>Sign Up</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
    justifyContent:"center",
  },
});
