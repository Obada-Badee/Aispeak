import React from 'react';
import { StatusBar } from 'expo-status-bar';
import * as Animatable from 'react-native-animatable';

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
const Welcome = ({ navigation }) => {
    return (
        <>

            <StatusBar style="light" />

            <InnerContainer>

                <WelcomeContainer>
                    <PageTitle welcome={true}>Welcome to Aispeak!</PageTitle>
                    <SubTitle welcome={true}>John Doe</SubTitle>
                    <SubTitle welcome={true}>John.Doe@gmail.com</SubTitle>

                    <Animatable.Image
                        animation="bounceIn"
                        duraton={3000}
                        source={require('../assets/capybarabubble.png')}
                        style={{
                            width: 300,
                            height: 300,
                        }}
                    />
                    <StyledFormArea>
                        <Line />
                        <StyledButton onPress={() => {
                            navigation.navigate('Login');
                        }}>
                            <ButtonText>Logout</ButtonText>
                        </StyledButton>
                    </StyledFormArea>
                </WelcomeContainer>
            </InnerContainer>
        </>
    );
};

export default Welcome;
