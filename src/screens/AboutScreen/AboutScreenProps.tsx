// @ts-nocheck
import { RouteProp } from "@react-navigation/core";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "src/navigation/MainNavigator";


type AboutScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'AboutScreen'
>;
type AboutScreenRouteProp = RouteProp<RootStackParamList, 'AboutScreen'>;

export type AboutScreenProps = {
  navigation?: AboutScreenNavigationProp;
  route?: AboutScreenRouteProp;
  otherProps?: any;
};