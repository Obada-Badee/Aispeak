import React from 'react';
import { View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

//formik
import { Formik, Field, Form } from 'formik';

//icons
import { Octicons, Ionicons } from '@expo/vector-icons';

import {
    Colors,
    StyledContainer,
    InnerContainer,
    PageLogo,
    PageTitle,
    SubTitle,
    StyledFormArea,
    LeftIcon,
    StyledInputLabel,
    StyledTextInput,
    RightIcon,
    StyledButton,
    ButtonText,
    MsgBox,
    Line,
    TextLink,
    TextLinkContent,
    ExtraView,
    ExtraText,
} from '../components/styles';
import { useState } from 'react';

import KeyboardAvoidingWrapper from '../components/KeyboardAvoidingWrapper';

const { black, white, primary, secondary, lightGrey } = Colors;

const Registration = ({ navigation }) => {
    const [hidePassword, setHidePassword] = useState(true);
    return (
        <KeyboardAvoidingWrapper>
        <StyledContainer>
            <StatusBar style="dark" />
            <InnerContainer>
                <PageLogo
                    resizeMode="cover"
                    source={require('../assets/capybara.png')}
                />
                <PageTitle>Aispeak</PageTitle>
                <SubTitle>Account Registration</SubTitle>
                <Formik
                    initialValues={{ username: '', email: '', passowrd: '' }}
                    onSubmit={(values) => {
                        console.log(values);
                        navigation.navigate('Welcome');
                    }}>
                    {({ handleChange, handleBlur, handleSubmit, values }) => (
                        <StyledFormArea>
                            <MyTextInput
                                label="Username"
                                icon="person"
                                placeholder="John Doe"
                                placeholderTextColor={lightGrey}
                                onChangeText={handleChange('username')}
                                onBlur={handleBlur('username')}
                                value={values.username}
                            />

                            <MyTextInput
                                label="Email"
                                icon="mail"
                                placeholder="example@gmail.com"
                                placeholderTextColor={lightGrey}
                                onChangeText={handleChange('email')}
                                onBlur={handleBlur('email')}
                                value={values.email}
                                keyboardType="email-address"
                            />

                            <MyTextInput
                                label="Passoword"
                                icon="lock"
                                placeholder="* * * * * * * * *"
                                placeholderTextColor={lightGrey}
                                onChangeText={handleChange('password')}
                                onBlur={handleBlur('password')}
                                value={values.password}
                                secureTextEntry={hidePassword}
                                isPassword={true}
                                hidePassword={hidePassword}
                                setHidePassword={setHidePassword}
                            />
                            <MsgBox>...</MsgBox>
                            <StyledButton onPress={handleSubmit}>
                                <ButtonText>Signup</ButtonText>
                            </StyledButton>
                            <Line />
                            <ExtraView>
                                <ExtraText>Already have an account? </ExtraText>
                                < TextLink onPress={() => navigation.navigate('Login')}>
                                    <TextLinkContent>Login</TextLinkContent>
                                </TextLink>
                            </ExtraView>
                        </StyledFormArea>
                    )}
                </Formik>
            </InnerContainer>
        </StyledContainer>
        </KeyboardAvoidingWrapper>
    );
};

const MyTextInput = ({ label, icon, isPassword, hidePassword, setHidePassword, ...props }) => {
    return (
        <View>
            <LeftIcon>
                <Octicons name={icon} size={30} color={primary} />
            </LeftIcon>
            <StyledInputLabel>{label}</StyledInputLabel>
            <StyledTextInput {...props} />
            {isPassword && (
                <RightIcon onPress={() => setHidePassword(!hidePassword)}>
                    <Ionicons name={hidePassword ? 'eye-off-outline' : 'eye-outline'} size={30} color={primary} />
                </RightIcon>
            )

            }
        </View>
    );
};


export default Registration;