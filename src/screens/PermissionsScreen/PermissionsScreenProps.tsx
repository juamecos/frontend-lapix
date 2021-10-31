// @ts-nocheck
import { RouteProp } from "@react-navigation/core";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "src/navigation/MainNavigator";


type PermissionsScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'PermissionsScreen'
>;
type PermissionsScreenRouteProp = RouteProp<RootStackParamList, 'PermissionsScreen'>;

export type PermissionsScreenProps = {
  navigation?: PermissionsScreenNavigationProp;
  route?: PermissionsScreenRouteProp;
  otherProps?: any;
};