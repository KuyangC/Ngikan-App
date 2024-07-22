import { useEffect, useState } from 'react'
import { StyleSheet, Text, View, Image, Button, TextInput } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native'
import { Feather } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons';
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
      rating: '4.3',
      pict: require('@/assets/images/pasar1.png'),
    },
    {
      name: 'Pasar Serpong Tangsel',
      location: 'Jl. Raya Serpong, Serpong, Kec. Serpong, Kota Tangerang Selatan, Banten 15310',
      rating: '4.3',
    },
    {
      name: 'Pasar Ciputat',
      location: 'Jl. Ciputat Raya, Ciputat, Kec. Ciputat, Kota Tangerang Selatan, Banten 15411',
      rating: '4.2'
    },
  ]

  return (
    <SafeAreaView style={{height: "100%"}}>
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
        {/*==Featured Pasar Tabs==*/}
         {/* 
        <View style={style.featuredTabStyle}>
          <Image style={style.featuredimgStyle} source={require('@/assets/images/pasar1.png')}/>
          <Text style={style.titletabFeaturedStyle}>Pasar Modern</Text>
          <Text style={style.desctabFeaturedStyle}>Jl. Letnan Sutopo, Rw. Mekar Jaya, Kec. Serpong, Kota Tangerang Selatan, Banten 15310</Text>
        </View>
        */}
        {dataPasar.map(pasar => {
          return(
            <Link
              href={{
                pathname: '',
                params: {
                  name: pasar.name,
                  loc: pasar.location,
                  rate: pasar.rating,
                  pict: pasar.pict,
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
          <View style={{
            backgroundColor: '#fff',
            marginHorizontal: 20, 
            marginTop: 15, 
            width: 360, 
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
            }} source={require('@/assets/images/kakap.png')}/>
            <View style={{flexDirection: 'column', width: 180 ,}}>
              <Text style={{fontFamily:'outfit-medium', marginTop: 5, fontSize: 14}}>Ikan Kembung Goreng Bisa Bantu Turunkan Kolesterol.</Text>
              <Text style={{fontFamily:'outfit', marginTop: 2, fontSize: 10, color: '#EE4E4E'}}>Senin, 20 Februari 2024</Text>
              <Text style={{fontFamily:'outfit', marginTop: 3, fontSize: 12}}>Cek rekomendasi seafood yang enak di Jakarta.</Text>
            </View>
          </View>
        </View>
        <View>
          <View style={{
            backgroundColor: '#fff',
            marginHorizontal: 20, 
            marginTop: 15, 
            width: 360, 
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
            }} source={require('@/assets/images/kakap.png')}/>
            <View style={{flexDirection: 'column', width: 180 ,}}>
              <Text style={{fontFamily:'outfit-medium', marginTop: 5, fontSize: 14}}>Ikan Kembung Goreng Bisa Bantu Turunkan Kolesterol.</Text>
              <Text style={{fontFamily:'outfit', marginTop: 2, fontSize: 10, color: '#EE4E4E'}}>Senin, 20 Februari 2024</Text>
              <Text style={{fontFamily:'outfit', marginTop: 3, fontSize: 12}}>Cek rekomendasi seafood yang enak di Jakarta.</Text>
            </View>
          </View>
        </View>
        <View>
          <View style={{
            backgroundColor: '#fff',
            marginHorizontal: 20, 
            marginTop: 15, 
            width: 360, 
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
            }} source={require('@/assets/images/kakap.png')}/>
            <View style={{flexDirection: 'column', width: 180 ,}}>
              <Text style={{fontFamily:'outfit-medium', marginTop: 5, fontSize: 14}}>Ikan Kembung Goreng Bisa Bantu Turunkan Kolesterol.</Text>
              <Text style={{fontFamily:'outfit', marginTop: 2, fontSize: 10, color: '#EE4E4E'}}>Senin, 20 Februari 2024</Text>
              <Text style={{fontFamily:'outfit', marginTop: 3, fontSize: 12}}>Cek rekomendasi seafood yang enak di Jakarta.</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const style = StyleSheet.create({
  headingStyle: {
    display:'flex', 
    backgroundColor:'#2C4E80', 
    padding:15, 
    paddingTop:10,
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
    marginHorizontal: 35,
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

  featuredpasartxtStyle: {
    color: '#323643',
    fontFamily: 'outfit-medium',

  },

  featuredTabStyle: {
    backgroundColor: "#fff",
    flexDirection: 'row',
    width: 271,
    height: 193,
    borderRadius: 20,
    marginLeft: 20,
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

  featuredimgStyle: {
    width:271,
    height:114,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
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
})

export default homepage
