// @ts-nocheck
import { RouteProp } from "@react-navigation/core";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "src/navigation/MainNavigator";


type LoadingScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'LoadingScreen'
>;
type LoadingScreenRouteProp = RouteProp<RootStackParamList, 'LoadingScreen'>;

export type LoadingScreenProps = {
  navigation?: LoadingScreenNavigationProp;
  route?: LoadingScreenRouteProp;
  otherProps?: any;
};