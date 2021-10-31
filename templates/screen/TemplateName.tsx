import React, { FC, useEffect } from 'react'
import { SafeAreaView, Text } from 'react-native'
import style from './TemplateNameStyle';
import { TemplateNameProps } from './TemplateNameProps';


/**
 * Screen component description
 *
 * @returns Screen
 */
const TemplateName: FC<TemplateNameProps> = ({ route, navigation }) => {
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
      testID='TemplateName'
    >
      <Text
        // style={}
      >
        This is a screen template
      </Text>
    </SafeAreaView>
  )
};

export default TemplateName;
