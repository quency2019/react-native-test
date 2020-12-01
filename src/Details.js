import React, { Component } from 'react'
import { Text, View } from 'react-native'

class componentName extends Component {
  render() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>{this.props.navigation.state.params.testId}</Text>
      </View>
    )
  }
}

export default componentName