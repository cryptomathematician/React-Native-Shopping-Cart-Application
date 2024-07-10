import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

const ProductCard = ({ image, title, price, description, addCart,onPress, isLocal}) => {
    const isRemoteImage = typeof image === 'string';
    return (
        <TouchableOpacity onPress={onPress}>
             <View style={isLocal ? styles.card1 : styles.card}>
            <Image
                source={isRemoteImage ? { uri: image } : image}
                style={styles.image}
            />
            <View style={styles.itemDetails}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.description}>{description}</Text>
                <Text style={styles.price}>${price}</Text>
            </View>
            <TouchableOpacity onPress={addCart}>
                <Image source={require('../assets/addCircle.png')} style={styles.addCart} />
            </TouchableOpacity>
            </View>
        </TouchableOpacity>
    );
}

export default ProductCard;

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 10,
        shadowOffset: { width: 4, height: 4 },
        elevation: 3,
        alignItems: 'center',
        padding: 10,
        flex: 1,
        width: 180,
        height: 840,
        marginBottom: 80
    },
    image: {
        width: 180,
        height: 230,
        borderRadius: 0,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    price: {
        fontSize: 14,
        color: 'red',
        paddingTop: 5,
        fontWeight: 'bold',
    },
    description: {
        fontSize: 13,
    },
    addCart: {
        bottom: 100,
        left: 70,
        width: 30,
        height: 30,
    },
    itemDetails: {
        flex: 1,
    },
    card1: {
        backgroundColor: '#fff',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 10,
        shadowOffset: { width: 4, height: 4 },
        elevation: 3,
        alignItems: 'center',
        padding: 10,
        flex: 1,
        width: 180,
        height: 340,
    },
});
