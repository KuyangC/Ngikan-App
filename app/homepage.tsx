import { useEffect, useState } from 'react'
import { StyleSheet, Text, View, Image, Button, TextInput, TouchableOpacity } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native'
import { Feather } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import React from 'react'
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '@/firebaseConfig'
import { router, Link } from 'expo-router'


function homepage() {

  const [currentUser, setCurrentUser] = useState<any>()

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        console.log(user)
        setCurrentUser(user);
        // ...
      } else {
        // User is signed out
        // ...
        signOut(auth)
        router.replace("/")
      }
    });
  })

  const dataPasar = [
    {
      name: 'Pasar Modern',
      location: 'Jl. Letnan Sutopo, Rw. Mekar Jaya, Kec. Serpong, Kota Tangerang Selatan, Banten 15310',
      rating: 4.3,
      reviews: 25,
      pict: require('@/assets/images/pasar1.png'),
      link: 'https://www.google.com/maps/dir//Pasar+Modern+BSD+City,+Jl.+Letnan+Sutopo,+Rw.+Mekar+Jaya,+Kec.+Serpong,+Kota+Tangerang+Selatan,+Banten+15310/@-6.3045281,106.6822474,17z/data=!3m1!5s0x2e69f3dd8b8efcc9:0x51a07e9e2b2fbb4c!4m17!1m7!3m6!1s0x2e69e52ce0ecfa33:0xb0a04a5412e08feb!2sPasar+Modern+BSD+City!8m2!3d-6.3045281!4d106.6848223!16s%2Fg%2F1ptzgqy5p!4m8!1m0!1m5!1m1!1s0x2e69e52ce0ecfa33:0xb0a04a5412e08feb!2m2!1d106.6848223!2d-6.3045281!3e9?entry=ttu'
    },
    {
      name: 'Pasar Serpong Tangsel',
      location: 'Jl. Raya Serpong, Serpong, Kec. Serpong, Kota Tangerang Selatan, Banten 15310',
      rating: 4.3,
      reviews: 25,
      pict: require('@/assets/images/pasar1.png'),
      link: 'https://www.google.com/maps/dir//Ps.+Serpong,+Jl.+Raya+Serpong,+Serpong,+Kec.+Serpong,+Kota+Tangerang+Selatan,+Banten+15310/@-6.3212328,106.6613074,17z/data=!4m18!1m8!3m7!1s0x2e69e4c337313865:0x63b6531b5bea418c!2sPs.+Serpong,+Jl.+Raya+Serpong,+Serpong,+Kec.+Serpong,+Kota+Tangerang+Selatan,+Banten+15310!3b1!8m2!3d-6.3214634!4d106.663948!16s%2Fg%2F11b6_hwydf!4m8!1m0!1m5!1m1!1s0x2e69e4c337313865:0x63b6531b5bea418c!2m2!1d106.663948!2d-6.3214634!3e9?entry=ttu'
    },
    {
      name: 'Pasar Ciputat',
      location: 'Jl. Ciputat Raya, Ciputat, Kec. Ciputat, Kota Tangerang Selatan, Banten 15411',
      rating: 4.2,
      reviews: 25,
      pict: require('@/assets/images/pasar1.png'),
      link: 'https://www.google.com/maps/dir//MPPW%2BJG7+Pasar+Ciputat,+Jalan+Ciputat+Raya+Kebayoran+Lama+Utara+Kecamatan+Kebayoran+Lama+Kota+Jakarta+Selatan+Daerah+Khusus+Ibukota+Jakarta,+Ciputat,+Kec.+Ciputat,+Kota+Tangerang+Selatan,+Banten+15411/@-6.3134514,106.7437102,17z/data=!4m17!1m7!3m6!1s0x2e69efede1dc4b9b:0x76f83641d258f328!2sPasar+Ciputat!8m2!3d-6.3134514!4d106.7462851!16s%2Fg%2F11fylnd2l8!4m8!1m0!1m5!1m1!1s0x2e69efede1dc4b9b:0x76f83641d258f328!2m2!1d106.7462851!2d-6.3134514!3e9?entry=ttu'
    },
  ]

  const newsPasar = [
    {
      title: 'Ikan Gurame Bakar dapat menimbulkan penyakit bodoh',
      date: 'Senin, 28 Januari 2024',
      desc: 'Cek Rekomendasi Gurame di sini',

    }
  ]

  return (
      <ScrollView>
        {/*==Header==*/}
        <View style={style.headingStyle}>
          <View style={{flexDirection:'row',alignItems:'center', gap:10}}>
            <View style={style.imgShadow}>
             <Image style={style.imgStyle} source={require('@/assets/images/profile.jpg')}/>
            </View>
            <View>
              <Text style={{
                color:'#ffff'
              }}>Welcome,</Text>
              <Text style={{
                fontSize:19,
                fontFamily:'outfit',
                color:'#ffff'
              }}>{currentUser?.email}</Text>
            </View>
          </View>
          <View style={{paddingTop:10,}}>
            <Text style={style.headingTxtStyle}>Apakah Kamu Sudah Ngikan Hari ini ?</Text>
          </View>
          {/*Search Bar*/}
          <View style={style.searchbarStyle}>
            <Feather name="search" size={24} color="black" />
            <TextInput 
              placeholder='Ikan Salmon'
              placeholderTextColor='#000'
            />
          </View>
        </View>
        {/*====================*/}
        {/*==Rekomendasi Ikan==*/}
        <View>
          <View style={style.recomendedStyle}>
            <Text style={{
              fontFamily:'outfit-medium',
              textAlign: 'center',
              letterSpacing: 1,
              color: '#fff',
              margin: 5,
            }}>Ikan Segar Hari ini</Text>
          </View>
        </View>
        {/*==Rekomendasi Button==*/}
        <View style={style.recomendedtabStyle}>
          <View style={style.recomendedisiStyle}>
            <Image style={style.recomendedpngStyle} source={require('@/assets/images/mujair.jpg')}/>
            <Text style={style.recomendedtxtStyle}>Mujaer</Text>
          </View>
          <View style={style.recomendedisiStyle}>
            <Image style={style.recomendedpngStyle} source={require('@/assets/images/kakap.png')}/>
            <Text style={style.recomendedtxtStyle}>Tenggiri</Text>
          </View>
          <View style={style.recomendedisiStyle}>
            <Image style={style.recomendedpngStyle} source={require('@/assets/images/kakap.png')}/>
            <Text style={style.recomendedtxtStyle}>Kembung</Text>
          </View>
          <View style={style.recomendedisiStyle}>
            <Image style={style.recomendedpngStyle} source={require('@/assets/images/kakap.png')}/>
            <Text style={style.recomendedtxtStyle}>Kakap</Text>
          </View>
          <View style={style.recomendedisiStyle}>
            <Image style={style.recomendedpngStyle} source={require('@/assets/images/kakap.png')}/>
            <Text style={style.recomendedtxtStyle}>Patin</Text>
          </View>
        </View>
        {/*==================*/}

        {/*==Featured Pasar==*/}
        <View>
         
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={{
              color: '#323643',
              fontFamily: 'outfit-medium',
              fontSize: 18,
              textAlign: 'left',
              marginTop: 10,
              marginLeft: 20,
            }}>Featured Pasar</Text>
            <View style={{flexDirection: 'row', marginRight: 20}}>
              <Text style={{
                color: '#323643',
                fontFamily: 'outfit',
                fontSize: 13,
                marginTop: 12,
              }}>View All</Text>
              <View style={{marginTop: 9, marginLeft: 5}}>
                <FontAwesome6 name="chevron-right" size={24} color="black" />
              </View>
            </View>
          </View>
        </View>
        {dataPasar.map(pasar => {
          return(
            <Link
              href={{
                pathname: '/pasar',
                params: {
                  name: pasar.name,
                  loc: pasar.location,
                  rate: pasar.rating,
                  pict: pasar.pict,
                  link: pasar.link

                }
              }}
              style={style.featuredTabStyle}
            >
              <View>
                <Image source={pasar.pict} style={style.featuredimgStyle}/>
                <Text style={style.titletabFeaturedStyle}>{pasar.name}</Text>
                <Text style={style.desctabFeaturedStyle}>{pasar.location}</Text>
              </View>
            </Link>
          )
        })}

        {/*======================*/}
        {/*=====Ngikan News======*/}
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={{
            color: '#323643',
            fontFamily: 'outfit-medium',
            fontSize: 18,
            textAlign: 'left',
            marginTop: 10,
            marginLeft: 20,
          }}>Ngikan News</Text>
          <View style={{flexDirection: 'row', marginRight: 20}}>
            <Text style={{
              color: '#323643',
              fontFamily: 'outfit',
              fontSize: 13,
              marginTop: 12,
            }}>View All</Text>
            <View style={{marginTop: 9, marginLeft: 5}}>
              <FontAwesome6 name="chevron-right" size={24} color="black" />
            </View>
          </View>
        </View>
        {/*=====TabNgikanNews======*/}
        <View>
          <TouchableOpacity onPress={() => {
              router.push('./ikan1')}}>
          <View style={{
            backgroundColor: '#fff',
            marginHorizontal: 20, 
            marginTop: 15, 
            width: 340, 
            height: 100, 
            borderRadius: 10, 
            flexDirection: 'row', 
            shadowColor: '#000000', 
            shadowOpacity: 0.34, 
            shadowRadius: 3,
            shadowOffset: {
            width: -4,
            height: 4,
            }}}>
            <Image style={{
              width: 118,
              height: 80,
              margin: 10,
              borderRadius: 10,
            }} source={require('@/assets/images/salmon.jpg')}/>
            <View style={{flexDirection: 'column', width: 180 ,}}>
              <Text style={{fontFamily:'outfit-medium', marginTop: 5, fontSize: 14}}>8 Jenis Ikan Yang Bisa Di Konsumsi Mentah</Text>
              <Text style={{fontFamily:'outfit', marginTop: 2, fontSize: 10, color: '#EE4E4E'}}>Senin, 20 Februari 2024</Text>
              <Text style={{fontFamily:'outfit', marginTop: 3, fontSize: 12}}>Cek beberapa rekomendiasi ikan mentah di berita ini</Text>
            </View>
          </View>
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={() => {
              router.push('./ikan2')}}>
        <View>
          <View style={{
            backgroundColor: '#fff',
            marginHorizontal: 20, 
            marginTop: 15, 
            width: 340, 
            height: 100, 
            borderRadius: 10, 
            flexDirection: 'row', 
            shadowColor: '#000000', 
            shadowOpacity: 0.34, 
            shadowRadius: 3,
            shadowOffset: {
            width: -4,
            height: 4,
            }}}>
            <Image style={{
              width: 118,
              height: 80,
              margin: 10,
              borderRadius: 10,
            }} source={require('@/assets/images/gurame.jpg')}/>
            <View style={{flexDirection: 'column', width: 180 ,}}>
              <Text style={{fontFamily:'outfit-medium', marginTop: 5, fontSize: 14}}>Ini 8 Manfaat Ikan Gurame bagi Kesehatan</Text>
              <Text style={{fontFamily:'outfit', marginTop: 2, fontSize: 10, color: '#EE4E4E'}}>Rabu, 2 Maret 2024</Text>
              <Text style={{fontFamily:'outfit', marginTop: 3, fontSize: 12}}>Banyak Manfaat dari ikan gurame cek selengkapnya </Text>
            </View>
          </View>
        </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {
              router.push('./ikan3')}}>
        <View>
          <View style={{
            backgroundColor: '#fff',
            marginHorizontal: 20, 
            marginTop: 15, 
            width: 340, 
            height: 100, 
            borderRadius: 10, 
            flexDirection: 'row', 
            shadowColor: '#000000', 
            shadowOpacity: 0.34, 
            shadowRadius: 3,
            shadowOffset: {
            width: -4,
            height: 4,
            }}}>
            <Image style={{
              width: 118,
              height: 80,
              margin: 10,
              borderRadius: 10,
            }} source={require('@/assets/images/memet.jpg')}/>
            <View style={{flexDirection: 'column', width: 180 ,}}>
              <Text style={{fontFamily:'outfit-medium', marginTop: 5, fontSize: 14}}>Tradisi Memet di Klaten</Text>
              <Text style={{fontFamily:'outfit', marginTop: 2, fontSize: 10, color: '#EE4E4E'}}>Senin, 19 Maret 2024</Text>
              <Text style={{fontFamily:'outfit', marginTop: 3, fontSize: 12}}>Cek Tradisi Memet Klaten di Berita ini</Text>
            </View>
          </View>
        </View>
        </TouchableOpacity>
      </ScrollView>
  )
}

