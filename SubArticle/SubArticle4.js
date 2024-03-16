import { useNavigation } from '@react-navigation/native';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, Linking } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';

const SubArticle4 = () => {
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
            <Image source={require('../img/article4.png')} style={styles.image} />
            <ScrollView style={styles.card}>
                <Text style={styles.Textheader}>Stages of Grief 5 ระยะ ก้าวผ่านความสูญเสีย</Text>
                <Text style={styles.TextContent}>เมื่อเราได้สูญเสียสิ่งที่ผูกพันไป ไม่ว่าจะเป็นเพื่อน คนรัก ครอบครัว ความสัมพันธ์
                    หรือความผูกพันที่อาจเกิดขึ้นกับสัตว์ สิ่งของ สถานที่ ช่วงเวลา หรือสิ่งใดๆ ที่เราได้ให้คุณค่า ให้ความสำคัญ
                    ในบางครั้งการพลัดพรากอาจเป็นความจำเป็นที่ไม่อาจหลีกเลี่ยงได้ ย่อมเป็นเรื่องธรรมดาที่ต้องเกิดความทุกข์ใจ
                    ไม่ว่าจะแสดงออกมาในรูปแบบใดก็ตาม เพราะว่าใจเราได้สูญเสียสิ่งเหล่านี้ไปจริงๆ {'\n'}
                    Dr. Elisabeth Kübler Ross จิตแพทย์ ชาวสวิส-อเมริกัน ได้สร้างรูปแบบในการอธิบายภาวะการสูญเสียขึ้นมาในปี ค.ศ. 1969
                    ซึ่งแบ่งออกเป็น 5 ระยะ ดังนี้</Text>
                <Text style={styles.TextSubHeader}>ระยะที่ 1 ภาวะช็อคและปฏิเสธความจริง (Shock and Denial)</Text>
                <Text style={styles.TextContent}>ช่วงแรกสุดของการรับรู้ว่าเรากำลังสูญเสียสิ่งที่รักไป มนุษย์เรามักเกิดภาวะช็อก ปฏิเสธความจริงที่เกิดขึ้นอยู่ตรงหน้า
                    ยังคงเชื่อว่าอาจเป็นเรื่องบังเอิญหรือเกิดความผิดพลาดบางอย่าง แน่นอนว่าไม่ใช่เรื่องง่ายเลยในการยอมรับสิ่งเหล่านี้ให้ได้</Text>
                <Text style={styles.TextSubHeader}>ระยะที่ 2 ความโกรธ (Anger)</Text>
                <Text style={styles.TextContent}>ความโกรธเป็นอารมณ์แรกๆ สุดที่อาจแสดงออกมาผ่านทางความคิด พฤติกรรม หรือคำพูด
                    แน่นอนว่าภายใต้ความโกรธอาจมีอารมณ์อื่นๆ ปะปนกันอยู่ข้างใน เช่น ความกลัว ความเศร้า ความสับสน ความรู้สึกผิด เป็นต้น</Text>
                <Text style={styles.TextSubHeader}>ระยะที่ 3 การเจรจาต่อรอง (Bargaining)</Text>
                <Text style={styles.TextContent}>พอใจเราเริ่มยอมรับได้บ้างแล้ว แต่ก็อาจยังไม่สนิทใจ มนุษย์เริ่มเกิดการต่อรอง หาวิธีการอื่นๆ ในการจัดการ
                    ขอความคิดเห็นต่างๆ จากคนอื่น เพื่อให้ใจรู้สึกได้ว่ายังพอมีอะไรที่สามารถควบคุมได้บ้างทำให้เกิดความรู้สึกปลอดภัยภายในใจ</Text>
                <Text style={styles.TextSubHeader}>ระยะที่ 4 โศกเศร้าเสียใจ (Depression)</Text>
                <Text style={styles.TextContent}>เมื่อเกิดการสูญเสีย ไม่ว่าในความสัมพันธ์ใดๆ อย่างไรแล้วความโศกเศร้าเสียใจก็เป็นของคู่กัน อาจเกิดเป็นอารมณ์เศร้าเล็กๆ
                    ที่อยู่ภายใน จนถึงระดับความเศร้ารุนแรงที่สามารถพัฒนาเป็นภาวะซึมเศร้าได้ เพราะฉะนั้นในระยะนี้ จึงต้องพึ่งการดูแลตัวเองให้ดีจนกว่าจะก้าวไปถึงระยะต่อไป</Text>
                <Text style={styles.TextSubHeader}>ระยะที่ 5 การยอมรับ (Acceptance)</Text>
                <Text style={styles.TextContent}>เป็นขั้นสุดท้ายในการยอมรับได้ว่าสิ่งที่เกิดขึ้นคืออะไร การสูญเสียเป็นหนึ่งสิ่งที่เลี่ยงไม่ได้ ไม่ว่าวันใดวันหนึ่งก็สามารถเกิดขึ้นได้ในชีวิต
                    ซึ่งก็เป็นเรื่องธรรมชาติ เป็นประสบการณ์สากลที่ครั้งหนึ่งมนุษย์จะได้พบเจออย่างหลีกเลี่ยงไม่ได้ แต่สุดท้ายแล้ว มนุษย์ก็สามารถกลับมาเป็นปกติได้อีกครั้ง ไม่มีใครบอกได้ว่าต้องใช้เวลาเท่าไหร่
                    เพราะเป็นเรื่องที่ปัจเจกคนมากๆ อาจเกิดขึ้นในระดับนาที วัน สัปดาห์ เดือน หรือปี ก็แล้วแต่คน แต่อยากให้ตระหนักว่าในทุกเหตุการณ์นั้น
                    เราได้ทำเต็มที่ที่สุดในฐานะมนุษย์ธรรมดาคนหนึ่งจะทำได้ภายใต้เงื่อนไขและข้อจำกัดของการเป็นมนุษย์แล้ว ซึ่งเป็นสิ่งที่ดีที่สุดที่เราสามารถคิดได้หรือเลือกได้ในช่วงเวลานั้นๆ
                    ที่ผ่านพ้นมาแล้ว เพราะฉะนั้นอย่าลืมให้เวลาและพื้นที่ในการดูแลฟื้นฟูตัวเอง อย่าลืมขอบคุณตัวเอง และอย่าลืมให้อภัยตัวเอง ณ ปัจจุบันนี้ด้วย จนกว่าใจจะค่อยๆ ยอมรับและผ่านพ้นไปได้
                    อย่างไรก็ดี หากไม่สามารถผ่านพ้นระยะเหล่านั้นไปได้ด้วยตัวเอง การปรึกษาผู้เชี่ยวชาญอย่างจิตแพทย์ นักจิตวิทยา นักจิตบำบัด นับเป็นทางเลือกหนึ่งที่เราสามารถเลือกได้ เพราะมนุษย์ไม่จำเป็นต้องผ่านพ้นทุกปัญหาไปด้วยตัวเอง</Text>
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
export default SubArticle4