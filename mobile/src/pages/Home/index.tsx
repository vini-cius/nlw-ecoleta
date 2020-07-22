import React, { useState } from "react";
import { Feather as Icon } from "@expo/vector-icons";
import {
  View,
  Image,
  Text,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import {
  Container,
  Main,
  Title,
  Description,
  InputText,
  Button,
  ButtonIcon,
  ButtonText,
  SwitchButton,
  SwitchText,
  SwitchContainer,
} from "./styles";

const Home: React.FC = ({}) => {
  const [uf, setUf] = useState("");
  const [city, setCity] = useState("");

  const navigation = useNavigation();

  function handleNavigationToPoints() {
    navigation.navigate("Points", { uf, city });
  }

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <Container
        source={require("../../assets/home-background.png")}
        imageStyle={{ width: 274, height: 368 }}
      >
        <SwitchContainer>
          <SwitchText>Dark Mode</SwitchText>
          <SwitchButton
            trackColor={{ false: "#ccc", true: "#FFF" }}
            thumbColor={theme == "dark" ? "#34cb79" : "#000"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleTheme}
          />
        </SwitchContainer>

        <Main>
          <Image source={require("../../assets/logo.png")} />
          <View>
            <Title>Seu marketplace de coleta de resíduos</Title>
            <Description>
              Ajudamos pessoas a encontrarem pontos de coleta de forma
              eficiente.
            </Description>
          </View>
        </Main>

        <View>
          <InputText
            placeholder="Digite a UF"
            maxLength={2}
            autoCapitalize="characters"
            autoCorrect={false}
            value={uf}
            onChangeText={setUf}
          />
          <InputText
            placeholder="Digite a cidade"
            autoCorrect={false}
            value={city}
            onChangeText={setCity}
          />

          <Button onPress={handleNavigationToPoints}>
            <ButtonIcon>
              <Text>
                <Icon name="arrow-right" color="#fff" size={24} />
              </Text>
            </ButtonIcon>
            <ButtonText>Entrar</ButtonText>
          </Button>
        </View>
      </Container>
    </KeyboardAvoidingView>
  );
};

export default Home;
