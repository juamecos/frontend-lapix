// @ts-nocheck
import { RouteProp } from "@react-navigation/core";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "src/navigation/MainNavigator";


type FindScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'FindScreen'
>;
type FindScreenRouteProp = RouteProp<RootStackParamList, 'FindScreen'>;

export type FindScreenProps = {
  navigation?: FindScreenNavigationProp;
  route?: FindScreenRouteProp;
  otherProps?: any;
};