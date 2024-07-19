import { useEffect, useState } from 'react';
import { Text, View, TextInput, Button, StyleSheet } from 'react-native';
import { signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth'
import auth from '../services/firebaseAuth';

export default function LoginScreen({ navigation }) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const checkIfLoggedIn = () => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                // console.log("User is still signed in!");
                // console.log(user)
                navigation.navigate('Dashboard')
            } 
            // else {
            //     console.log("User has been signed out!");
            // }
        })
    }

    useEffect(() => {
        checkIfLoggedIn();
    })

    const handleLogin = () => {
        setError('');
        signInWithEmailAndPassword(auth,email,password)
        .then((userCredentials) => {
            const user = userCredentials.user;
            // console.log(user);
            navigation.navigate('Dashboard')
        })
        .catch((error) => {
            setError(error.message);
        });
    }

    const goToRegister = () => {
        navigation.navigate('Register')
    }

    return (
        <View style={{flex:1, justifyContent:"center", alignItems:"center"}}>
            <Text style={{fontSize: 20, fontWeight: "bold"}} >Login</Text>
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
            <Button title='Login' onPress={handleLogin} />
            <Text style={{color: "red"}} >{error}</Text>
            <Text style={{marginVertical: 10}} >Don't have an account? <Text style={{color:"blue"}} onPress={goToRegister} >Register here.</Text></Text>
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