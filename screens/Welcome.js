import React from 'react';
import { View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

//formik
import { Formik, Field, Form } from 'formik';

//icons
import { Octicons, Ionicons } from '@expo/vector-icons';

import {
    InnerContainer,
    PageLogo,
    PageTitle,
    SubTitle,
    StyledFormArea,
    StyledButton,
    ButtonText,
    Line,
    WelcomeContainer,
} from '../components/styles';
const Welcome = () => {
    return (
        
        <>
            <StatusBar style="light" />
            
            <InnerContainer>
               
                <WelcomeContainer>
                    <PageTitle welcome={true}>Welcome to Aispeak!</PageTitle>
                    <SubTitle welcome={true}>John Doe</SubTitle>
                    <SubTitle welcome={true}>John.Doe@gmail.com</SubTitle>
                    <PageLogo
                        resizeMode="cover"
                        source={require('../assets/capybarabubble.png')}
                    />
                    <StyledFormArea>
                        <Line />
                        <StyledButton onPress={() => { }}>
                            <ButtonText>Logout</ButtonText>
                        </StyledButton>
                    </StyledFormArea>
                </WelcomeContainer>
            </InnerContainer>
        </>
    );
};

export default Welcome;
