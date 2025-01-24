import React from 'react';
import { StatusBar } from 'expo-status-bar';
import * as Animatable from 'react-native-animatable';
import { CommonActions } from '@react-navigation/native';

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

const Welcome = ({ route, navigation }) => {
    const { username, email } = route.params;
    const handleLogout = () => {
        navigation.dispatch(
            CommonActions.reset({
                index: 0,
                routes: [{ name: 'Login' }],
            }));
    };
    return (
        <>

            <StatusBar style="light" />

            <InnerContainer>

                <WelcomeContainer>
                    <PageTitle welcome={true}>Welcome to Aispeak!</PageTitle>
                    <SubTitle welcome={true}>{username}</SubTitle>
                    <SubTitle welcome={true}>{email}</SubTitle>

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
                        <StyledButton onPress={handleLogout}>
                            <ButtonText>Logout</ButtonText>
                        </StyledButton>
                    </StyledFormArea>
                </WelcomeContainer>
            </InnerContainer>
        </>
    );
};

export default Welcome;
