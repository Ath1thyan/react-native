import { useState } from 'react';
import { Text, View, TextInput, Button, StyleSheet } from 'react-native';
import { createUserWithEmailAndPassword } from 'firebase/auth'
import auth from '../services/firebaseAuth';
// import AsyncStorage from "@react-native-async-storage/async-storage";

export default function RegisterScreen({ navigation }) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleRegister = () => {
        setError('');
        createUserWithEmailAndPassword(auth,email,password)
        .then((userCredentials) => {
            const user = userCredentials.user;
            // AsyncStorage.setItem("user", JSON.stringify(user))
            // console.log(user)
            navigation.navigate('Dashboard')
        })
        .catch((error) => {
            // const errorCode = error.code;
            // const errorMessage = error.message;
            // console.log(errorCode, errorMessage);
            setError(error.message);
        });
    }

    const goToLogin = () => {
        navigation.navigate('Login')
    }

    return (
        <View style={{flex:1, justifyContent:"center", alignItems:"center"}}>
            <Text style={{fontSize: 20, fontWeight: "bold"}} >Register</Text>
            <TextInput
                onChangeText={setEmail}
                placeholder="Email"
                style={styles.textInput}
            />
            <TextInput
                onChangeText={setPassword}
                placeholder="Password"
                secureTextEntry
                style={styles.textInput}
            />
            <Button title='Register' onPress={handleRegister} />
            <Text style={{color: "red"}} >{error}</Text>
            <Text style={{marginVertical: 10}} >Already have an account? <Text style={{color:"blue"}} onPress={goToLogin} >Login here.</Text></Text>
        </View>
    )
};

const styles = StyleSheet.create({
    textInput: {
        borderWidth:1,
        borderColor:"gray",
        width:200,
        marginVertical:10,
        paddingHorizontal:8,
    }
})