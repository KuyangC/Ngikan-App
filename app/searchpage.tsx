import { SafeAreaView, ScrollView, StyleSheet, Text, View, TextInput, Image } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons';
import { Link } from 'expo-router'

const Searchpage = () => {
  const dataIkan = [
    {
        name: 'Ikan Salmon',
        desc: 'Protein Tinggi. Membantu membangun dan memelihara jaringan tubuh.Omega-3: Berlimpah. Baik untuk kesehatan jantung, otak, dan mata.',
        price: '15.000/KG',
        discount: 'Discount 5%',
        pict: require('@/assets/images/salmon.jpg'),
        longdesc: 'Daging salmon adalah ikan yang populer karena rasanya yang lezat dan kandungan gizinya yang tinggi. Memiliki tekstur lembut dan juicy dengan rasa gurih dan manis alami. Warnanya merah muda hingga oranye, kaya akan asam lemak omega-3, protein berkualitas tinggi, vitamin B12, vitamin D, dan mineral seperti selenium dan kalium. Mengonsumsi salmon secara teratur bermanfaat untuk kesehatan jantung, otak, dan tulang. Salmon dapat diolah dalam berbagai cara, seperti dipanggang, digoreng, atau disajikan mentah sebagai sashimi atau sushi, menjadikannya pilihan makanan yang sehat dan serbaguna.'
    },
    {
        name: 'Ikan Kembung',
        desc: 'Protein Tinggi. Membantu membangun dan memelihara jaringan tubuh.Omega-3: Berlimpah. Baik untuk kesehatan jantung, otak, dan mata.',
        price: '15.000/KG',
        discount: 'Discount 5%',
        pict: require('@/assets/images/kembung.jpg'),
        longdesc: 'Ikan kembung adalah ikan yang populer karena harganya terjangkau dan nutrisinya tinggi. Dagingnya padat dan gurih, dengan warna putih hingga abu-abu. Kaya akan asam lemak omega-3, protein, vitamin B12, vitamin D, kalsium, dan fosfor, ikan kembung baik untuk kesehatan jantung, otak, dan tulang. Ikan ini sering ditangkap di perairan dangkal laut tropis dan dijual di pasar tradisional. Biasanya diolah dengan digoreng, dibakar, atau dimasak dalam kuah, menjadikannya pilihan makanan sehat dan serbaguna'
    },
    {
        name: 'Ikan Mujaer',
        desc: 'Protein Tinggi. Membantu membangun dan memelihara jaringan tubuh.Omega-3: Berlimpah. Baik untuk kesehatan jantung, otak, dan mata.',
        price: '15.000/KG',
        discount: 'Discount 5%',
        pict: require('@/assets/images/mujair.jpg'),
        longdesc: 'Ikan mujair adalah ikan air tawar dengan daging lembut dan rasa gurih. Warnanya putih hingga merah muda dengan kulit abu-abu atau kecokelatan. Kaya protein, vitamin B12, fosfor, dan omega-3, ikan mujair baik untuk kesehatan jantung dan otak. Umumnya dibudidayakan di kolam atau sungai dan sering diolah dengan digoreng, dibakar, atau dimasak dalam kuah.'
    },
    {
        name: 'Ikan Patin',
        desc: 'Protein Tinggi. Membantu membangun dan memelihara jaringan tubuh.Omega-3: Berlimpah. Baik untuk kesehatan jantung, otak, dan mata.',
        price: '15.000/KG',
        discount: 'Discount 5%',
        pict: require('@/assets/images/patin.jpg'),
        longdesc: 'Ikan patin adalah ikan air tawar dengan daging putih yang lembut dan rasa gurih. Dikenal karena kandungan proteinnya yang tinggi serta vitamin B12 dan fosfor. Umumnya dibudidayakan di kolam atau sungai, ikan patin sering diolah dengan cara digoreng, dibakar, atau dimasak dalam kuah.'
     }
]

  return (
      <ScrollView>
        <View style={styles.headerStyle}>
          <Text style={styles.headingTxtStyle}>Mau Cari Ikan Apa Hari Ini</Text>
          <View style={styles.searchbarStyle}>
            <Feather name="search" size={24} color="black" />
            <TextInput 
              placeholder='Ikan Salmon'
              placeholderTextColor='#000'
            />
          </View>
        </View>
      <View>
        <Text style={styles.mainHeader}>Order Here!</Text>
        {dataIkan.map(ikan => {
          return (
            <Link
              href={{
                pathname: './tabdetail',
                params: {
                  name: ikan.name,
                  desc: ikan.longdesc,
                  price: ikan.price,
                  discount: ikan.discount,
                  pict: ikan.pict,
                },
              }}
              style={{ backgroundColor: "transparent" }}
            >
              <View style={styles.mainTabs}>
                <Image source={ikan.pict} style={styles.maintabImg} />
                <View>
                  <Text style={styles.mainTitle}>{ikan.name}</Text>
                  <Text style={styles.mainDesc}>{ikan.desc}</Text>
                  <Text style={styles.mainPrice}>{ikan.price}</Text>
                  <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.mainDiscount}>{ikan.discount}</Text>
                    {/* <Link href={{pathname: 'screens/Search/[id]', params: {id: 'tabdetail'}}} style={styles.button}>Add</Link> */}
                  </View>
                </View>
              </View>
            </Link>
          )
        })}
      </View>
      </ScrollView>
  )
}

export default Searchpage

const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: '#2C4E80',
    width: '100%',
    height: 180,
    display: 'flex',
    alignItems: 'center',
  },

  searchbarStyle: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
    backgroundColor: '#D9D9D9',
    padding: 10,
    marginVertical: 10,
    marginTop: 20,
    borderRadius: 30,
    width: 330,
  },

  headingTxtStyle: {
    fontSize:20,
    fontFamily:'outfit-medium',
    letterSpacing: 1,
    color:'#ffff',
    marginTop: 70
  },

  mainHeader: {
    fontFamily: 'outfit-bold',
    fontSize: 20,
    marginLeft: 20,
    marginTop: 20,
    marginBottom: 10,
  },

  mainTabs: {
    width: 390,
    height: 137,
    borderRadius: 7,
    marginHorizontal: 10,
    display: 'flex',
    flexDirection: 'row'
  },

  maintabImg: {
    width: 125,
    height: 112,
    marginHorizontal: 10,
    marginVertical: 10,
    borderRadius: 20
  },

  mainTitle: {
    fontFamily: 'outfit-medium',
    fontSize: 14,
    marginTop: 8,
  },

  mainDesc: {
    width: 250,
    fontFamily: 'outfit',
    fontSize: 12,
  },

  mainPrice: {
    fontFamily: 'outfit',
    fontSize: 12,
    color: '#2C4E80'
  },

  mainDiscount: {
    fontFamily: 'outfit',
    fontSize: 12,
  },


})