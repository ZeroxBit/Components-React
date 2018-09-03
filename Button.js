import React, { Component } from 'react'
import { Text, TouchableOpacity,StyleSheet } from 'react-native'
import Icons from './Icons';

export class Button extends Component {
    render() {

        let {iconType, btnStyle,textStyle,type,btnSize} = this.props
        let size = {}

        switch (type) {

            case "primary":
                btnStyle   = styles.btnPrimary;
                textStyles = styles.textPrimary;
              break;

            case "success":
                btnStyle   = styles.btnSuccess;
                textStyles = styles.textPrimary;
              break;

            case "cancel":
                btnStyle   = styles.btnCancel;
                textStyles = styles.textPrimary;
              break;

            case "customize":
                btnStyle   = btnStyle;
                textStyles = textStyle
              break;

            default:
                console.log("falta definir el type")
              break;
        }

        switch (btnSize) {
            case "small":
                // ----------------  //
              break;
            case "medium":
                size = styles.medium;
              break;
            case "large":
                
              break;
            case "block":
                size = styles.block
              break;
            case "customize":
                size = this.props.customizeSize;
              break;
            default:
                break;
        }

        return (
            <TouchableOpacity
                style   = {[btnStyle,size]}
                onPress = { !this.props.onPress ? '' : () =>{
                    this.props.onPress()
                } }
            >
            {iconType &&(
                <Icons 
                    iconType  = {this.props.iconType  }
                    iconName  = {this.props.iconName  }
                    iconStyle = {this.props.iconStyle }
                />
            )}
                <Text style = {[textStyles]}> {this.props.text ? this.props.text : 'Falta el texto'} </Text>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    // type
    btnPrimary: {
        backgroundColor: "rgba(42, 67, 80, 0.5)",
        flexDirection : "row"
    },
    textPrimary: {
        textAlign: "center",
        color: "#fff"
    },
    btnSuccess : {
		backgroundColor:'#2fc0d3', 
		paddingVertical:8,
		borderRadius :5,
		marginTop:12,
		flexDirection : 'row',
		justifyContent:'center',
		alignItems : 'center',
    },
    btnCancel:{
		backgroundColor:'rgba(238, 62, 8, 0.849)', 
		paddingVertical:8,
		width:95,
		height : 40,
		borderRadius :5,
		marginTop:12,
		flexDirection : 'row',
		justifyContent:'center',
		alignItems : 'center',
	},
    // size
    medium:{
        borderRadius: 9,
		paddingVertical: 10,
        paddingHorizontal: 20,
        // width:95,
		// height : 40,
    },
    block: {
        paddingVertical: 10,
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "stretch"
      },
})

export default Button