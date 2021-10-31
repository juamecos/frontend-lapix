import React, { FC, useEffect } from 'react'
import { SafeAreaView, Text } from 'react-native'
import style from './SingleStoneScreenStyle';
import { SingleStoneScreenProps } from './SingleStoneScreenProps';


/**
 * Screen component description
 *
 * @returns Screen
 */
const SingleStoneScreen: FC<SingleStoneScreenProps> = ({ route, navigation }) => {
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
      testID='SingleStoneScreen'
    >
      <Text
        // style={}
      >
        This is a screen template
      </Text>
    </SafeAreaView>
  )
};

export default SingleStoneScreen;
