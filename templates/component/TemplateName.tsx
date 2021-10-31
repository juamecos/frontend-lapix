import React from 'react';
import { View, Text } from 'react-native';
import styles from './TemplateNameStyle'

export type Props = {
  name?: string;
};

const TemplateName: React.FC<Props> = ({...props}) => {
  return (
    <View testID='TemplateName'>
      <Text>
        
      </Text>
    </View>
  )
}

export default TemplateName;
