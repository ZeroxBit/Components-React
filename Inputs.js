import React, { Component } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Platform
} from "react-native";
import Icons from './Icons';
import { validateUserAjax } from "../services/userServices";
import { validateUSer, validateRules } from "../class/ValidatorInput";

/* ------------------Inputs--------------------------- /
del icono left {
	iconTypeLeft = fuente 
	iconLeftName = Nombre
}
*/
// cambiar la parte de la validacion ajax!!!!!!!!!!
export default class Inputs extends Component {

    constructor(props) {
        super(props);
        this.state = {
            inputs: {
                inputValue: "",
                type: ""
            },
            colorValidate: [],
            // Icons
            colorIconRight: "rgba(255,255,255,.0)",
            iconName: "check",
            textValue: ""
        };
    }
  
    handleValidateUser = () => {
        let Referens = this.props.referens;
        let value    = this.state.inputs.inputValue;
        let registre = this.props.registre ? this.props.registre : false; // si recibe registre es para validarlo con ajax

        if (registre) {
            if (Referens == "User") {
                if ( validateRules(value,rules = {length:5}) ) {
                    this.handleValidateUserAjax(value);
                }
            } else if (Referens == "Email"){
                if ( validateUSer(value) ) {
                    this.handleValidateUserAjax(value);
                }
            }
        }
    };
  
    handleValidateUserAjax = user => {
        validateUserAjax(user)
            .then(response => {
                this.handleValidateStatus(response)
            })
            .catch(err => {
                alert(err);
            });
    };

    changeValue = value => {
        //solucion 1
        this.setState((prevState, props) => {
            let inputs = {
                inputValue: value,
                type: props.referens
            };
            props.changeValues(inputs);
            return { inputs };
        });

        //solucion 2
        /*let inputs = {
                inputValue : value,
                type : this.props.referens,
            }
            this.setState({inputs})
            this.props.changeValues(inputs)    */

        //solucion 3
        /*this.setState({
                inputs:{
                    inputValue : value,
                    type : this.props.referens,
                }
            },()=>{
            this.props.changeValues(this.state.inputs) 
            })*/
    };

    handleValidateStatus =(response)=>{

        if (!response.code) {
        // existe el usuario
            this.props.changeValues(this.state.inputs);
            this.setState( () => {
                return {
                    colorValidate: styles.textError,
                    colorIconRight: "rgb(192, 55, 55)",
                    iconName: "close"
                };
            });
        } else{
        // success
            this.props.changeValues(this.state.inputs);
            this.setState( () => {
                return {
                    colorValidate: styles.textSuccess,
                    colorIconRight: "#2fc0d3",
                    iconName: "check"
                };
            });
        }
    }

    render() {
        let {
            placeholderTextColor,
            returnKeyType,
            autoCorrect,
            value,
            secureTextEntry,
            referens,
            iconTypeLeft,
            iconLeftName,
            stylesIcon,
            inputStyle,
            onBlur,
            iconRightStyle,
            iconTypeRight,
            iconNameRight,
            ...props
        } = this.props

        return (
            <View style={styles.boxIconInput}>
                <Icons 
                    iconType  = {iconTypeLeft  ? iconTypeLeft  : 'FontAwesome'}
                    iconName  = {iconLeftName  ? iconLeftName  : 'user'}
                    iconStyle = {[stylesIcon   ? stylesIcon    : styles.iconTex, this.state.colorValidate ]}
                />
                <TextInput
                    style                   = {[ inputStyle ? inputStyle : styles.inpuText, this.state.colorValidate ]}
                    placeholderTextColor	= {placeholderTextColor ? placeholderTextColor : '#fff'}
                    returnKeyType			= {returnKeyType ? returnKeyType : "next"}
                    autoCorrect				= {this.props.autoCorrect}
                    selectionColor          = {"#fff"}
                    underlineColorAndroid	= "transparent"
                    ref						= {referens}
                    value 					= {value ? value : this.state.inputs.inputValue}
                    secureTextEntry			= {secureTextEntry ? secureTextEntry : false}
                    disableFullscreenUI 	= {this.props.fecha ? true : false}
                    maxLength  			    = {this.props.maxLength ? this.props.maxLength : 35}
                    onChangeText			= {value => this.changeValue(value)}
                    onBlur                  = {onBlur ? () => onBlur(this.state.inputs.inputValue,referens) : () => {}}
                    {...props}
                />
                <Icons 
                    iconType  = {iconTypeRight   ? iconTypeRight  :'FontAwesome'}
                    iconName  = {iconNameRight   ? iconNameRight  : this.state.iconName}
                    iconStyle = {[iconRightStyle ? iconRightStyle : styles.iconCheck, this.state.colorValidate ]}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    boxIconInput: {
        flexDirection: "row",
        alignItems: "flex-start",
        marginBottom: 3,
        paddingVertical: 5
    },
    inpuText: {
        fontSize: 14,
        width : 200,
        height: 38,
        padding: 4,
        paddingHorizontal : 10,
        marginTop: Platform.OS === 'windows' ? 6 : 0,
        fontFamily: "Myriad",
        borderWidth: 0,
        backgroundColor: "#25324A",
        fontSize: 12,
        color:'#fff'
    },

    iconTex: {
        paddingTop: 10,
        paddingHorizontal: 5,
        height: 38,
        backgroundColor: "#25324A",
        color:'#fff',
        fontSize : 15,
        borderTopLeftRadius: 6,
        borderBottomLeftRadius: 6
    },
    iconCheck: {
        paddingTop: 10,
        paddingHorizontal: 5,
        height: 38,
        backgroundColor: "#25324A",
        color:'#25324A',
        fontSize : 15,
        borderTopRightRadius: 6,
        borderBottomRightRadius: 6
    },
    // interactions
    textError: {
        borderBottomWidth: 4,
        borderBottomColor: "rgb(192, 55, 55)"
    },
    textSuccess: {
        borderBottomWidth: 4,
        borderBottomColor: "#2fc0d3"
    }
});
