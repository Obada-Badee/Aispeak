import React from 'react';
import { View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import * as Yup from 'yup';

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

const loginValidationSchema = Yup.object().shape({
  usernameOrEmail: Yup.string()
    .required('Username or Email is required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
});

const Login = ({ navigation, users }) => {
  const [hidePassword, setHidePassword] = useState(true);

  const handleLogin = (values) => { 
    const userExists = users.find(
      (user) =>
        (user.username === values.usernameOrEmail || user.email === values.usernameOrEmail) &&
        user.password === values.password
    );
  
    if (userExists) {
      console.log(userExists);
      navigation.navigate('Welcome', { username: userExists.username, email: userExists.email });
    } else {
      alert('Incorrect login credentials');
    }
  };

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
        <SubTitle>Account Login</SubTitle>
        <Formik
          initialValues={{ usernameOrEmail: '', password: '' }}
          onSubmit={(values) => {
            handleLogin(values);
          }}
          validationSchema={loginValidationSchema}
          >
          {({ handleChange, handleBlur, handleSubmit, values }) => (
            <StyledFormArea>
              <MyTextInput
                label="Username or Email"
                icon="mail"
                placeholder="example@gmail.com"
                placeholderTextColor={lightGrey}
                onChangeText={handleChange('usernameOrEmail')}
                onBlur={handleBlur('usernameOrEmail')}
                value={values.usernameOrEmail}
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
                <ButtonText>Login</ButtonText>
              </StyledButton>
              <Line />
              <ExtraView>
                <ExtraText>Don't have an account already? </ExtraText>
                <TextLink onPress={() => navigation.navigate('Register')}>
                  <TextLinkContent>Signup</TextLinkContent>
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

export default Login;
