import React, { FC, useEffect } from 'react'
import { SafeAreaView, Text } from 'react-native'
import style from './AboutScreenStyle';
import { AboutScreenProps } from './AboutScreenProps';


/**
 * Screen component description
 *
 * @returns Screen
 */
const AboutScreen: FC<AboutScreenProps> = ({ route, navigation }) => {
  // From the previous screen
  const initialParams = route?.params

  // Context
  

  // Custom hooks
 

  // Internal state
  

  useEffect(() => {
    
  }, [])

  // Component JSX
  return (
    <SafeAreaView 
    // style={}
      testID='AboutScreen'
    >
      <Text
        // style={}
      >
        This is a screen template
      </Text>
    </SafeAreaView>
  )
};

export default AboutScreen;
