import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';

const Mood = () => {
    return (
        <LinearGradient colors={['#DECBED', '#FFDCDF']} style={{ flex: 1 }}>
            <View style={styles.container1}>
                <View style={styles.container}>
                    <View style={styles.headerContainer}>
                        <AntDesign name="left" size={22} color="3F3C3C" />
                        <Text style={styles.calendar}>
                            Tuesday, December 26
                        </Text>
                        <AntDesign name="left" size={22} color="transparent" />
                    </View>
                </View>
                <View style={styles.rectangle}>
                    <Text style={styles.moodText}>
                        How was your day ?
                    </Text>
                    <View style={styles.moodImage}>
                        <View style={styles.container2}>
                        <Image
                            source={require('../img/1.png')}
                            style={styles.mood}
                        />

                        <Text style={styles.moodScore}>
                            5
                        </Text>
                        </View>
                        <View style={styles.container2}>
                        <Image
                            source={require('../img/2.png')}
                            style={styles.mood}
                        />

                        <Text style={styles.moodScore}>
                            4
                        </Text>
                        </View>
                        <View style={styles.container2}>
                        <Image
                            source={require('../img/3.png')}
                            style={styles.mood}
                        />

                        <Text style={styles.moodScore}>
                            3
                        </Text>
                        </View>
                        <View style={styles.container2}>
                        <Image
                            source={require('../img/4.png')}
                            style={styles.mood}
                        />

                        <Text style={styles.moodScore}>
                            2
                        </Text>
                        </View>
                        <View style={styles.container2}>
                        <Image
                            source={require('../img/5.png')}
                            style={styles.mood}
                        />

                        <Text style={styles.moodScore}>
                            1
                        </Text>
                        </View>
                    </View>
                </View>
            </View>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 60,
        padding: 16,
        paddingBottom: 10,
        backgroundColor: 'white',
        justifyContent: 'center',
    },
    container1: {
        flex: 1,
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    calendar: {
        fontSize: 17,
        padding: 4,
        paddingTop: 5,
        color: '#3F3C3C',
        fontFamily: 'Gill Sans',
        justifyContent: 'center',
    },
    rectangle: {
        width: '90%',
        height: '25%',
        backgroundColor: 'white',
        alignSelf: 'center',
        marginTop: 200,
        borderRadius: 30,
    },
    moodText: {
        fontSize: 17,
        padding: 4,
        paddingTop: 40,
        color: '#3F3C3C',
        fontFamily: 'Gill Sans',
        alignSelf: 'center',
    },
    moodImage: {
        flexDirection: 'row',
        marginTop: 40,
        paddingHorizontal: 18,
        marginHorizontal: 4,
        alignSelf: 'center'
      },
       mood: {
        marginHorizontal: 5,
        width: 45,
        height: 45,
      },
      container2: {
        alignItems: 'center',
    },
    moodScore: {
        fontSize: 13,
        paddingTop: 12,
        color: '#3F3C3C',
        // fontFamily: 'Gill Sans',
    },

})
export default Mood;