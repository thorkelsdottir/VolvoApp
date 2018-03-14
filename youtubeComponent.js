import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Modal,
  TouchableHighlight,
  WebView,
} from 'react-native';

class VolvoVideo extends React.Component {
  render(){
    return(
      <View style={styles.Video}>
        <Text style={styles.headerText}>Demonstration of the stability & precision of Volvo Dynamic Steering</Text>
        <WebView
        style={styles.Video}
        javaScriptEnabled={true}
        source={{html: '<iframe style="background-color: black; border: none;" width="300" height="200" src="https://www.youtube.com/embed/M7FIvfx5J10?rel=0&autoplay=0&showinfo=0&controls=0"></iframe>'}} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  headerText: {
    fontSize: 14,
    color: 'white',
    fontWeight: 'bold',
    alignSelf: 'center',
    textAlign: 'center',
    marginTop: 40,
    marginBottom: 30,
  },
  Video: {
    width: 300,
    height: 310,
    backgroundColor: 'transparent',
  },

});

export default VolvoVideo;
