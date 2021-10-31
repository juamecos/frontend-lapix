// @ts-nocheck
import { RouteProp } from "@react-navigation/core";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "src/navigation/MainNavigator";


type AddStoneScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'AddStoneScreen'
>;
type AddStoneScreenRouteProp = RouteProp<RootStackParamList, 'AddStoneScreen'>;

export type AddStoneScreenProps = {
  navigation?: AddStoneScreenNavigationProp;
  route?: AddStoneScreenRouteProp;
  otherProps?: any;
};