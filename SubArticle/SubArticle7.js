import { useNavigation } from '@react-navigation/native';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, Linking } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';

const SubArticle7 = () => {
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
            <Image source={require('../img/article7.png')} style={styles.image} />
            <ScrollView style={styles.card}>
                <Text style={styles.Textheader}>เดี๋ยวดี เดี๋ยวร้าย ใช่ไบโพลาร์หรือเปล่านะ?</Text>
                <Text style={styles.TextContent}>"เดี๋ยวดี เดี๋ยวร้าย นี่ชั้นเป็นไบโพลาร์หรือเปล่านะ?" ประโยคยอดฮิตที่เริ่มได้ยินบ่อยขึ้นจากคนในสังคมปัจจุบัน
                    จนทำให้โรคไบโพลาร์ถูกเข้าใจผิดไปอย่างมหันต์ ถึงเวลาแล้วที่ต้องไขความลับอธิบายให้ทุกคนได้รู้และเข้าใจจริงๆ เสียทีว่า “เดี๋ยวดี เดี๋ยวร้าย” คืออะไร เป็นแค่อารมณ์
                    นิสัย หรือโรคไบโพลาร์ กันแน่!!! ก่อนอื่นมารู้จักกับ “อารมณ์” กันก่อนว่า ต้องหนักหน่วงแค่ไหน ถึงควรไปพบแพทย์เพื่อช่วยวินิจฉัยว่าเป็นโรคทางอารมณ์หรือไม่ ซึ่งวิธีสังเกตด้วยตนเองง่ายๆ มีดังนี้{'\n'}
                    • “มาก” เกินอารมณ์ปกติ เช่น อารมณ์ดีมากจนมั่นใจในตัวเองเกินไป หรือเศร้าหดหู่มากจนมองตนเองแย่ โทษตัวเองบ่อย เบื่อหน่ายสิ่งที่เคยชอบ{'\n'}
                    • ควบคุมอารมณ์ของตนเองไม่ได้{'\n'}
                    • กระทบการใช้ชีวิตประจำวัน การทำงาน ความสัมพันธ์กับคนรอบตัว</Text>
                <Text style={styles.TextSubHeader}>โรคทางอารมณ์ คืออะไร มีอะไรบ้าง?</Text>
                <Text style={styles.TextContent}>โรคทางอารมณ์ เป็นกลุ่มโรคที่เกิดจากความผิดปกติในการควบคุมอารมณ์ ซึ่งในสภาวะปกติเราเคยควบคุมได้
                    แต่ในช่วงที่มีโรคทางอารมณ์ เราจะไม่สามารถควบคุมอารมณ์ได้เท่าเดิม ส่งผลกระทบต่อชีวิตประจำวันหรือความสัมพันธ์กับคนรอบตัว ซึ่งโรคทางอารมณ์ที่พบได้บ่อย
                    มีดังนี้{'\n'}
                    1. โรคซึมเศร้า{'\n'}
                    2. โรคไบโพลาร์{'\n'}
                    3. Dysthymia อารมณ์เศร้าในระดับน้อยแต่เศร้านานเกิน 2 ปี{'\n'}
                    4. Organic Mood Disorder โรคทางอารมณ์ที่สัมพันธ์กับโรคทางร่างกาย{'\n'}
                    5. Premenstrual Dysphoric Disorder ภาวะอารมณ์แปรปรวนก่อนมีระดู</Text>
                <Text style={styles.TextSubHeader}>โรคไบโพลาร์ (Bipolar disorder)</Text>
                <Text style={styles.TextContent}>หรือโรคอารมณ์สองขั้ว คือ โรคที่เกี่ยวข้องกับความผิดปกติในการควบคุมอารมณ์หลักๆ 2 ขั้ว คือ ขั้วเศร้า และ ขั้วคึก
                    (ขั้วแมเนีย) อารมณ์แต่ละขั้วต้องดำเนินอยู่นานพอ ไม่ได้เปลี่ยนแปลงขึ้นๆ ลงๆ เร็ว ไม่สามารถควบคุมอารมณ์ให้อยู่ในช่วงอารมณ์ปกติได้
                    และส่งผลกระทบต่อชีวิตประจำวัน มีสาเหตุจากหลายปัจจัย มีการเปลี่ยนแปลงของสารสื่อประสาทในสมอง ถ่ายทอดทางพันธุกรรมได้
                    เด็กที่เกิดจากพ่อหรือแม่ที่เป็นไบโพลาร์มีโอกาสเป็นโรคสูงกว่าคนทั่วไปถึง 3- 4 เท่า และสามารถพบร่วมกับปัญหาสุขภาพจิตอื่นๆ เช่น การใช้สารเสพติด ฯลฯ
                    ช่วงภาวะเศร้าในโรคไบโพลาร์ เพิ่มความเสี่ยงให้ผู้ป่วยมีอัตราการฆ่าตัวตายสูงกว่าคนทั่วไปอย่างชัดเจน สามารถสังเกตลักษณะอาการเด่นชัดของขั้วเศร้าและขั้วคึก ได้ดังนี้</Text>
                <Text style={styles.TextSubHeader}>ขั้วเศร้า</Text>
                <Text style={styles.TextContent}>มีอาการเหมือนกับโรคซึมเศร้า โดยมีอาการต่อเนื่องกันทุกวันหรือเกือบทุกวัน มากกว่าหรือเท่ากับ 2 สัปดาห์{'\n'}
                    1. อารมณ์ : เศร้ามากขึ้น หดหู่มาก เบื่อ ท้อแท้ หงุดหงิด{'\n'}
                    2. ความคิด : คิดลบ โทษตัวเอง ไม่มั่นใจ ไร้ค่า สิ้นหวัง คิดช้า สมาธิไม่ดี ลืมง่าย คิดอยากตาย{'\n'}
                    3. พฤติกรรม : เบื่ออาหารหรือกินมากขึ้น นอนไม่หลับ อยากนอนทั้งวัน อ่อนเพลีย</Text>
                <Text style={styles.TextSubHeader}>ขั้วคึก</Text>
                <Text style={styles.TextContent}>ต้องประกอบด้วยอาการ 3 กลุ่ม คือ อารมณ์ ความคิด และพฤติกรรม (ไม่ใช่แค่กลุ่มใดกลุ่มหนึ่ง)
                    โดยมีอาการต่อเนื่องกันมากกว่าหรือเท่ากับ 1 สัปดาห์{'\n'}
                    1. อารมณ์ : อารมณ์ดีมาก คึกคัก สนุกสนานมากเกินปกติ หงุดหงิดมาก อารมณ์แปรปรวน หงุดหงิดฉุนเฉียวง่ายกว่าเดิม{'\n'}
                    2. ความคิด : มั่นใจมาก พลังเยอะ เจ้าโปรเจค หลงผิด มีความคิดในหัวมากมาย ความคิดแล่นในหัวเร็วมาก ว่อกแว่ก หุนหันพลันแล่น{'\n'}
                    3. พฤติกรรม : พูดเยอะ พูดเร็ว ขาดความชั่งใจ ใช้เงินเยอะจนเป็นหนี้สิน พาตัวเองไปอยู่ในสถานการณ์เสี่ยงอันตราย นอนน้อยหรือไม่อยากนอน{'\n'}
                </Text>
                <Text style={styles.TextSubHeader}>“โรคทางอารมณ์ ซึมเศร้า ไบโพลาร์ ไม่ใช่แค่อารมณ์ไม่ดี ไม่ใช่นิสัยไม่ดี ไม่ใช่แค่เรื่องของใจ แต่เป็นเรื่องของ สมอง ด้วย”</Text>
                <Text style={styles.TextContent}>โรคไบโพลาร์ เป็นโรคที่รักษาให้ดีขึ้นและหายได้ การหายจากอาการมีหลายแบบ มีทั้งกินยาต่อเนื่อง 1-2 ปี แล้วหยุดกินยาได้
                    หรือแบบที่จำเป็นต้องกินยาต่อเนื่องไปตลอด ใช้ชีวิตได้ ทำงานได้ และไม่มีอาการกลับมา ทั้งนี้ขึ้นกับระดับความรุนแรงของตัวโรค ความร่วมมือ
                    และวินัยในการรักษาและกินยาปัจจุบันมีการรักษาหลัก 2 แบบ คือ{'\n'}
                    1. การรักษาโดยการใช้ยา ซึ่งยาที่ใช้ในการรักษามีหลากหลาย ขึ้นกับอาการของแต่ละคน{'\n'}
                    2. การรักษาโดยไม่ใช้ยา เช่น การทำจิตบำบัด หรือการรักษาด้วยไฟฟ้า ซึ่งการรักษาด้วยไฟฟ้าเลือกใช้ในกรณีอาการรุนแรง
                    รักษาด้วยยาหลายชนิดแต่ไม่ได้ผลการตอบสนองที่ดีหรือต้องการผลการรักษาที่ดีขึ้นอย่างรวดเร็วเฉียบพลัน
                    โดยแนวทางการรักษาที่ได้ประสิทธิภาพสูงสุดและถูกเลือกเป็นทางเลือกแรก คือ รักษาด้วยยาควบคู่กับการทำจิตบำบัด
                    การดูแลตนเองเมื่อเป็นไบโพลาร์สามารถทำได้โดยการเรียนรู้และรู้จักอาการไบโพลาร์ในตัวเรา ช่วยให้รักษาได้ทันท่วงทีและป้องกันการเป็นซ้ำได้ดียิ่งขึ้น
                    แม้จะได้รับการวินิจฉัยโรคไบโพลาร์เหมือนกัน แต่อาการแสดงไม่จำเป็นต้องเหมือนกันทั้งหมด การรักษา กินยาต่อเนื่อง และนอนพักผ่อนให้เพียงพอ
                    เมื่อมีภาวะซึมเศร้า ต้องไม่ยอมรับว่าตัวตนของเราแย่ที่เรามีภาวะเศร้า ตัวตนของเราไม่ได้แย่ สิ่งที่ทำให้เรารู้สึกแย่คือตัวโรค อย่าเพิ่งตัดสินใจอะไรใหญ่ๆ
                    ในช่วงที่มีภาวะเศร้า อย่าตำหนิหรือลงโทษตนเองแรงเกินไป อย่าท้อแท้กับการเป็นซ้ำและอย่าเบื่อหน่ายกับการรักษา
                    ส่วนช่วงคึกหรือแมเนีย ควรระวังการใช้จ่ายในช่วงอารมณ์ดีมากๆ หลีกเลี่ยงการใช้สารเสพติดและอยู่ในสิ่งแวดล้อมที่เสี่ยงอันตราย
                    ทั้งหมดน่านี้จะเป็นคำตอบของคำถามต้นเรื่องว่า "เดี๋ยวดี เดี๋ยวร้าย นี่ชั้นเป็นไบโพลาร์หรือเปล่านะ?" ได้กระจ่างขึ้น สุดท้ายขอส่งกำลังใจให้กับทุกท่านที่ต้องเผชิญกับโรคนี้เพราะ
                    “ไบโพลาร์ไม่น่ากลัวอย่างที่คิด”</Text>
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

export default SubArticle7