import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';
import CustomPopup from '../Component/CustomPopup';

const Mood = () => {
    const [currentPopup, setCurrentPopup] = useState(null);
    // const [isPopupVisible, setPopupVisible] = useState(false);

    const openPopup = (popupNumber) => {
        setCurrentPopup(popupNumber);
    };

    const closePopup = () => {
        setCurrentPopup(null);
    };

    const handleOk = () => {
        // ตัวอย่างการทำงานเมื่อกด OK
        closePopup();
        // ทำอย่างอื่นต่อไปนี้...
    };
    // const showPopup = () => {
    //     setPopupVisible(true);
    // };

    // const hidePopup = () => {
    //     setPopupVisible(false);
    // };

    return (
        <LinearGradient colors={['#DECBED', '#FFDCDF']} style={{ flex: 1 }}>
            <View style={styles.container}>
                <View style={styles.headerContainer}>
                    <AntDesign name="left" size={22} color="#3F3C3C" />
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
                    <View>
                        <TouchableOpacity onPress={() => openPopup(1)}>
                            <Image
                                source={require('../img/1.png')}
                                style={styles.mood}
                            />

                            <Text style={styles.moodScore}> 5 </Text>
                        </TouchableOpacity>

                        {currentPopup === 1 && (
                            <CustomPopup
                                visible={true}
                                onClose={closePopup}
                                onOk={handleOk}
                                customImage={require('../img/1.png')}
                                customText="Don’t forget to smile your smile is the prettiest :)"
                            />
                        )}
                    </View>

                    <View>
                        <TouchableOpacity onPress={() => openPopup(2)}>
                            <Image
                                source={require('../img/2.png')}
                                style={styles.mood}
                            />

                            <Text style={styles.moodScore}> 4 </Text>
                        </TouchableOpacity>

                        {currentPopup === 2 && (
                            <CustomPopup
                                visible={true}
                                onClose={closePopup}
                                onOk={handleOk}
                                customImage={require('../img/2.png')}
                                customText="imm mhaaaaaaaaaaa"
                            />
                        )}
                    </View>

                    <View>
                        <TouchableOpacity onPress={() => openPopup(1)}>
                            <Image
                                source={require('../img/3.png')}
                                style={styles.mood}
                            />

                            <Text style={styles.moodScore}> 3 </Text>
                        </TouchableOpacity>
                    </View>

                    <View>
                        <TouchableOpacity onPress={() => openPopup(1)}>
                            <Image
                                source={require('../img/4.png')}
                                style={styles.mood}
                            />

                            <Text style={styles.moodScore}> 2 </Text>
                        </TouchableOpacity>
                    </View>

                    <View>
                        <TouchableOpacity onPress={() => openPopup(1)}>
                            <Image
                                source={require('../img/5.png')}
                                style={styles.mood}
                            />

                            <Text style={styles.moodScore}> 1 </Text>
                        </TouchableOpacity>
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
        width: '88%',
        height: '26%',
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
        marginHorizontal: 8,
        width: 45,
        height: 45,
    },
    moodScore: {
        fontSize: 13,
        paddingTop: 10,
        color: '#3F3C3C',
        alignSelf: 'center'
        // fontFamily: ,
    },

})
export default Mood;