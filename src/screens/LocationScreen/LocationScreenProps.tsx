// @ts-nocheck
import { RouteProp } from "@react-navigation/core";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "src/navigation/MainNavigator";


type LocationScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'LocationScreen'
>;
type LocationScreenRouteProp = RouteProp<RootStackParamList, 'LocationScreen'>;

export type LocationScreenProps = {
  navigation?: LocationScreenNavigationProp;
  route?: LocationScreenRouteProp;
  otherProps?: any;
};