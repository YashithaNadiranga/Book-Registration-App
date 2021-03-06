import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';
import { Table, Row, Rows } from 'react-native-table-component';

export default class HomeScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      tableHead: ['Name', 'ISBN', 'Author', 'Publisher', 'Update', 'Delete'],
      tableData: [
        ['The Taming of the Shrew', '1234', 'William Shakespeare', 'Unknown',
        <Button style={styles.buttonUpdate}><Text style={styles.btnText}>Update</Text></Button>
        ,
        <Button style={styles.buttonDelete}><Text style={styles.btnText}>Delete</Text></Button>
      ],
      ['Hamlet', '1267', 'William Shakespeare', 'Unknown',
      <Button style={styles.buttonUpdate}><Text style={styles.btnText}>Update</Text></Button>
      ,
      <Button style={styles.buttonDelete}><Text style={styles.btnText}>Delete</Text></Button>
      ],
      ]
    }
  }

  render() {
    return (

        <Container>
        <Header>
          <Left>
            <Button transparent>
            <Icon name='menu' />
            </Button>
          </Left>
          <Body>
            <Title>Home</Title>
          </Body>
          <Right>
            <Button transparent onPress={()=>{this.props.navigation.navigate('AddNewBook')}}>
              <Icon name='add' />
            </Button>
          </Right>
        </Header>
        <View style={{marginTop:20}}>
        <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
          <Row data={this.state.tableHead} style={styles.head} textStyle={styles.text}/>
          <Rows data={this.state.tableData} textStyle={styles.text}/>
        </Table>
        </View>

      </Container>
    );
  }
}

const styles = StyleSheet.create({

  head: { height: 40, backgroundColor: '#f1f8ff' },
  text: { margin: 6 },
  buttonUpdate:{
    width:'100%', justifyContent:'center', backgroundColor:'#0FA14A'
  },
  buttonDelete:{
    width:'100%', justifyContent:'center', backgroundColor:'#FE4B4B'
  },
  btnText:{
    color:'white'
  }

});
