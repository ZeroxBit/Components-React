import React, { Component } from 'react'
import { View,Picker,StyleSheet } from 'react-native'
import  Icons  from './Icons';


export class Combo extends Component {

    constructor (props) {
        super(props)
        this.state ={
            countries : [],
            pais : '',
            token : ''
        }
    }

    render() {
        return (
            <View style={styles.boxIconInput}>
                <Icons 
                    iconType  = 'MaterialCommunityIcons'
                    iconName  = 'earth'
                    iconStyle = {styles.iconTex}
                />
                <Picker
                    selectedValue={this.state.pais ? this.state.pais : this.props.selected}
                    style={{ height: 35, width: 210,color:'#fff', backgroundColor: '#25324A' }}
                    onValueChange={(countries) => this.setState({countries: countries})}>

                    {
                        this.props.countries.map( (value) =>{
                            return <Picker.Item 
                                        key   = {value.id}
                                        label = {value.name} 
                                        value = {value.id} 
                                    />
                        })
                    }                
                
                </Picker>
                <Icons
                    iconType  = 'Entypo'
                    iconName  = 'select-arrows'
                    iconStyle = {[styles.iconRight]}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    boxIconInput: {
        flexDirection: "row",
        alignItems: "flex-start",
        marginBottom: 3,
        paddingVertical: 3,
        backgroundColor: "#25324A",
    },
    iconTex: {
        paddingTop: 12,
        paddingHorizontal: 5,
        height: 25,
        backgroundColor: "#25324A",
        color:'#fff',
        fontSize: 13
    },
    iconRight: {
        paddingTop: 12,
        paddingHorizontal: 5,
        height: 25,
        backgroundColor: "#25324A",
        color:'#fff',
        fontSize: 13
    },
})

export default Combo