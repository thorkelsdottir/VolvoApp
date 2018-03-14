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

class VolvoNews extends React.Component {
  state = {
    modalNewsVisible: false,
  }
  setModalVisible(visible) {
   this.setState({modalNewsVisible: visible});
  }
  render(){
    let counter = 0;
    const Data = this.props.news;
    const MappedData = Data.map((data)=>{
      return(
        <View key={counter++} style={styles.cardWraper}>
          <Image style={styles.image} source={{uri:data.picture}}/>
          <Text style={styles.h2}>{data.title}</Text>
          <Text style={styles.date}>{data.date}</Text>
          <Text style={styles.text}>{data.text}</Text>

          <TouchableHighlight style={styles.moreinfo} onPress={() => {
            this.setModalVisible(true)
          }}><Text style={styles.moreinfoText}>Read more</Text>
          </TouchableHighlight>

          <Modal
            animationType={"slide"}
            transparent={false}
            visible={this.state.modalNewsVisible}
            onRequestClose={() => {alert("Modal has been closed.")}}
            >
            <ScrollView>
             <View style={{marginTop: 22}}>
              <View>
                <Image style={styles.image} source={{uri:data.picture}}/>
                <Text style={styles.h2}>{data.title}</Text>
                <Text style={styles.date}>{data.date}</Text>
                <Text style={styles.text}>{data.text}</Text>
                <Text style={styles.moretext}>{data.bigText}</Text>

                <TouchableHighlight style={styles.moreinfo} onPress={() => {
                  this.setModalVisible(!this.state.modalNewsVisible)
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

    return(
      <View>
        <Text style={styles.h1}>Heritage News</Text>
        <Text style={styles.buttonTextprev}>‹</Text>
        <ScrollView style={{marginBottom: 80}}>
          <Swiper showsPagination={false} style={styles.swiper}>
            {MappedData}
          </Swiper>
        </ScrollView>
        <Text style={styles.buttonTextnext}>›</Text>
      </View>
    )
  }
}
const styles = StyleSheet.create({
 cardWraper: {
   backgroundColor: 'white',
   width: 320,
   alignSelf: 'center',
   marginBottom:20,
   borderRadius: 2,
   marginTop: 15,
   shadowColor: 'white',
   shadowOpacity: 0.35,
   shadowRadius: 4,
   shadowOffset: {width: 1, height: 1},
   paddingBottom: 30,
 },
 image:{
   marginBottom:16,
   alignSelf: 'center',
   width: 320,
   height: 170,
   borderRadius: 2,
 },
 h1:{
   fontSize:22,
   fontWeight: 'bold',
   marginTop: 15,
   color: 'white',
   alignSelf: 'center',
 },
 h2:{
   width:300,
   fontSize:18,
   fontWeight: 'bold',
   marginTop:10,
   color: '#455A64',
   marginLeft: 15,
 },
 date:{
   width:300,
   fontSize: 12,
   fontStyle: 'italic',
   marginTop: 10,
   marginLeft: 15,
   color: 'gray',
 },
 text:{
   width:280,
   fontSize: 14,
   marginTop: 10,
   marginLeft: 15,
   color: 'black',
 },
 moreinfo: {
   height: 36,
   backgroundColor: '#003057',
   marginRight:100,
   marginLeft: 100,
   marginTop: 30,
 },
 moreinfoText: {
   color: 'white',
   fontSize:14,
   fontWeight: 'bold',
   alignSelf: 'center',
   paddingTop:8,
 },
 moretext: {
   fontSize: 14,
   paddingLeft: 20,
   paddingRight: 20,
 },
 buttonTextprev: {
   color: "white",
   fontSize: 30,
   marginTop: 10,
   position: 'absolute',
   bottom: 400,
   left: 5,
   backgroundColor: 'transparent',
 },
 buttonTextnext: {
   color: "white",
   fontSize: 30,
   marginTop: 10,
   position: 'absolute',
   bottom: 400,
   right: 5,
   backgroundColor: 'transparent',
 },
});

export default VolvoNews;
