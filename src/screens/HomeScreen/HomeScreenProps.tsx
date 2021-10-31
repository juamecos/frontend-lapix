// @ts-nocheck
import { RouteProp } from "@react-navigation/core";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "src/navigation/MainNavigator";


type HomeScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'HomeScreen'
>;
type HomeScreenRouteProp = RouteProp<RootStackParamList, 'HomeScreen'>;

export type HomeScreenProps = {
  navigation?: HomeScreenNavigationProp;
  route?: HomeScreenRouteProp;
  otherProps?: any;
};