const style = StyleSheet.create({
  headingStyle: {
    display:'flex', 
    backgroundColor:'#2C4E80', 
    padding:15, 
    paddingTop:60,
  },

  featuredTabStyle: {
    backgroundColor: "#fff",
    flexDirection: 'row',
    width: 271,
    height: 193,
    borderRadius: 20,
    marginLeft: 50,
    marginTop: 15,
    marginBottom: 15,
    shadowColor: '#9796A1',
    shadowOpacity: 30,
    shadowRadius: 2,
    shadowOffset: {
      width: -5,
      height: 5,
    }
  },

  imgShadow: {
    shadowColor: '#000000',
    shadowOpacity: 10,
    shadowRadius: 2,
    shadowOffset: {
      width: -4,
      height: 4,
    },
  },

  imgStyle: {
    alignItems: 'center',
    height: 45,
    width: 45,
    borderRadius: 12,
  },

  headingTxtStyle: {
    fontSize:20,
    fontFamily:'outfit-medium',
    letterSpacing: 1,
    color:'#ffff'
  },

  searchbarStyle: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
    backgroundColor: '#D9D9D9',
    padding: 10,
    marginVertical: 10,
    marginTop: 15,
    borderRadius: 30,
  },

  recomendedStyle: {
    display:'flex', 
    backgroundColor:'#2C4E80',
    marginHorizontal: 30,
    marginVertical: 15,
    borderRadius: 15,
    shadowColor: '#000000',
    shadowOpacity: 0.5,
    shadowRadius: 3,
    shadowOffset: {
      width: 0,
      height: 4,
    }
  },

  recomendedtabStyle: {
    flexDirection:'row',
    gap: 10,
    alignItems: 'center',
    marginHorizontal: 20,
    shadowColor: '#000000',
    shadowOpacity: 0.34,
    shadowRadius: 6,
    shadowOffset: {
      width: 0,
      height: 4,
    }
  },

  recomendedisiStyle: {
    backgroundColor:'#2C4E80', 
    width: 60,
    height: 98,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  },

  recomendedtxtStyle: {
    color: '#fff',
    fontFamily: 'outfit',
    textAlign: 'center',
    fontSize: 11,
    marginTop: 15,
  },

  recomendedpngStyle: {
    width: 45,
    height: 45,
    borderRadius: 99,
    marginTop: -10,
  },

  featuredimgStyle: {
    width:271,
    height:114,
  },

  titletabFeaturedStyle: {
    fontFamily: 'outfit-medium',
    fontSize: 18,
    marginLeft: 15,
    marginTop: 10,
  },

  desctabFeaturedStyle: {
    fontFamily: 'outfit',
    fontSize: 11,
    marginLeft: 15,
    marginTop: 3,
    width: 250
  },
  containerPasar: {
    flex: 1,
    padding: 10,
    marginTop: 10,
    backgroundColor: '#fff',
  },
  cardPasar: {
    flexDirection: 'row',
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    marginBottom: 10,
    overflow: 'hidden',
  },
  imagePasar: {
    width: 100,
    height: 120,
  },
  infoPasar: {
    flex: 1,
    padding: 10,
  },
  titlePasar: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  addressPasar: {
    fontSize: 14,
    color: '#777',
  },
  ratingContainerPasar: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  ratingPasar: {
    marginLeft: 5,
    fontSize: 14,
  },
});
export default homepage
