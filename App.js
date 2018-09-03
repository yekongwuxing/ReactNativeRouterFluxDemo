/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Router,Scene} from 'react-native-router-flux';
import Test1 from './src/Test1';
import Test2 from './src/Test2';

const getSceneStyle = () => ({
    backgroundColor: '#F5FCFF',
    shadowOpacity: 1,
    shadowRadius: 3,
});

class App extends Component<Props> {
  render() {
    return (
        <Router getSceneStyle={getSceneStyle}>
            <Scene key='root'>
                <Scene key='test1' component={Test1} title='测试1' initial />
                <Scene key='test2' component={Test2} title='测试2' />
            </Scene>
        </Router>
    );
  }
}

export default App;