import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../screens/Home"
import Contato from "../screens/Contact"

const Stack =  createNativeStackNavigator()

const StackRoutes = () => { 
    return(
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home}/>
        </Stack.Navigator>
    );
};

export default StackRoutes;