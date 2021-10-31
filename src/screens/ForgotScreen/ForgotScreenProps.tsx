// @ts-nocheck
import { RouteProp } from "@react-navigation/core";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "src/navigation/MainNavigator";


type ForgotScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'ForgotScreen'
>;
type ForgotScreenRouteProp = RouteProp<RootStackParamList, 'ForgotScreen'>;

export type ForgotScreenProps = {
  navigation?: ForgotScreenNavigationProp;
  route?: ForgotScreenRouteProp;
  otherProps?: any;
};