import React from 'react';
import { View, Text } from 'react-native';
import styles from './PreviewCardStyle'

export type Props = {
  name?: string;
};

const PreviewCard: React.FC<Props> = ({...props}) => {
  return (
    <View testID='PreviewCard'>
      <Text>
        
      </Text>
    </View>
  )
}

export default PreviewCard;
