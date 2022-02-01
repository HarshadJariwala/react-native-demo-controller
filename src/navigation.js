import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Airbnbratingscreen from './Components/airbnbratingscreen';
import Avatarscreen from './Components/avatarscreen';
import Badgescreen from './Components/badgescreen';
import Bottomsheetscreen from './Components/bottomsheetscreen';
import Buttongroupscreen from './Components/buttongroupscreen';
import Buttonscreen from './Components/buttonscreen';
import Cardscreen from './Components/cardscreen';
import Checkboxscreen from './Components/checkboxscreen';
import Chipscreen from './Components/chipscreen';
import Circularsliderscreen from './Components/circularsliderscreen';
import Dividerscreen from './Components/dividerscreen';
import Fabscreen from './Components/fabscreen';
import Headerscreen from './Components/headerscreen';
import Iconscreen from './Components/iconscreen';
import Imagescreen from './Components/imagescreen';
import Inputscreen from './Components/inputscreen';
import Linearprogressscreen from './Components/linearprogressscreen';
import Listitemscreen from './Components/listitemscreen';
import Overlayscreen from './Components/overlayscreen';
import Pricingcardscreen from './Components/pricingcardscreen';
import Ratingscreen from './Components/ratingscreen';
import Searchbarscreen from './Components/searchbarscreen';
import Sliderscreen from './Components/sliderscreen';
import Socialiconscreen from './Components/socialiconscreen';
import Speeddialscreen from './Components/speeddialscreen';
import Switchscreen from './Components/switchscreen';
import Tabscreen from './Components/tabscreen';
import Tabviewscreen from './Components/tabviewscreen';
import Textscreen from './Components/textscreen';
import Tilescreen from './Components/tilescreen';
import DashBoard from './DashBoard';
import Tooltipscreen from './Components/tooltipscreen';

const Stack = createNativeStackNavigator();

const navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='DashBoard'>
                <Stack.Screen name="DashBoard" component={DashBoard} options={{ title: 'React Native DashBoard' }} />
                <Stack.Screen name="airbnbratingscreen" component={Airbnbratingscreen} />
                <Stack.Screen name="avatarscreen" component={Avatarscreen} />
                <Stack.Screen name="badgescreen" component={Badgescreen} />
                <Stack.Screen name="bottomsheetscreen" component={Bottomsheetscreen} />
                <Stack.Screen name="buttongroupscreen" component={Buttongroupscreen} />
                <Stack.Screen name="buttonscreen" component={Buttonscreen} />
                <Stack.Screen name="cardscreen" component={Cardscreen} />
                <Stack.Screen name="checkboxscreen" component={Checkboxscreen} />
                <Stack.Screen name="chipscreen" component={Chipscreen} />
                <Stack.Screen name="circularsliderscreen" component={Circularsliderscreen} />
                <Stack.Screen name="dividerscreen" component={Dividerscreen} />
                <Stack.Screen name="fabscreen" component={Fabscreen} />
                <Stack.Screen name="headerscreen" component={Headerscreen} />
                <Stack.Screen name="iconscreen" component={Iconscreen} />
                <Stack.Screen name="imagescreen" component={Imagescreen} />
                <Stack.Screen name="inputscreen" component={Inputscreen} />
                <Stack.Screen name="linearprogressscreen" component={Linearprogressscreen} />
                <Stack.Screen name="listitemscreen" component={Listitemscreen} />
                <Stack.Screen name="overlayscreen" component={Overlayscreen} />
                <Stack.Screen name="pricingcardscreen" component={Pricingcardscreen} />
                <Stack.Screen name="ratingscreen" component={Ratingscreen} />
                <Stack.Screen name="searchbarscreen" component={Searchbarscreen} />
                <Stack.Screen name="sliderscreen" component={Sliderscreen} />
                <Stack.Screen name="socialiconscreen" component={Socialiconscreen} />
                <Stack.Screen name="speeddialscreen" component={Speeddialscreen} />
                <Stack.Screen name="switchscreen" component={Switchscreen} />
                <Stack.Screen name="tabscreen" component={Tabscreen} />
                <Stack.Screen name="tabviewscreen" component={Tabviewscreen} />
                <Stack.Screen name="textscreen" component={Textscreen} />
                <Stack.Screen name="tilescreen" component={Tilescreen} />
                <Stack.Screen name="tooltipscreen" component={Tooltipscreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default navigation;