import { useNavigation } from '@react-navigation/native';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, Linking } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
const SubArticle3 = () => {
    const navigation = useNavigation();

    const Article = () => {
        console.log('Article');
        navigation.navigate('Article');
    };
    const Credit = () => {
        const url = 'https://www.manarom.com/blog/article_thai.html';
        Linking.openURL(url);
    };
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity style={styles.button} onPress={Article}>
                    <Icon name="angle-left" size={35}></Icon>
                </TouchableOpacity>
                <Text style={styles.title}> Article </Text>
            </View>
            <Image source={require('../img/article3.png')} style={styles.image} />
            <ScrollView style={styles.card}>
                <Text style={styles.Textheader}>“เครียดทำไม เรื่องนิดเดียว...”
                    “ไม่เป็นเรา คุณไม่รู้หรอก”</Text>
                <Text style={styles.TextContent}>หลายคนคงเคยเผชิญหน้ากับคำพูดที่คล้ายคลึงกับสถานการณ์ข้างต้นมาก่อน เมื่อรู้สึกเครียดมากกับสิ่งที่กำลังเผชิญอยู่
                    แต่คนที่อยู่รอบๆ กลับมองเห็นเป็นเรื่องเล็กที่ควรจัดการกับมันได้ โดยไม่ถือว่าเป็นเรื่องใหญ่ จึงไม่แปลกที่คิดว่าคนอื่นไม่ใช่ตัวเรา ไม่ได้ยืนอยู่จุดเดียวกัน
                    เขาจึงไม่รู้และไม่เข้าใจว่าสิ่งที่ต้องเจอมันรบกวนจิตใจมากแค่ไหน ความเครียด เป็นการตอบสนองทางร่างกายและจิตใจที่มีต่อสิ่งที่ประเมินว่าแล้วเป็นภัยคุกคาม
                    ซึ่งต่างคนต่างมีรูปแบบของสิ่งกระตุ้นความเครียด กลวิธีในการเผชิญหน้าและจัดการความเครียดแตกต่างกันไป รวมถึงต้นทุนที่มีอยู่ในตัวเองเพื่อรับมือกับความเครียดของแต่ละบุคคลก็อาจไม่เท่ากัน
                    ดังนั้น ระดับความเครียดต่อปัญหาหนึ่งของแต่ละคนจึงไม่เท่ากันตามไปด้วย โดยบางคนอาจปรับตัวได้ ในขณะที่ใครอีกหลายคนอาจปรับตัวหรือรับมือกับมันไม่ไหวเลยก็ได้เช่นกัน
                    แน่นอนว่าการได้ยินคำพูดในทำนองว่า “มันเป็นเรื่องเล็ก” “ทำไมถึงจัดการไม่ได้ ทั้งที่เป็นเรื่องเล็กน้อยขนาดนั้น” หรือ “แค่นี้จะเครียดไปทำไม” สำหรับคนที่กำลังเครียดอย่างมาก
                    ก็อาจทำให้บั่นทอนจิตใจไม่น้อยทีเดียว คำพูดเหล่านี้มักทำให้เกิดความคิดว่าตนเองไม่สามารถจัดการปัญหาได้ เกิดความขุ่นข้องใจว่าคนอื่นไม่ได้มองมุมเดียวกับเรา เขาจะเข้าใจอะไร
                    ส่งผลให้ความรู้สึกทางลบเพิ่มมากขึ้น ทั้งยังเศร้าและเครียดมากขึ้นอีกด้วย และนั่นอาจทำให้การปรับตัวต่อความเครียดแย่ลง
                </Text>
                <Text style={styles.TextSubHeader}>แล้วทีนี้...จะทำยังไงดีเมื่อต้องเจอคำพูดแบบนี้</Text>
                <Text style={styles.TextContent}> ในทุกวันนี้มีโอกาสได้ยินคำพูดลักษณะนี้อยู่แล้ว สิ่งที่พอทำได้ คือ การประเมินตนเอง ดูว่าสภาพร่างกายและจิตใจได้รับผลกระทบ
                    จากปัญหาหรือคำพูดเหล่านี้มากแค่ไหน รวมถึงสามารถรับมือกับความรู้สึกทางลบในใจอย่างไรได้บ้าง ซึ่งอาจใช้กลวิธีในการเผชิญปัญหาเพื่อให้ปรับตัวได้ดีขึ้นดังต่อไปนี้</Text>
                <Text style={styles.TextSubHeader}>จัดการแบบมุ่งเน้นอารมณ์</Text>
                <Text style={styles.TextContent}> เมื่อรู้สึกไม่ดีมาก มีความกังวลหรือไม่สบายใจเกิดขึ้น หรือถ้อยคำเหล่านั้นรบกวนมากเกินไป
                    จนประสิทธิภาพในการรับมือกับปัญหาต่างๆ ลดลง ควรถอยออกมาเพื่อสร้างระยะห่าง ยกตัวเองออกจากปัญหาเพื่อผ่อนคลายและสงบจิตใจก่อนกลับไปเผชิญหน้ากับมันอีกครั้ง
                    ซึ่งสามารถใช้งานอดิเรกหรือสิ่งที่สนใจมาช่วยได้ เช่น การอ่านหนังสือ เล่นดนตรี เล่นกีฬา หรือนั่งสมาธิ</Text>
                <Text style={styles.TextSubHeader}>จัดการแบบมุ่งเน้นปัญหา</Text>
                <Text style={styles.TextContent}> หากประเมินแล้วว่าพร้อมจัดการปัญหา มีเวลา มีความรู้และประสบการณ์ หรือมีเครื่องมือพร้อมแล้ว
                    ก็อาจลงมือจัดการสะสางปัญหาโดยตรง เพื่อให้ตัวกระตุ้นความเครียดหมดไป ระดับความเครียดจะลดลงตาม และเมื่อปรับตัวได้
                    ความภาคภูมิใจในตัวเองจะเกิดขึ้นและมีมุมมองที่ดีกับตนเองมากขึ้นอีกด้วย</Text>
                <TouchableOpacity onPress={Credit}>
                    <Text style={styles.Website}>
                        Manarom Hospital
                    </Text>
                </TouchableOpacity>
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
    image: {
        height: '30%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    card: {
        height: '100%',
        width: '100%',
        backgroundColor: 'white',
        marginTop: -40,
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        shadowColor: 'black',
        shadowRadius: 50,
    },
    scrollview: {
        flex: 1,
        width: '100%',
    },
    Textheader: {
        fontSize: 23,
        fontWeight: 'bold',
        color: 'black',
        marginTop: 10,
        padding: 20,
    },
    TextContent: {
        padding: 20,
        fontSize: 17,
        marginTop: -15,
        lineHeight: 26,
        width: '100%'
    },
    TextSubHeader: {
        fontSize: 18,
        padding: 20,
        fontWeight: 'bold',
        marginTop: -20,
    },
    Website: {
        padding: 20,
        fontSize: 17,
        marginTop: -15,
        textDecorationLine: 'underline',
        textAlign: 'right',
    },
});
export default SubArticle3