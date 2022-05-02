
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { useSelector } from 'react-redux';
import AuthStack from './AuthStack';
import introSlider from './IntroSlider';
import MainStack from './MainStack';

const Stack = createStackNavigator();

export default Routes = () => {
    const user = useSelector(state => state.userStatus.userData)
    
    console.log("sdcfgvbhjnkm", user)
    const intro = useSelector(state=> state.appIntro )

    
    return(
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown:false}}>
                {
                    !!intro ? introSlider(Stack):!!user?.access_token ? MainStack(Stack):AuthStack(Stack)
                }
            </Stack.Navigator>
        </NavigationContainer>
    )
};