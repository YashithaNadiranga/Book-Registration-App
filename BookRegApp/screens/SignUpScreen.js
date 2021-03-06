import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';

export default class SignUpScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={{fontSize: 25, marginTop: 20}}>Welcome Back</Text>
        <Text style={{fontSize: 16, color: 'gray', marginTop: 20}}>
          Sign Up to continue
        </Text>

        <TextInput
          style={{
            marginTop: 30,
            borderBottomColor: '#ddd',
            borderBottomWidth: 1,
            paddingBottom: 20,
          }}
          placeholder="User Name"
        />

        <TextInput
          style={{
            marginTop: 10,
            borderBottomColor: '#ddd',
            borderBottomWidth: 1,
            paddingBottom: 20,
          }}
          placeholder="Password"
        />
        <TextInput
          style={{
            marginTop: 10,
            borderBottomColor: '#ddd',
            borderBottomWidth: 1,
            paddingBottom: 20,
          }}
          placeholder="Address"
        />
        <TextInput
          style={{
            marginTop: 10,
            borderBottomColor: '#ddd',
            borderBottomWidth: 1,
            paddingBottom: 20,
          }}
          placeholder="Phone Number"
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
            }} onPress={()=>{this.props.navigation.navigate('Login')}}>
            <Text style={{textAlign: 'center', color: 'white', fontSize: 18}}>
              SignUp Now
            </Text>
          </TouchableOpacity>


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
