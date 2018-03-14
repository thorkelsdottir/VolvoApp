import Exponent from 'exponent';
import React from 'react';
// import axios from 'axios';
//Components
import VolvoCard from './volvo';
import VolvoInnovations from './volvoinnovations';
import VolvoNews from './volvoNewsComponent';
import VolvoVideo from './youtubeComponent';
import Topbar from './topbar';
//Data / API
import data from './json/volvoHeritage';
import dataInno from './json/volvoInno';
import volvoNews from './json/volvoNews';

//React Native Components
import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
} from 'react-native';

class App extends React.Component {
  // Constructor & super method tryggja að hægt sé að nota og senda property-s á undircomponentum
  constructor(props){
    super(props);
    this.state = {
      data: [],
      dataInno: [],
      dataNews: [],
      choseComp: '',
    };
    // To close fullsize nav when pressed any element in menu.
    this.chosenThing = this.chosenThing.bind(this);
  }

  componentDidMount(){
    // shuffle arrays for random array output
    function shuffle (array) {
      var i = 0
        , j = 0
        , temp = null;

      for (i = array.length - 1; i > 0; i -= 1) {
        j = Math.floor(Math.random() * (i + 1))
        temp = array[i]
        array[i] = array[j]
        array[j] = temp
      }
    }
    // Puts the data as randomResponce
    const randomResponce = data;
    shuffle(randomResponce);
    // changes the state
    this.setState({
      data:randomResponce,
      dataInno: dataInno,
      dataNews: volvoNews,
    });
  }
  // Tekur við völdu gildi út topbar
  chosenThing(thing){
    this.setState({choseComp: thing});
  }

  render(){
    return (
      <View style={styles.container}>
        <Topbar chooser={this.chosenThing}/>
        <Image style={styles.imageTop} source={require('./volvo_grill.jpg')}/>
        {this.state.choseComp === ''?<VolvoCard theCard={this.state.data}/>:null}
        {this.state.choseComp === 'Heritage'?<VolvoCard theCard={this.state.data}/>:null}
        {this.state.choseComp === 'Innovation'?<VolvoInnovations inno={this.state.dataInno}/>:null}
        {this.state.choseComp === 'News'?<VolvoNews news={this.state.dataNews}/>:null}
        {this.state.choseComp === 'Dynamics'?<VolvoVideo />:null}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  imageTop: {
    height: 100,
    alignSelf: 'stretch',
    marginTop: 10,
  },
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
  },
});

export default App;
