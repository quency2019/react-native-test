import React, { Component } from 'react'
import { Text, View ,Button} from 'react-native'

class HomePage extends Component {
  render() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Details"
          onPress={() => {
            this.props.navigation.push('HomeDetail', {
                testId: 666
            })
          }}
        />
      </View>
    )
  }
}

export default HomePage