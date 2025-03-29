import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image } from 'react-native'
import React, { useState } from 'react'
import Ionicons from "react-native-vector-icons/Ionicons";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import { colors } from '../utils/colors';
import { useNavigation } from '@react-navigation/native';


const SignupScreen = () => {
    const navigation = useNavigation();
    const [secureEntery, setSecureEntery] = useState(true);

    const handleGoBack = () => {
        navigation.goBack();
    };
    const handleLogin = () => {
        navigation.navigate("LOGIN");
    }
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.backButtonWrapper}
                onPress={handleGoBack}
            >
                <Ionicons
                    name={"arrow-back-outline"}
                    color={colors.primary}
                    size={30}
                />
            </TouchableOpacity>
            <View style={styles.textContainer}>
                <Text style={styles.headingText}>Hey,</Text>
                <Text style={styles.headingText}>user</Text>
                <Text style={styles.headingText}>let's get</Text>
                <Text style={styles.headingText}>started</Text>
            </View>
            {/* form */}
            <View style={styles.formContainer}>
                <View style={styles.inputContainer}>
                    <Ionicons name={"mail-outline"} size={25} color={colors.secondary} />
                    <TextInput style={styles.textInput}
                        placeholder='Hey user enter your email'
                        placeholderTextColor={colors.secondary}
                        keyboardType='email-address'
                    />
                </View>
                <View style={styles.inputContainer}>
                    <SimpleLineIcons name={"screen-smartphone"} size={25} color={colors.secondary} />
                    <TextInput style={styles.textInput}
                        placeholder='Enter your phone no.'
                        placeholderTextColor={colors.secondary}
                        keyboardType="phone-pad"
                    />    
                </View>
                <View style={styles.inputContainer}>
                    <SimpleLineIcons name={"lock"} size={25} color={colors.secondary} />
                    <TextInput style={styles.textInput}
                        placeholder='Enter your password'
                        placeholderTextColor={colors.secondary}
                        secureTextEntry={secureEntery}
                    />
                    <TouchableOpacity onPress={() => {
                        setSecureEntery((prev) => !prev)
                    }}>
                        <SimpleLineIcons name={"eye"} size={20} color={colors.secondary} />
                    </TouchableOpacity>
                </View>
                

                <TouchableOpacity style={styles.loginButtonWrapper}
                >
                    <Text style={styles.loginText}>Sign-up</Text>
                </TouchableOpacity>
                <Text style={styles.continueText}>or continue with</Text>
                <TouchableOpacity style={styles.googleButtonContainer}
                >
                    <Image
                        source={require("../assets/google.png")}
                        style={styles.googleImage}
                    />
                    <Text style={styles.googleText}>Google</Text>
                </TouchableOpacity>
                <View style={styles.footerContainer}>
                    <Text style={styles.accountText}>Already have an account!</Text>
                    <TouchableOpacity onPress={handleLogin}>
                    <Text style={styles.signupText}>Login</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default SignupScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
        padding: 20,
    },
    backButtonWrapper: {
        height: 50,
        width: 50,
        backgroundColor: colors.gray,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
    },
    textContainer: {
        marginVertical: 20,
    },
    headingText: {
        fontSize: 30,
        fontWeight: '600',
        color: colors.primary,
        padding: 3,
    },
    formContainer: {
        marginTop: 10,
    },
    inputContainer: {
        borderWidth: 1,
        padding: 17,
        borderColor: colors.secondary,
        borderRadius: 100,
        paddingHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 15,
    },
    textInput: {
        flex: 1,
        paddingHorizontal: 20,
    },
    forgetPasswordText: {
        textAlign: 'right',
        color: colors.primary,
        fontWeight: '600',
        marginVertical: 10,
    },
    loginButtonWrapper: {
        backgroundColor: colors.primary,
        borderRadius: 100,
        marginVertical: 10,
    },
    loginText: {
        color: colors.white,
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        padding: 20,
    },
    continueText: {
        textAlign: 'center',
        color: colors.primary,
        marginVertical: 10,
        fontSize: 17,
        fontWeight: '400',
    },
    googleButtonContainer: {
        flexDirection: "row",
        borderWidth: 2,
        borderColor: colors.primary,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 12,
        gap: 10,
       marginVertical: 5,
    },
    googleImage: {
        height: 25,
        width: 25,
    },
    googleText: {
        color: colors.primary,
        fontSize: 25,
        fontWeight: 'bold',
    },
    footerContainer: {
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: 'center',
        marginVertical: 20,
        gap: 6,
    },
    accountText: {
        color: colors.primary,
        fontWeight: '400',
    },
    signupText: {
        color: colors.primary,
        fontWeight: 'bold',
    }
});