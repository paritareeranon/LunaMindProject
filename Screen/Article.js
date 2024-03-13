import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { View, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, StyleSheet, Dimensions, Image, Button, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import ViewSlider from 'react-native-view-slider';
import { ImageBackground } from 'react-native';

const { width, height } = Dimensions.get('window');

const Article = () => {
    const navigation = useNavigation();

    const goBackToHome = () => {
        console.log('BackToHome');
        navigation.navigate('Home');
    };

    const SubArticle1 = () => {
        console.log('SubArticleScreen');
        navigation.navigate("SubArticle1");

    };

    const SubArticle2 = () => {
        console.log('SubArticleScreen');
        navigation.navigate("SubArticle2");

    };
    const SubArticle3 = () => {
        console.log('SubArticleScreen');
        navigation.navigate("SubArticle3");

    };
    const SubArticle4 = () => {
        console.log('SubArticleScreen');
        navigation.navigate("SubArticle4");

    };
    const SubArticle5 = () => {
        console.log('SubArticleScreen');
        navigation.navigate("SubArticle5");

    };
    const SubArticle6 = () => {
        console.log('SubArticleScreen');
        navigation.navigate("SubArticle6");

    };
    const SubArticle7 = () => {
        console.log('SubArticleScreen');
        navigation.navigate("SubArticle7");

    };
    const SubArticle8 = () => {
        console.log('SubArticleScreen');
        navigation.navigate("SubArticle8");

    };
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity style={styles.button} onPress={goBackToHome}>
                    <Icon name="angle-left" size={35}></Icon>
                </TouchableOpacity>
                <Text style={styles.title}> Article </Text>
            </View>
            <ScrollView>
                <Text style={styles.recommend}> Recommended articles </Text>
                <>
                    <ViewSlider
                        renderSlides={
                            <>
                                <TouchableOpacity onPress={SubArticle5}>
                                    <View style={styles.viewBox}>
                                        <Image source={require('../img/article5.png')} style={{ height: 200, width, borderRadius: 25 }} />
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={SubArticle6}>
                                    <View style={styles.viewBox}>
                                        <Image source={require('../img/article6.png')} style={{ height: 200, width, borderRadius: 25 }} />
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={SubArticle7}>
                                    <View style={styles.viewBox}>
                                        <Image source={require('../img/article7.png')} style={{ height: 200, width, borderRadius: 25 }} />
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={SubArticle8}>
                                    <View style={styles.viewBox}>
                                        <Image source={require('../img/article8.png')} style={{ height: 200, width, borderRadius: 25 }} />
                                    </View>
                                </TouchableOpacity>

                            </>
                        }
                        style={styles.slider}
                        height={200}
                        slideCount={4}
                    // dots={false}
                    // dotActiveColor='white'
                    // dotInactiveColor='gray'
                    // dotsContainerStyle={styles.dotContainer}
                    // autoSlide={false}
                    // slideInterval={5000}
                    />
                </>

                <View style={styles.row}>
                    <TouchableOpacity onPress={SubArticle1}>
                        <ImageBackground source={require('../img/article1.png')} style={styles.image}>
                            <Text style={styles.imageText}>Burnout สภาวะหมดไฟจากการทำงาน</Text>
                        </ImageBackground>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={SubArticle2}>
                        <ImageBackground source={require('../img/article2.png')} style={styles.image}>
                            <Text style={styles.imageText}>โรคจิตเภท รักษาได้</Text>
                        </ImageBackground>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={SubArticle3}>
                        <ImageBackground source={require('../img/article3.png')} style={styles.image}>
                            <Text style={styles.imageText}>รับมือยังไงกับคำว่า เรื่องแค่นี้จะเครียดทำไม</Text>
                        </ImageBackground>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={SubArticle4}>
                        <ImageBackground source={require('../img/article4.png')} style={styles.image}>
                            <Text style={styles.imageText}>Stages of Grief 5 ระยะ ก้าวผ่านความสูญเสีย</Text>
                        </ImageBackground>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={SubArticle5}>
                        <ImageBackground source={require('../img/article5.png')} style={styles.image}>
                            <Text style={styles.imageText}>คิดมากจนปวดหัว คิดเยอะจนเหนื่อยใจ คิดอย่างไรให้พอดี</Text>
                        </ImageBackground>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={SubArticle6}>
                        <ImageBackground source={require('../img/article6.png')} style={styles.image}>
                            <Text style={styles.imageText}>โรคซึมเศร้าเรื้อรังคืออะไร</Text>
                        </ImageBackground>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={SubArticle7}>
                        <ImageBackground source={require('../img/article7.png')} style={styles.image}>
                            <Text style={styles.imageText}>เดี๋ยวดี เดี๋ยวร้าย ใช่ไบโพลาร์หรือเปล่านะ?</Text>
                        </ImageBackground>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={SubArticle8}>
                        <ImageBackground source={require('../img/article8.png')} style={styles.image}>
                            <Text style={styles.imageText}>การเยียวยาจิตใจตัวเองเมื่อเป็นโรคซึมเศร้า</Text>
                        </ImageBackground>
                    </TouchableOpacity>

                </View>
            </ScrollView>

        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'White',
        // paddingHorizontal: 16,
        height: '12%',
    },
    button: {
        paddingLeft: '7%',
        marginTop: '15%',
    },
    title: {
        marginTop: '15%',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 'auto',
        marginRight: 'auto',
        fontSize: 25,
        fontWeight: 'bold',
    },
    recommend: {
        marginTop: '15%',
        paddingLeft: '10%',
        fontSize: 15
    },
    viewBox: {
        // paddingHorizontal: 20,
        justifyContent: 'center',
        width: width,
        // padding: 10,
        alignItems: 'center',
        height: 200,
    },
    slider: {
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        width: '100%',
        marginTop: '5%',
        borderRadius: 25,

    },
    // dotContainer: {
    //     backgroundColor: 'transparent',
    //     position: 'absolute',
    //     bottom: 15
    // },
    image: {
        marginTop: '10%',
        height: 160,
        width: 160,
        padding: 20,
        borderRadius: 25,
        overflow: 'hidden',
    },

    imageText: {
        textAlign: 'left',
        fontSize: 13,
        fontWeight: 'bold',
        color: 'white',
        position: 'absolute',
        top: 10,
        left: 8,
        right: 8,
        bottom: 0,
        shadowColor: 'black',
        shadowOffset: { width: 5, height: 5 },
        shadowOpacity: 10,
        shadowRadius: 7,
    },
    row: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginLeft: 20,
        marginRight: 20,
        marginTop: '10%'
    }
});
export default Article