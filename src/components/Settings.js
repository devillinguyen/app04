import React, {Component} from 'react';
import {
} from 'react-native';
import {MenuProvider, Menu, MenuOptions, MenuTrigger, MenuOption} from 'react-native-popup-menu';
import Icon from 'react-native-vector-icons/Ionicons';
class Settings extends Component {
    render() {
        return (
            <MenuProvider>
                <Menu>
                    <MenuTrigger>
                        <Icon name={'ios-settings'} size={30} color={'#ababab'}/>
                    </MenuTrigger>
                    <MenuOptions>
                        <MenuOption></MenuOption>
                    </MenuOptions>
                </Menu>
            </MenuProvider>
        );
    }
}