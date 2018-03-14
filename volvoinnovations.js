import React from 'react';
import Swiper from 'react-native-swiper';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Modal,
  TouchableHighlight,
  ScrollView,
} from 'react-native';

class VolvoInnovations extends React.Component {
  render(){
    let counter = 0;
    const Data = this.props.inno;
    const MappedData = Data.map((data)=>{
      return(
        <View  key={counter++}>
          <Image style={styles.image} source={{uri:data.pictureInno}}/>
          <Text style={styles.title}>{data.title}</Text>
          <Text style={styles.text}>{data.text}</Text>
        </View>
      )
    })

    return(
      <View>
        <Text style={styles.headerText}>Innovations</Text>
        <ScrollView style={styles.boxWrapper}>
          {MappedData}
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  headerText: {
    fontSize:22,
    color: 'white',
    fontWeight: 'bold',
    alignSelf: 'center',
    marginTop: 20,
  },
  boxWrapper: {
    backgroundColor: 'white',
    width: 320,
    marginTop: 20,
    marginBottom: 200,
    borderRadius: 2,
    shadowColor: 'black',
    shadowOpacity: 0.35,
    shadowRadius: 4,
    shadowOffset: {width: 1, height: 1},
  },
  image: {
    width: 260,
    height: 160,
    alignSelf: 'center',
    marginTop: 30,
    marginBottom: 30,
    resizeMode: 'stretch',
  },
  title: {
    width: 260,
    textAlign:'center',
    marginLeft: 30,
    marginBottom: 15,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2f3437',
  },
  text: {
    width: 260,
    marginLeft: 30,
  },
});

export default VolvoInnovations;
