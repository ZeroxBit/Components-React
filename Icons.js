import React, { Component } from 'react'
import { Text } from 'react-native'

// lib para el iconos
import Entypo                   from 'react-native-vector-icons/Entypo';
import EvilIcons                from 'react-native-vector-icons/EvilIcons';
import Feather                  from 'react-native-vector-icons/Feather';
import FontAwesome              from 'react-native-vector-icons/FontAwesome';
import Foundation               from 'react-native-vector-icons/Foundation';
import Ionicons                 from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons   from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons            from 'react-native-vector-icons/MaterialIcons';
import Octicons                 from 'react-native-vector-icons/Octicons';
import SimpleLineIcons          from 'react-native-vector-icons/SimpleLineIcons';
import Zocial                   from 'react-native-vector-icons/Zocial';
/* propiedades que necesita los iconos son:
    1) type : la fuente de donde viene el icono (Obligatorio)
    2) name  : el nombre de icono a renderizar (Obligatorio)
    3) style : para el style, en el style se le pasa los colores y tamaño
*/
export default class Icons extends Component {
    render() {
        let { iconType, iconName, iconStyle } = this.props;
        
        switch (iconType) {
            case 'FontAwesome':
                return <FontAwesome             name = {iconName}     style = {iconStyle} {...props}/>;
        
            case 'MaterialIcons':
                return <MaterialIcons           name = {iconName}     style = {iconStyle} {...props}/>;
                
            case 'MaterialCommunityIcons':
                return <MaterialCommunityIcons  name = {iconName}     style = {iconStyle} {...props}/>;
        
            case 'Feather':
                return <Feather                 name = {iconName}     style = {iconStyle} {...props}/>;
        
            case 'Zocial':
                return <Zocial                  name = {iconName}     style = {iconStyle} {...props}/>;
        
            case 'Ionicons':
                return <Ionicons                name = {iconName}     style = {iconStyle} {...props}/>;
        
            case 'Foundation':
                return <Foundation              name = {iconName}     style = {iconStyle} {...props}/>;
        
            case 'Octicons':
                return <Octicons                name = {iconName}     style = {iconStyle} {...props}/>;
        
            case 'Entypo':
                return <Entypo                  name = {iconName}     style = {iconStyle} {...props}/>;
        
            case 'EvilIcons':
                return <EvilIcons               name = {iconName}     style = {iconStyle} {...props}/>;
            
            case 'SimpleLineIcons':
                return <SimpleLineIcons         name = {nameDefault}  style = {iconStyle} {...props}/>;

            default: return <Text>Error icon!!</Text>
        }
      }
}