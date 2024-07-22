import { ScrollView, StyleSheet, Text, View, Image, TouchableOpacity, SafeAreaView } from 'react-native'
import { Link, router } from 'expo-router'
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

import React, { useEffect, useState } from 'react'
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '@/firebaseConfig';

const Profilepage = () => {
  
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
  return (
    <ScrollView>
      <View>
        <View style={styles.headerStyle}>
          {/*<Link href={{pathname: '/screens/[id]', params: { id: 'homepage' }, }} style={styles.headerBackButton}>&#x3c;</Link>*/}
          <Text style={styles.headerTxtStyle}>PROFILKU</Text>
          <View style={styles.profileHeader}>
            <Image style={styles.imgHeader} source={require('@/assets/images/profile.jpg')} />
            <View style={styles.profileIsiHeader}>
              <Text style={styles.profiletxtHeader}>{currentUser?.email}</Text>
              <Text style={styles.profiletxtHeader}>08123456789</Text>
            </View>
       
              <View style={{flex: 1, width: "100%", justifyContent: "center", alignItems: "flex-end", marginRight: 10}}>
              <Feather name="edit" size={24} color="black"  />
              </View>
          </View>
        </View>
      </View>
      <View style={styles.dasborstyle}>
        <Text style={styles.title}>Dasbor</Text>
        <TouchableOpacity style={{ flexDirection: 'row', backgroundColor: 'Red' }}>
          <View style={styles.icon1}>
            <Ionicons name="settings-outline" size={24} color="white" style={styles.pengaturan} />
          </View>
          <Text style={{ marginLeft: 10, marginTop: 35, fontFamily: 'outfit', fontSize: 16, color: "black" }}>Pengaturan</Text>
        </TouchableOpacity>
        <View style={{ flexDirection: 'row' }}>
          <View style={styles.icon2}>
            <FontAwesome name="lock" size={24} color="white" style={styles.privacy} />
          </View>
          <Text style={{ marginLeft: 10, marginTop: 35, fontFamily: 'outfit', fontSize: 16 }}>Privasi</Text>
        </View>
      </View>
        <View style={styles.loginDasbor}>
          <Text style={styles.LoginTitle}>Akun Saya</Text>
          <Text style={styles.Textblue}>Ganti Ke Akun Lain</Text>
          <TouchableOpacity onPress={() => signOut(auth)}>
          <Text style={styles.Textred}>Keluar Akun</Text>
          </TouchableOpacity>
        </View>
    </ScrollView>
  )
}

export default Profilepage

const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: '#2C4E80',
    width: '100%',
    height: 180,
    display: 'flex',
    alignItems: 'center',

  },

  headerBackButton: {
    height: 20,
    width: 20,
    marginTop: 20,
    backgroundColor: '#fff',
    textAlign: 'center',
  },

  headerTxtStyle: {
    fontFamily: 'outfit',
    fontSize: 22,
    color: '#fff',
    marginTop: 50,
    marginBottom: 5,
  },

  profileHeader: {
    width: '90%',
    height: 59,
    marginTop: 5,
    backgroundColor: '#fff',
    flexDirection: 'row',
    display: 'flex',
    borderRadius: 20,
    justifyContent: "space-between"
  },

  profileIsiHeader: {
    flexDirection: 'column',
    marginTop: 5,
  },

  profiletxtHeader: {
    fontFamily: 'outfit',
    fontSize: 12,
  },

  imgHeader: {
    alignItems: 'center',
    marginTop: 7,
    marginLeft: 10,
    marginRight: 10,
    height: 45,
    width: 45,
    borderRadius: 20,
    shadowColor: '#000000',
    shadowOpacity: 10,
    shadowRadius: 2,
    shadowOffset: {
      width: -4,
      height: 4,
    },
  },

  dasborstyle: {
    borderColor: '#B4B4B8',
    borderWidth: 2,
    borderRadius: 5,
    marginTop: 30,
    marginHorizontal: 20,
    width: '90%',
    height: 230,

},

title: {
  marginLeft: 15,
  marginTop: 20,
  fontFamily: 'outfit',
  fontSize: 18
},

icon1: {
  width: 50,
  height: 50,
  borderRadius: 90,
  backgroundColor: '#3DB2FF',
  marginTop: 20,
  marginLeft: 10,
  alignContent: 'center',
  alignItems: 'center'
},

pengaturan: {
  alignItems: 'center',
  marginVertical: 12
},

icon2: {
  width: 50,
  height: 50,
  borderRadius: 90,
  backgroundColor: '#C4C4C4',
  marginTop: 20,
  marginLeft: 10,
  alignContent: 'center',
  alignItems: 'center'
},

privacy: {
  marginVertical: 12
},

loginDasbor: {
  borderColor: '#B4B4B8',
  borderWidth: 2,
  borderRadius: 5,
  width: '90%',
  height: 150,
  marginHorizontal: 20,
  marginTop: 30,
},

LoginTitle: {
marginLeft: 15,
marginTop: 20,
fontFamily: 'outfit',
fontSize: 18
},

Textblue: {
marginLeft: 15,
marginTop: 20,
fontFamily: 'outfit',
fontSize: 16,
color: '#3E5FAF'
},

Textred: {
marginLeft: 15,
marginTop: 20,
fontFamily: 'outfit',
fontSize: 16,
color: '#FB6D64'
},

})