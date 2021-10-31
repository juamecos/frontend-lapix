// @ts-nocheck
import { RouteProp } from "@react-navigation/core";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "src/navigation/MainNavigator";


type TemplateNameNavigationProp = StackNavigationProp<
  RootStackParamList,
  'TemplateName'
>;
type TemplateNameRouteProp = RouteProp<RootStackParamList, 'TemplateName'>;

export type TemplateNameProps = {
  navigation?: TemplateNameNavigationProp;
  route?: TemplateNameRouteProp;
  otherProps?: any;
};