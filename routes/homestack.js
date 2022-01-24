import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import SplashScreen from '../screens/SplashScreen';
import SignUpForm from '../screens/SignUpForm';

const screens = {
    SignUp: {
        screen:SignUpForm

    },

    PlaceSafe: {
        screen:SplashScreen
    }

   
}

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);


