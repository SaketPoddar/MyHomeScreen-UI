import { StyleSheet, Text, View, Image, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import { colors } from '../utils/colors'
import { useNavigation } from '@react-navigation/native'


const HomeScreen = () => {
    const navigation =useNavigation();

    const handleLogin = () =>{
        navigation.navigate("LOGIN");
    };

    const handleSignup = () =>{
        navigation.navigate("SIGNUP");
    }
    return (
        <SafeAreaView style={styles.container}>
            <Image source={require("../assets/logo.png")} style={styles.logo} />
            <Image source={require("../assets/man.png")} style={styles.manLogo} />
            <Text style={styles.title}>My HomeScreen</Text>
            <Text style={styles.subTitle}>"Get started by adding your first task!"</Text>
            <Text style={styles.subTitle}>"Stay focused, stay productive!"</Text>
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    style={[
                        styles.loginButtonWrapper,
                        { backgroundColor: colors.primary }
                    ]}
                    onPress={handleLogin}
                    >
                    <Text style={styles.loginButtonText}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.loginButtonWrapper]}
                onPress={handleSignup}>
                    <Text style={styles.signupButtonText}>Sign-up</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
        alignItems: 'center',
    },
    logo: {
        height: 40,
        width: 175,
        marginVertical: 30,
    },
    manLogo: {
        height: 300,
        width: 260,
        marginVertical: 20,
    },
    title: {
        fontSize: 36,
        fontWeight: '700',
        color: colors.primary,
        marginVertical: 20,
    },
    subTitle: {
        fontSize: 18,
        color: colors.secondary,
        marginVertical: 20,
        fontWeight: 'bold',
        alignItems: 'center',
    },
    buttonContainer: {
        flexDirection: "row",
        marginTop: 20,
        borderWidth: 1,
        borderColor: colors.primary,
        width: "80%",
        height: 60,
        borderRadius: 100,
    },
    loginButtonWrapper: {
        justifyContent: "center",
        alignItems: "center",
        width: "50%",
        borderRadius: 98,
    },
    loginButtonText: {
        color: colors.white,
        fontSize: 18,
        fontWeight: "600",
    },
    signupButtonText: {
        fontSize: 18,
        fontWeight: "600",   
    },
});