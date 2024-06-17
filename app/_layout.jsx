import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { useFonts } from 'expo-font'

const RootLayout = () => {
    const [fontsLoaded] = useFonts({
        'inter':require('../assets/fonts/Inter-Regular.ttf'),
        'inter-medium':require('../assets/fonts/Inter-Medium.ttf'),
        'inter-bold':require('../assets/fonts/Inter-Bold.ttf')
    })
    if (!fontsLoaded) {
        return <View><Text>Loading...</Text></View>
       }
  return (
    <Stack screenOptions={{
        headerShown:false
    }}>
        <Stack.Screen name='(tabs)' options={{
            headerShown:false
        }}/>
    </Stack>
  )
}

export default RootLayout