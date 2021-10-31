// @ts-nocheck
import { RouteProp } from "@react-navigation/core";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "src/navigation/MainNavigator";


type SingleStoneScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'SingleStoneScreen'
>;
type SingleStoneScreenRouteProp = RouteProp<RootStackParamList, 'SingleStoneScreen'>;

export type SingleStoneScreenProps = {
  navigation?: SingleStoneScreenNavigationProp;
  route?: SingleStoneScreenRouteProp;
  otherProps?: any;
};