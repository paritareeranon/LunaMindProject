import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { useNavigation } from '@react-navigation/native';

const Welcome = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Text style={styles.header}>
                Welcome to{'\n'}LunaMind
            </Text>
            <Image style={styles.image}
                source={require('../img/welcome.png')}
            />
            <Text style={styles.text}>
                We can estimate your menstrual cycle length,
                Which can help predict the timing of your next period.
                We check your mental health and warning
                If your mental health is abnormal
            </Text>

            <TouchableOpacity style={styles.buttonText} onPress={() => navigation.navigate("LastPeriod")}>
                <Text style={styles.nextButtonText}>
                    Get start
                </Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
        alignItems: 'center',
    },
    header: {
        fontSize: 30,
        marginTop:'30%' ,
        fontWeight: 'bold',
        alignSelf: 'center',
        color: '#3F3C3C' ,
        textAlign: 'center',
      },
    image: {
        width: '70%',
        height: '40%',
    },
    buttonText: {
        backgroundColor: '#FF80B5',
        width: '80%',
        paddingVertical: '4%',
        borderRadius: 35,
        alignItems: 'center',
        marginTop: '20%',
        alignSelf: 'center',
    },
    nextButtonText: {
        color: 'white',
        fontSize: 18,
        fontFamily: 'Gill Sans',
    },
    text: {
        fontSize: 16,
        paddingTop: '5%',
        color: '#B7B7B7',
        fontFamily: 'Gill Sans',
        alignSelf: 'center',
        textAlign: 'center',
        marginHorizontal: 16,
    },
});

export default Welcome;