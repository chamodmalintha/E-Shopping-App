import React from 'react';
import { createAppContainer } from 'react-navigation';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer'; 
import { Ionicons } from '@expo/vector-icons';

import ProductsOverviewScreen from '../screens/shop/ProductsOverviewScreen';
import ProductsDetailScreen from '../screens/shop/ProductsDetailScreen';
import CartScreen from '../screens/shop/CartScreen';
import OrdersScreen from '../screens/shop/OrdersScreen';
import UserProductScreen from '../screens/user/UserProductsScreen';
import EditProductScreen from '../screens/user/EditProductScreen';
import Colors from '../constants/Colors';

const defaultNavOptions = {
    headerStyle: {
        backgroundColor: Platform.OS === 'android' ?  Colors.primary : ''
    },
    // headerTitleStyle:{
    //     fontFamily: 'open-sans-bold'
    // },
    // headerBackTitleStyle:{
    //     fontFamily: 'open-sans'
    // },
    headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary
}

const ProductsNavigator = createStackNavigator({
    ProductsOverview: ProductsOverviewScreen,
    ProductsDetail: ProductsDetailScreen,
    Cart: CartScreen
},
{
    navigationOptions: {
        drawerIcon: drawerConfig => (
            <Ionicons name={ Platform.OS === 'android' ? 'md-cart' : 'ios-cart' } 
            size={23}
            color={drawerConfig.tintColor}
            />
        )
    },
    defaultNavigationOptions : defaultNavOptions
}
);

const OrdersNavigator = createStackNavigator(
    {
        Orders: OrdersScreen
    }, 
    {
        navigationOptions: {
            drawerIcon: drawerConfig => (
                <Ionicons name={ Platform.OS === 'android' ? 'md-list' : 'ios-list' } 
                size={23}
                color={drawerConfig.tintColor}
                />
            )
        },
        defaultNavigationOptions: defaultNavOptions
    }
    );

const AdminNavigator = createStackNavigator(
{
    UserProducts: UserProductScreen,
    EditProduct: EditProductScreen
}, 
{
    navigationOptions: {
        drawerIcon: drawerConfig => (
            <Ionicons name={ Platform.OS === 'android' ? 'md-create' : 'ios-create' } 
            size={23}
            color={drawerConfig.tintColor}
            />
        )
    },
    defaultNavigationOptions: defaultNavOptions
}
);

const ShopNavigator = createDrawerNavigator({
    Products: ProductsNavigator,            //navigate to the products screen by using 25th line code
    Orders: OrdersNavigator,                ////navigate to the orders screen by using 35th line code
    Admin: AdminNavigator
}, {
    contentOptions: Colors.primary
});

export default createAppContainer(ShopNavigator);