/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 import type {Node} from 'react';
 import {
   SafeAreaView,
 } from 'react-native';
 
 import Main from './js/Main';
 
 const App: () => Node = () => {
 
   return (
     <SafeAreaView>
         <Main/>
     </SafeAreaView>
   );
 };
 
 export default App;
 