import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { Stack, router } from "expo-router";
import React from "react";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Hi Sobat <Text style={styles.highlight}>NGIKAN</Text>!</Text>
      <View style={styles.logoContainer}>
        <Image source={require('@/assets/images/ngikan-logo.png')} style={styles.logo} />
        <Text style={styles.subtitle}>Selamat datang di NGIKAN</Text>
        <Text style={styles.description}>
          Aplikasi serba praktis untuk mencari ikan segar dan pasar terdekat
        </Text>
      </View>
      <TouchableOpacity style={styles.loginButton} onPress={() => {
              router.push('./loginpage')
            }}>
        <Text style={styles.loginText}>Masuk</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.registerButton} onPress={() => {
              router.push('./registerpage')
            }}>
        <Text style={styles.registerText}>Daftar</Text>
      </TouchableOpacity>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  header: {
    fontFamily: 'outfit',
    fontSize: 24,
    color: '#7D7D7D',
  },
  highlight: {
    fontFamily: 'outfit-bold',
    fontSize: 30,
    color: '#3B5998',
  },
  logoContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  logo: {
    width: 300,
    height: 300,
    marginBottom: 10,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  subtitle: {
    fontFamily: 'outfit',
    fontSize: 16,
    color: '#7D7D7D',
  },
  description: {
    fontFamily: 'outfit',
    fontSize: 14,
    color: '#7D7D7D',
    textAlign: 'center',
    marginHorizontal: 20,
  },
  loginButton: {
    backgroundColor: '#D3D3D3',
    padding: 15,
    borderRadius: 30,
    width: '80%',
    alignItems: 'center',
    marginTop: 10,
  },
  loginText: {
    color: '#000000',
    fontSize: 18,
    fontFamily: 'outfit'
  },
  registerButton: {
    backgroundColor: '#3B5998',
    padding: 15,
    borderRadius: 30,
    width: '80%',
    alignItems: 'center',
    marginTop: 10,
  },
  registerText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontFamily: 'outfit',
  },
})