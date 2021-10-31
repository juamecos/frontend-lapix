// @ts-nocheck
import { RouteProp } from "@react-navigation/core";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "src/navigation/MainNavigator";


type EditProfileScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'EditProfileScreen'
>;
type EditProfileScreenRouteProp = RouteProp<RootStackParamList, 'EditProfileScreen'>;

export type EditProfileScreenProps = {
  navigation?: EditProfileScreenNavigationProp;
  route?: EditProfileScreenRouteProp;
  otherProps?: any;
};