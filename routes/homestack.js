import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import SplashScreen from '../screens/SplashScreen';
import SignUpForm from '../screens/SignUpForm';

const screens = {
    PlaceSafe: {
        screen:SplashScreen
    },

    SignUp: {
        screen:SignUpForm

    },
}

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);


