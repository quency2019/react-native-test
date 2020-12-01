import React, { Component } from 'react'
import { Button, Text, View } from 'react-native'

class componentName extends Component {
  render() {
    return (
      <View>
        <Text> Login </Text>
        <Button 
        title="Go to Register"
        onPress={()=>{
                this.props.navigation.navigate('RegisterRoute')


        }}></Button>
      </View>
    )
  }
}

export default componentName