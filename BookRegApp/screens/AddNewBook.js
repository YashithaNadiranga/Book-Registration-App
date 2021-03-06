import React, {Component} from 'react';
import {SafeAreaView, StyleSheet, Text, TextInput, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default class AddNewBook extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <View style={{flex: 1, justifyContent: 'center', padding: 20}}>
          <Text style={{textAlign: 'center', marginBottom: 30, fontSize: 30}}>
            Add New Book
          </Text>
          <TextInput style={styles.textInput} placeholder="Enter Book Name" />

          <TextInput style={styles.textInput} placeholder="Enter Book ISBN" />

          <TextInput style={styles.textInput} placeholder="Enter Book Author" />

          <TextInput
            style={styles.textInput}
            placeholder="Enter Book Publisher"
          />
          <View style={{alignItems: 'center'}}>
            <View
              style={{
                alignItems: 'center',
                marginVertical: 20,
                flexDirection: 'row',
              }}>
              <TouchableOpacity
                style={{
                  backgroundColor: '#4255ff',
                  padding: 15,
                  width: 150,
                  borderRadius: 50,
                  marginHorizontal: 5,
                }}>
                <Text style={{color: 'white', textAlign: 'center'}}>Save</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={{
                  backgroundColor: 'gray',
                  padding: 15,
                  width: 150,
                  borderRadius: 50,
                  marginHorizontal: 5,
                }} onPress={()=>{this.props.navigation.navigate('Home')}}>
                <Text style={{color: 'white', textAlign: 'center'}}
                >Back</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  textInput: {
    borderBottomWidth: 1,
    marginTop: 10,
    marginBottom: 10,
    borderColor: '#ddd',
  },
});
