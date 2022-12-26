import { FlatList, StyleSheet, View } from 'react-native'
import React, { Component } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from './Header'
import Categories from './Categories'
import Card from './Card'


export default class HomeScreen extends Component {

  constructor(props)
  {
    super(props);
    this.state = {
      isLoading: true,
      dataSource: []
    }
  }

  

  componentDidMount () {
    fetch("http://onedon.atwebpages.com/api/items.php")
    .then((response) => response.json())
    .then((responseJson) => {

      if (responseJson[0].message) {
          alert('Database Empty');
          // this.props.navigation.navigate('home');
      }else{
        this.setState({
          isLoading: false,
          dataSource: responseJson
        })
        // console.log(responseJson);
      }
      
    })
  }

  render()
  {
    let { dataSource } = this.state
    return(
      <View style={styles.container}>
         <Header />
         <Categories/>
         <FlatList data={dataSource}
         style={{marginTop:15}}         
         renderItem={({item,index})=><Card details={item} />}
         keyExtractor={item=>item.id}
         contentContainerStyle={styles.content}
         showsVerticalScrollIndicator={false}
         />
     </View>
    )
  }

}

const styles = StyleSheet.create({
  content:{
    paddingHorizontal:20,
    paddingVertical:20
    
  },
    container:{
        flex:1
    }
})