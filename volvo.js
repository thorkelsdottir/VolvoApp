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

class VolvoCard extends React.Component {
  state = {
    modalVisible: false,
  }
  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }
  render()  {
    let counter = 0;
    // DATA tekur við properti úr constuctor
    const DATA = this.props.theCard;
    // Map tekur við parameter sem rendarar hvert view fyrir sig
    const cardData = DATA.map((data) => {
      return (
        <View key={counter++} style={styles.cardWraper}>
          <Image style={styles.image} source={{uri:data.picture}}/>
          <Text style={styles.h1}>{'VOLVO '+data.title}</Text>
          <Text style={styles.text}>{data.year}</Text>

          <TouchableHighlight style={styles.moreinfo} onPress={() => {
            this.setModalVisible(true)
          }}><Text style={styles.moreinfoText}>More Info</Text>
          </TouchableHighlight>

          <Modal
            animationType={"slide"}
            transparent={false}
            visible={this.state.modalVisible}
            onRequestClose={() => {alert("Modal has been closed.")}}>
            <ScrollView>
             <View style={{marginTop: 22, marginBottom: 50}}>
              <View>
                <Image style={styles.image} source={{uri:data.picture}}/>
                <Text style={styles.h1}>{'VOLVO '+data.title}</Text>
                <Text style={styles.text}>{data.year}</Text>
                <Text style={styles.moretext}>{data.details}</Text>

                <TouchableHighlight style={styles.moreinfo} onPress={() => {
                  this.setModalVisible(!this.state.modalVisible)
                  }}>
                  <Text style={styles.moreinfoText}>Back</Text>
                </TouchableHighlight>

              </View>
             </View>
           </ScrollView>
          </Modal>
        </View>
      )
    })
    return (
      <View>
        <Text style={styles.buttonTextprev}>‹</Text>
        <Swiper style={styles.swiper}>
          {cardData}
        </Swiper>
        <Text style={styles.buttonTextnext}>›</Text>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  swiper: {
    height:300,
    marginTop: 25,
  },
  container: {
   flex: 1,
   backgroundColor: 'transparent',
   alignItems: 'center',
   justifyContent: 'center',
 },
 cardWraper: {
   backgroundColor: 'white',
   height: 360,
   width: 320,
   alignSelf: 'center',
   marginBottom:20,
   borderRadius: 2,
   shadowColor: 'black',
   shadowOpacity: 0.35,
   shadowRadius: 4,
   shadowOffset: {width: 1, height: 1},
 },
 image:{
   marginBottom:16,
   alignSelf: 'center',
   width: 320,
   height: 170,
   borderRadius: 2,
 },
 h1:{
   height: 24,
   width:260,
   fontSize:22,
   fontWeight: 'bold',
   marginTop:25,
   alignSelf: 'center',
   color: '#455A64',
   paddingLeft:5,
   textAlign:'center',
 },
 text:{
   height: 18,
   width: 90,
   fontSize: 14,
   marginTop: 20,
   alignSelf: 'center',
   marginBottom: 20,
   color: 'black',
 },
 moreinfo: {
   height: 36,
   backgroundColor: '#003057',
   marginRight:100,
   marginLeft: 100,
 },
 moreinfoText: {
   color: 'white',
   fontSize:14,
   fontWeight: 'bold',
   alignSelf: 'center',
   paddingTop: 8,
 },
 moretext: {
   fontSize: 14,
   paddingLeft: 20,
   paddingRight: 20,
   marginBottom: 30,
 },
 buttonTextprev: {
   color: "white",
   fontSize: 30,
   marginTop: 10,
   position: 'absolute',
   bottom: 430,
   left: 5,
   backgroundColor: 'transparent',
 },
 buttonTextnext: {
   color: "white",
   fontSize: 30,
   marginTop: 10,
   position: 'absolute',
   bottom: 430,
   right: 5,
   backgroundColor: 'transparent',
 },
});

export default VolvoCard;
