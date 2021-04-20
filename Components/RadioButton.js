import React, { Component } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Alert } from 'react-native';

count = 0;
export default class RadioButton extends Component {
	state = {
		value: null,
    };
    store = [];

	render() {
        
		const { PROP } = this.props;
        const { value } = this.state;
        const {ans}  = this.props;
        const temp = []
        {ans.map(res=>{
            temp.push(res)

        })}
        var rbtn_value = ""
        var result = true;
        temp.map(res => {
            
            if({value}.value == res)
            {
               result = true;
                console.log(temp);
               alert("correct")
               
                console.log("correct");
            }
            else if({value}.value != null && {value}.value != res)
            {
                result = false;
                console.log(temp);
                alert("try again")
                console.log("try again");
                console.log({value}.value) ;
            }
        })
        
        
		return (
			<View>
				{PROP.map(res => {
					return (
						<View key={res.key} style={styles.container}>
							<Text style={styles.radioText}>{res.text}</Text>
							<TouchableOpacity
                                style={styles.radioCircle}
                                
                                
                                
								onPress={ async() => {
                                   
                                    
                                    
                                
                                    
									this.setState({
										value: res.key,
                                    });
                                    

								}}>
                                    
                                    
                            

                                  {value === res.key && <View style={styles.selectedRb} />}
							</TouchableOpacity>
						</View>
					);
				})}
                
                <Text> Selected: {this.state.value} </Text>
                
                
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
        marginTop: 35,
        alignItems: 'flex-start',
       

  },
    radioText: {
        marginHorizontal: 10,
		marginTop: 30,
		marginBottom: 8,
        fontSize: 26,
        color: '#000',
        fontWeight: '700'
    },
	radioCircle: {
        bottom:38,
        left:380,
		height: 30,
		width: 30,
		borderRadius: 100,
		borderWidth: 3,
		borderColor: '#3740ff',
	},
	selectedRb: {
		width: 20,
		height: 20,
		borderRadius: 50,
    
		backgroundColor: '#3740ff',
    },
    result: {
        marginTop: 20,
        color: 'white',
        fontWeight: '600',
        backgroundColor: '#F3FBFE',
    },
});