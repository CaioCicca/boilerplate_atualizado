import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../screens/Home"
import Contact from "../screens/Contact"
import Batata from "../screens/Batata";

const Stack =  createNativeStackNavigator()

const StackRoutes = () => { 
    return(
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home}/>
            <Stack.Screen name="Contact" component={Contact}/>
            <Stack.Screen name="Batata" component={Batata}/>
        </Stack.Navigator>
    );
};

export default StackRoutes;