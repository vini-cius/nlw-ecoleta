import styled from "styled-components/native";
import { RectButton } from "react-native-gesture-handler";

export const Container = styled.ImageBackground`
  flex: 1;
  padding: 32px;
  background-color: #f0f0f5;
`;

export const Main = styled.View`
  flex: 1;
  justify-content: center;
`;

export const Title = styled.Text`
  color: #322153;
  font-size: 32px;
  font-family: "Ubuntu_700Bold";
  max-width: 260px;
  margin-top: 64px;
`;

export const Description = styled.Text`
  color: #6c6c80;
  font-size: 16px;
  margin-top: 16px;
  font-family: "Roboto_400Regular";
  max-width: 260px;
  line-height: 24px;
`;

export const InputText = styled.TextInput`
  height: 60px;
  background-color: #fff;
  border-radius: 10px;
  margin-bottom: 8px;
  padding: 0 24px 0 24px;
  font-size: 16px;
`;

export const Button = styled(RectButton)`
  background-color: #34cb79;
  height: 60px;
  flex-direction: row;
  border-radius: 10px;
  overflow: hidden;
  align-items: center;
  margin-top: 8px;
`;

export const ButtonIcon = styled.View`
  height: 60px;
  width: 60px;
  background-color: rgba(0, 0, 0, 0.1);
  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  flex: 1;
  justify-content: center;
  text-align: center;
  color: #fff;
  font-family: "Roboto_500Medium";
  font-size: 16px;
`;

export const SwitchContainer = styled.View`
  margin-top: 10px;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;

export const SwitchText = styled.Text`
  font-weight: bold;
  color: #322153;
  margin-right: 6px;
`;

export const SwitchButton = styled.Switch`
  transform: scale(1.2, 1.2);
`;
