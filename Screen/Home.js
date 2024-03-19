import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, StyleSheet, Image, Button, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { ImageBackground } from 'react-native';
import { EvilIcons } from '@expo/vector-icons';
import { LinearGradient } from "expo-linear-gradient";
import moment from 'moment';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { firestore } from "../firebaseConfig";
import { collection, doc, getDocs ,query,where} from "firebase/firestore";

const Home = () => {
  const currentDate = moment().format('dddd, MMMM D');
  const [isHovered, setHovered] = useState(false);
  const [userData, setUserData] = useState({email:"",firstname:"",surname:""});

  const navigation = useNavigation();

  useEffect(() => {
    const fetchUserData = async () => {
        try {
            const email = await AsyncStorage.getItem("useraccount");
            if (email) {
                const q = query(collection(firestore, 'UserInfo'), where('email', '==', email));
                const snapshot = await getDocs(q);

                snapshot.forEach(doc => {
                    const userData = doc.data();
                    setUserData(userData);
                });
            }
        } catch (error) {
            console.error('Error fetching user data:', error);
        }
    };

    fetchUserData();
}, []);

  const Report = () => {
    console.log('ReportScreen');
    navigation.navigate("ReportTest");

  };
  const Article = () => {
    console.log('ArticleScreen');
    navigation.navigate("Article");

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
  return (
    // <ImageBackground
    //   source={require('../img/Screen.png')}
    //   style={styles.background}>

    <View style={styles.container}>
      <ScrollView style={styles.scrollview}>
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <EvilIcons name="user" size={50} color="#3F3C3C"
            style={styles.iconContainer} />
        </TouchableOpacity>
        <Text style={styles.textContainer}> Hi, {userData?.firstname || "Loading..."} </Text>
        
        <LinearGradient colors={['#FF80B5', '#D2D5F8']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }} style={styles.card}>
        <TouchableOpacity onPress={() => navigation.navigate('CalendarMood')}>
            <Text style={styles.title2}>{currentDate}</Text>
            <Text style={styles.title}>How are you{'\n'}Today ? </Text>
          </TouchableOpacity>
        </LinearGradient>
        
        {/* <Button title="Go to Last period" color="red" onPress={() => navigation.navigate('LastPeriod')} /> */}
        <View style={styles.row}>
          <Text style={styles.article}> Article </Text>
          <TouchableWithoutFeedback
            onPress={Article}
            onPressIn={() => setHovered(true)}
            onPressOut={() => setHovered(false)}>
            <Text style={[styles.viewall, isHovered && styles.hoveredText]} > All
              <Icon name="chevron-right" color="#6C6C6C" style={[isHovered && styles.hoveredText]} />
            </Text>
          </TouchableWithoutFeedback>

        </View>

        <ScrollView horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.scrollviewArticle}>

          <TouchableOpacity onPress={SubArticle1}>
            <ImageBackground source={require('../img/article1.png')} style={styles.slider}>
              <Text style={styles.imageText}>Burnout สภาวะหมดไฟจากการทำงาน</Text>
            </ImageBackground>
          </TouchableOpacity>
          <TouchableOpacity onPress={SubArticle2}>
            <ImageBackground source={require('../img/article2.png')} style={styles.slider}>
              <Text style={styles.imageText}>โรคจิตเภท รักษาได้</Text>
            </ImageBackground>
          </TouchableOpacity>
          <TouchableOpacity onPress={SubArticle3}>
            <ImageBackground source={require('../img/article3.png')} style={styles.slider}>
              <Text style={styles.imageText}>รับมือยังไงกับคำว่า เรื่องแค่นี้จะเครียดทำไม</Text>
            </ImageBackground>
          </TouchableOpacity>
          <TouchableOpacity onPress={SubArticle4}>
            <ImageBackground source={require('../img/article4.png')} style={styles.slider}>
              <Text style={styles.imageText}>Stages of Grief 5 ระยะ ก้าวผ่านความสูญเสีย</Text>
            </ImageBackground>
          </TouchableOpacity>
        </ScrollView>

        <Text style={styles.report}> Report </Text>
        <TouchableOpacity onPress={Report} >
          <View style={styles.reportcard}>

          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
    // </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  textContainer: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#3F3C3C',
    marginTop: '30%',
    textAlign: 'left',
    marginLeft: 20,
  },
  container: {
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollview: {
    flex: 1,
    width: '100%',
  },
  card: {
    backgroundColor: '#FF80B5',
    borderRadius: 24,
    marginTop: '6%',
    shadowColor: '##D8D8D8',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 14,
    width: '90%',
    height: 150,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  iconContainer: {
    position: 'absolute',
    top: 80,
    right: 30,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'left',
    marginLeft: '5%',
  },
  title2: {
    fontSize: 14,
    marginBottom: '5%',
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'left',
    marginLeft: '5%',
  },
  article: {
    marginTop: 20,
    marginLeft: 20,
    paddingRight: '55%',
    fontSize: 17,
  },
  viewall: {
    marginTop: 20,
    fontSize: 14,
    marginLeft: '10%',
    color: "#6C6C6C",
    // textDecorationLine: 'underline',
  },
  hoveredText: {
    color: '#fff',
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  slider: {
    backgroundColor: 'white',
    borderRadius: 25,
    overflow: 'hidden',
    padding: 20,
    marginRight: 20,
    marginTop: 20,
    shadowColor: '#D8D8D8',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 5,
    width: 140,
    height: 140,
  },
  imageText: {
    textAlign: 'left',
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    position: 'absolute',
    top: 90,
    left: 8,
    right: 8,
    bottom: 0,
    shadowColor: 'black',
    shadowOffset: { width: 2, height: 3 },
    shadowOpacity: 5,
    shadowRadius: 5,
  },
  scrollviewArticle: {
    flexDirection: 'row',
    padding: 16,
    paddingTop: -30,
  },
  report: {
    marginTop: 10,
    marginLeft: 20,
    paddingRight: '55%',
    fontSize: 17,
  },
  reportcard: {
    backgroundColor: '#FBE1E3',
    borderRadius: 30,
    padding: 20,
    marginTop: 20,
    marginLeft: 20,
    shadowColor: '##D8D8D8',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 14,
    width: '90%',
    height: 330,
    justifyContent: 'center',
    alignItems: 'center',
  },

});
export default Home;
