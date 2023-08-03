// Librairies
import React from 'react';
import { StyleSheet, View, Text, TouchableHighlight, Alert } from 'react-native';

function Product(props) {
    console.log(props)

    return (
        <TouchableHighlight 
            onPress={()=>Alert.alert('Désolé',"Cette option n'est pas disponible !! Reviens plus tard ou pas!!")}
            activeOpacity={0.8}
            underlayColor="rgba(0,105,60,.15)"
        >
            <View style={styles.card}>
                <Text style={styles.cardTitle}>{props.item.name}</Text>
            </View>
        </TouchableHighlight>
        
    );
}

const styles = StyleSheet.create({
    card: {
        width: '100%',
        padding: 30,
        borderBottomWidth: 1,
        borderColor: '#182E28',
    },
    cardTitle:{
        fontSize:18,
    }
});

export default Product;