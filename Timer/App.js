import * as React from 'react';
import { Text, View, Button, ScrollView, StyleSheet, Switch } from 'react-native';
import { Constants } from 'expo';
import { render } from 'react-dom';

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  count: {
    fontSize:48,
  }
})

class Counter extends React.Component {
  constructor() {
    super()
    this.state = {
    count: 0,
}

componentDidMount() {
  this.interval = setInterval(this.inc, 1000)
}

componentWillUnmount() {
  clearInterval(this.interval)
}

inc = () => {
  this.setState(prevState => ({
    count: prevState.count + 1,  
  }))
}  

  render(){
  return (
    <View style={styles.appContainer}>
      <Text style={styles.count}>{this.state.count}
        </Text>
    </View>
  )
}
}