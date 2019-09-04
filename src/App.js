import React, {Component, Fragment} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import screens from './routes';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeScreen: 'getting_started',
    };
  }

  changeScreen = screen => () => {
    this.setState({
      activeScreen: screen,
    });
  };

  render() {
    const {activeScreen} = this.state;
    return (
      <Fragment>
        <View>
          <Text style={styles.header}>Choose screen below:</Text>
          <View style={styles.menu}>
            {Object.keys(screens).map((screen, index) => {
              return (
                <TouchableOpacity
                  key={index}
                  style={{
                    ...styles.item,
                    backgroundColor: screen === activeScreen ? 'red' : 'white',
                  }}
                  onPress={this.changeScreen(screen)}>
                  <Text>{screen}</Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
        {this.renderByScreen(activeScreen)}
      </Fragment>
    );
  }
  renderByScreen = screenKey => {
    if (!screens.hasOwnProperty(screenKey)) {
      return null;
    }
    const Screen = screens[screenKey];
    return <Screen />;
  };
}

const styles = StyleSheet.create({
  header: {
    marginLeft: 5,
  },
  menu: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    margin: 20,
  },
  item: {
    marginLeft: 5,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 20,
    padding: 5,
  },
});

export default App;
