
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { useSelector } from 'react-redux';
import AuthStack from './AuthStack'
import MainStack from './MainStack'
import IntroSlider from './IntroSlider'
const Stack = createStackNavigator();

export default Routes = () => {
    const userData = useSelector(state => state?.userStatus?.userData)
    console.log("Userdata>>>", userData)
    const intro = useSelector(state => state?.appIntro?.introData)

    console.log('intro', intro);

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                {
                    intro
                        ? IntroSlider(Stack)
                        : !!(userData || userData?.access_token)
                            ? MainStack(Stack)
                            : AuthStack(Stack)
                }

                {/* {userData ? MainStack(Stack) : AuthStack(Stack)} */}
            </Stack.Navigator>
        </NavigationContainer>
    )
};