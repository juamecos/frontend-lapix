import React, { FC, useEffect } from 'react'
import { SafeAreaView, Text } from 'react-native'
import style from './FindScreenStyle';
import { FindScreenProps } from './FindScreenProps';


/**
 * Screen component description
 *
 * @returns Screen
 */
const FindScreen: FC<FindScreenProps> = ({ route, navigation }) => {
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
      testID='FindScreen'
    >
      <Text
        // style={}
      >
        This is a screen template
      </Text>
    </SafeAreaView>
  )
};

export default FindScreen;
