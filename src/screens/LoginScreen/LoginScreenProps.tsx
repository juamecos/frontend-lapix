// @ts-nocheck
import { RouteProp } from "@react-navigation/core";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "src/navigation/MainNavigator";


type LoginScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'LoginScreen'
>;
type LoginScreenRouteProp = RouteProp<RootStackParamList, 'LoginScreen'>;

export type LoginScreenProps = {
  navigation?: LoginScreenNavigationProp;
  route?: LoginScreenRouteProp;
  otherProps?: any;
};