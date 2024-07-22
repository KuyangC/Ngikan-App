
import { ThemedText } from "@/components/ThemedText"
import { ThemedView } from "@/components/ThemedView"
import { Ionicons } from "@expo/vector-icons"
import { useRouter } from "expo-router"
import { useEffect, useState } from "react"
import { Alert, Image, TextInput, StyleSheet, TouchableOpacity, View, useColorScheme } from "react-native"
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from "@/firebaseConfig"
export default function LoginScreens(){
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false)
    const router = useRouter()

    const signIn = async () => {
        setLoading(true)
        try {
          const user = await signInWithEmailAndPassword(auth, username, password)
          console.log(user)
          if (user) {
            router.replace('./homepage')
          }
        } catch (error: any) {
          console.log(error)
          Alert.alert('Sign in failed: ' + error.message);
        }
        setLoading(false)
      }

    return (
        <ThemedView style={{flex: 1,justifyContent: 'center', alignItems: 'center', backgroundColor: '#FFFFFF',}}>
          <View>
            <Image source={require('@/assets/images/ngikan-logo.png')} style={styles.logo} />
          </View>
            <TextInput 
                value={username}
                onChangeText={(name: string) => setUsername(name)}
                keyboardType="default"
                autoCapitalize="none"
                placeholder="e.g nduts@gmail.com"
                style={styles.input}

            />
            <TextInput 
                value={password}
                onChangeText={(pass: string) => setPassword(pass)}
                keyboardType="default"
                autoCapitalize="none"
                placeholder="*****" 
                style={styles.input}
            />
          <TouchableOpacity style={styles.login}
          
          disabled={loading} onPress={signIn}>
              <ThemedText style={{fontFamily: 'outfit', color: 'white', marginTop: 10,}}>
                  {loading ? "Loading..." : "Login"}
              </ThemedText>
          </TouchableOpacity>
        </ThemedView>
    )
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    width: '80%',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 20,
    marginBottom: 15,
    paddingLeft: 10,
  },

  logo: {
    width: 300,
    height: 300,
    marginBottom: 10,
},

  login: {
    height: 40,
    width: '80%',
    backgroundColor: '#2C4E80',
    borderRadius: 20,
    alignItems: 'center',

  }
})