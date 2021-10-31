# generatordemo
---
Starting point for creating a simple boilerplate for React Native with Typescript based in npx react-native init PROJECTNAME --template react-native-template-typescript
---
It is using generate-react-cli to be able to create component ans screen folders and files from the command line interface

---
For the moment it is only possible to create components and screens with index.tsx, \*.test.tsx,.\*.styles.tsx, \*.tsx

- to create a component

npx generate-react-cli component CustomText

- to create a screen
npx generate-react-cli component LoginScreen --type=screen

Also has setup for absolute paths 

Includes login and signup forms with Formik and Yup for validation

In order to test Formik without warnings in jest console we user @testing-library/jest-native as in this issue was explained

https://stackoverflow.com/questions/65753374/react-native-test-failed-when-using-formik-and-yup-as-validation-schema

Added Forgot form, TabNavigator, Apollo, graphqlcodegen, AuthContext

