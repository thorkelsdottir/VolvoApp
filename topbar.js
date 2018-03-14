import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Modal,
  TouchableHighlight,
} from 'react-native';

class Topbar extends React.Component {
  state = {
    modalVisible: false,
  }
  // Function sem sett er á TouchableHighlight til að breyta gildi á modalVisible
  setModalVisible(visible) {
   this.setState({modalVisible: visible});
  }

  render() {
    // To close fullsize nav when pressed any element in menu.
    setModalVisible = this.setModalVisible.bind(this);
    return(
      <View style={styles.topbar}>
        {/* Navbar at the top */}
        <TouchableHighlight onPress={() => {
            this.setModalVisible(true)
          }}><View style={styles.inline}><View/><Image style={{width: 184, height: 20, marginTop: 36, marginLeft: 33}} source={require('./icon/iheartvolvo.png')}/>
          <Image style={{width: 26, height: 19, marginTop: 37, marginRight: 10}} source={require('./icon/hamburger.png')} /></View>
        </TouchableHighlight>

        {/* Navbar fullsize */}
        <Modal style={{backgroundColor: 'black'}}
          animationType={"slide"}
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {alert("Modal has been closed.")}}>
          <View style={styles.modal}>

            {/* To close fullSize Navbar */}
            <TouchableHighlight onPress={() => {
              this.setModalVisible(!this.state.modalVisible)
            }}>
              <Image style={{width: 20, height: 20, marginTop: 40, marginRight: 12, alignSelf: 'flex-end'}} source={require('./icon/close.png')} />
            </TouchableHighlight>

            {/* The list of Tabs on fullSize Nav */}
            <View style={styles.modalList}>
              <TouchableHighlight onPress={() => {
                setModalVisible(!this.state.modalVisible);
                this.props.chooser('Heritage');
              }}>
                <Text style={styles.list}>VOLVO Heritage</Text>
              </TouchableHighlight>

              <TouchableHighlight onPress={() => {
                setModalVisible(!this.state.modalVisible);
                this.props.chooser('Innovation');
              }}>
                <Text style={styles.list}>Innovations</Text>
              </TouchableHighlight>

              <TouchableHighlight onPress={() => {
                setModalVisible(!this.state.modalVisible);
                this.props.chooser('News');
              }}>
                <Text style={styles.list}>Heritage News</Text>
              </TouchableHighlight>

              <TouchableHighlight onPress={() => {
                setModalVisible(!this.state.modalVisible);
                this.props.chooser('Dynamics');
              }}>
                <Text style={styles.list}>VOLVO Dynamics</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  topbar: {
    height: 60,
    alignSelf: 'stretch',
    backgroundColor: 'black',
  },
  inline: {
    alignSelf: 'stretch',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  modal: {
    backgroundColor: '#2f3437',
    flex: 1,
    alignSelf: 'stretch',
  },
  modalList: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  list: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign:'center',
    color: 'white',
    marginTop: 10,
    marginBottom: 30,
  },
});

export default Topbar;
