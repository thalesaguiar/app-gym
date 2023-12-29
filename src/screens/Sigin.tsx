import { Stack, Text, Image, YStack, Heading, Header } from "tamagui";
import BackgroundImg from "@assets/background.png";
import LogoImg from "@assets/logo.svg";
import { Input } from "@components/Input";

export function SigIn() {
  return (
    <YStack flex={1} backgroundColor={"#121214"}>
      <Image
        source={BackgroundImg}
        alt="Pessoas treinando"
        resizeMode="contain"
        position="absolute"
      />
      <YStack margin={100} justifyContent="center" alignItems="center">
        <LogoImg />
        <Text fontFamily="Roboto" color={"white"}>
          Treine Sua mente e seu corpo!
        </Text>
      </YStack>
      <Text
        fontSize={28}
        marginBottom={20}
        textAlign="center"
        fontFamily="Roboto"
      >
        Acesse sua conta
      </Text>
      <Input />
      <Input />
    </YStack>
  );
}
