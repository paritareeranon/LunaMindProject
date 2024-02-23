import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation, useRoute  } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';
import CustomPopup from '../Component/CustomPopup';
import CalendarMood from './CalendarMood';
import moment from 'moment';
import { firestore } from "../firebaseConfig";
import { addDoc, collection } from 'firebase/firestore';


const Mood = () => {
    const navigation = useNavigation();
    const [currentPopup, setCurrentPopup] = useState(null);
    const route = useRoute();
    const { selectedDate } = route.params;
    const [selectedMood, setSelectedMood] = useState(null);

    const openPopup = (popupNumber) => {
        setCurrentPopup(popupNumber);
    };

    const closePopup = () => {
        setCurrentPopup(null);
    };

    const handleOk = async (moodScore) => {
        setSelectedMood(moodScore);
        if (moodScore !== null) {
            // Save mood to Firebase
            await saveMoodToFirebase(moodScore, selectedDate);
            navigation.navigate("CalendarMood", { moodScore: currentPopup });
            closePopup();
        } else {
            console.error('No mood selected');
        }
    };

    const saveMoodToFirebase = async (selectedMood, selectedDate) => {
        console.log(selectedMood, selectedDate);
        try {
            if (selectedMood !== "" && selectedDate) {
                await addDoc(collection(firestore, "testMood"), {
                    mood: selectedMood,
                    date: selectedDate
                });
                console.log('Mood added to Firestore!');
            } else {
                console.error('No mood selected or date is missing');
            }
        } catch (err) {
            console.error('mood error', err);
        }
    };

    return (
        <LinearGradient colors={['#DECBED', '#FFDCDF']} style={{ flex: 1 }}>
            <View style={styles.container}>
                <View style={styles.headerContainer}>
                    <TouchableOpacity onPress={() => navigation.navigate("CalendarMood")}>
                        <AntDesign name="left" size={22} color="#3F3C3C" />
                    </TouchableOpacity>
                    <Text style={styles.calendar}>
                    {selectedDate ? moment(selectedDate).format('dddd, MMMM D') : ''}
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
                        <TouchableOpacity onPress={() => { openPopup(1); }}>
                            <Image
                                source={require('../img/5.png')}
                                style={styles.mood}
                            />

                            <Text style={styles.moodScore}> 5 </Text>
                        </TouchableOpacity>

                        {currentPopup === 1 && (
                            <CustomPopup
                                visible={true}
                                onClose={closePopup}
                                onOk={() => handleOk("5")}
                                customImage={require('../img/5.png')}
                                customText="Don’t forget to smile your smile is the prettiest :)"
                            />
                        )}
                    </View>

                    <View>
                        <TouchableOpacity onPress={() => openPopup(2)}>
                            <Image
                                source={require('../img/4.png')}
                                style={styles.mood}
                            />

                            <Text style={styles.moodScore}> 4 </Text>
                        </TouchableOpacity>

                        {currentPopup === 2 && (
                            <CustomPopup
                                visible={true}
                                onClose={closePopup}
                                onOk={() => handleOk("4")}
                                customImage={require('../img/4.png')}
                                customText="The sun will rise and we will try again"
                            />
                        )}
                    </View>

                    <View>
                        <TouchableOpacity onPress={() => openPopup(3)}>
                            <Image
                                source={require('../img/3.png')}
                                style={styles.mood}
                            />

                            <Text style={styles.moodScore}> 3 </Text>
                        </TouchableOpacity>

                        {currentPopup === 3 && (
                            <CustomPopup
                                visible={true}
                                onClose={closePopup}
                                onOk={() => handleOk("3")}
                                customImage={require('../img/3.png')}
                                customText="Every day may not be good. But there is something good every day"
                            />
                        )}
                    </View>

                    <View>
                        <TouchableOpacity onPress={() => openPopup(4)}>
                            <Image
                                source={require('../img/2.png')}
                                style={styles.mood}
                            />

                            <Text style={styles.moodScore}> 2 </Text>
                        </TouchableOpacity>

                        {currentPopup === 4 && (
                            <CustomPopup
                                visible={true}
                                onClose={closePopup}
                                onOk={() => handleOk("2")}
                                customImage={require('../img/2.png')}
                                customText="It's just a bad day, not a bad life"
                            />
                        )}
                    </View>

                    <View>
                        <TouchableOpacity onPress={() => openPopup(5)}>
                            <Image
                                source={require('../img/1.png')}
                                style={styles.mood}
                            />

                            <Text style={styles.moodScore}> 1 </Text>
                        </TouchableOpacity>

                        {currentPopup === 5 && (
                            <CustomPopup
                                visible={true}
                                onClose={closePopup}
                                onOk={() => handleOk("1")}
                                customImage={require('../img/1.png')}
                                customText="Sending you a big virtual hug! Remember, you're never alone"
                            />
                        )}
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