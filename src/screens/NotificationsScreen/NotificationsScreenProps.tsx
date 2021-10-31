// @ts-nocheck
import { RouteProp } from "@react-navigation/core";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "src/navigation/MainNavigator";


type NotificationsScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'NotificationsScreen'
>;
type NotificationsScreenRouteProp = RouteProp<RootStackParamList, 'NotificationsScreen'>;

export type NotificationsScreenProps = {
  navigation?: NotificationsScreenNavigationProp;
  route?: NotificationsScreenRouteProp;
  otherProps?: any;
};