import styled from 'styled-components';
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';

const StatusBarHeight = Constants.statusBarHeight;

//colors
export const Colors = {
  primary: '#017cfe', //Aispeak Blue
  secondary: '#ffbb00', //Aispeak Yellow
  white: '#FFFFFF',
  black: '#000000',
  grey: '#D3D3D3',
  lightGrey: '#696969',
};

const { primary, secondary, white, black, grey, lightGrey } = Colors;

export const StyledContainer = styled.View`
  flex: 1;
  padding: 25px;
  padding-top: ${StatusBarHeight + 30}px;
  background-color: ${white};
`;

export const InnerContainer = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
`;

export const PageLogo = styled.Image`
  width: 250px;
  height: 200px;
`;

export const PageTitle = styled.Text`
  font-size: 30px;
  text-align: center;
  font-weight: bold;
  color: ${secondary};
  padding: 10px;

  ${(props) => props.welcome && `
    font-size: 35px;
  `}
`;

export const SubTitle = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: ${black};
  margin-bottom: 20px;
  letter-spacing: 1px;
  
  ${(props) => props.welcome && `
    margin-bottom: 5px;
    font-weight: normal;
  `}
`;

export const StyledFormArea = styled.View`
  width: 90%;
`;

export const StyledTextInput = styled.TextInput`
  background-color: ${grey};
  padding: 15px;
  padding-left: 55px;
  padding-right: 55px;
  border-radius: 5px;
  border-color: ${secondary};
  font-size: 16px;
  height: 60px;
  margin-verticle: 3px;
  margin-bottom: 10px;
  color: ${black};
`;

export const StyledInputLabel = styled.Text`
  color: ${primary};
  font-size: 13px;
  text-align: left;
`;

export const LeftIcon = styled.View`
  left: 15px;
  top: 34px;
  position: absolute;
  z-index: 1;
`;

export const RightIcon = styled.TouchableOpacity`
  right: 15px;
  top: 34px;
  position: absolute;
  z-index: 1;
`;

export const StyledButton = styled.TouchableOpacity`
  padding: 15px;
  background-color: ${primary};
  justify-content: center;
  border-radius: 5px;
  margin-vertical: 5px;
  height: 60px;
  align-items: center;
`;

export const ButtonText = styled.Text`
  color: ${secondary};
  font-size: 16px;
 `;

export const MsgBox = styled.Text`
  text-align: center;
  font-size: 13px;
`;

export const Line = styled.View`
  height: 1px;
  width: 100%;
  background-color: ${lightGrey};
  margin-vertical: 10px;
`;

export const ExtraView = styled.View`
  justify-content: center;
  flex-direction: row;
  align-items: center;
  padding: 10px;
`;

export const ExtraText = styled.Text`
  justify-content: center;
  align-items: center;
  color: ${primary};
  font-size: 15px;
`;

export const TextLink = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
`;

export const TextLinkContent = styled.Text`
  color: ${secondary};
  font-size: 15px;
`;

export const WelcomeContainer = styled(InnerContainer)`
  padding: 25px;
  padding-top: 10px;
  justify-content: center;
`;

export const Avatar = styled.Image`
  width: 100px;
  height: 100px;
  margin: auto;
  border-radius: 50px;
  border-width: 2px;
  border-color: ${secondary};
  margin-bottom: 10px;
  margin-top: 10px;
`;

export const WelcomeImage = styled.Image`
  height: 50%;
  min-width: 100%;
`;