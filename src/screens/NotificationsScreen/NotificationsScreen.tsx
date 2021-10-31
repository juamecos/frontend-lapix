import React, { FC, useEffect } from 'react'
import { SafeAreaView, Text } from 'react-native'
import style from './NotificationsScreenStyle';
import { NotificationsScreenProps } from './NotificationsScreenProps';


/**
 * Screen component description
 *
 * @returns Screen
 */
const NotificationsScreen: FC<NotificationsScreenProps> = ({ route, navigation }) => {
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
      testID='NotificationsScreen'
    >
      <Text
        // style={}
      >
        This is a screen template
      </Text>
    </SafeAreaView>
  )
};

export default NotificationsScreen;
