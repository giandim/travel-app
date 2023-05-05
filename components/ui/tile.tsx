import { Image } from "expo-image";
import { ImageBackground, View } from "react-native";
import Text from "./text";

export default function Tile() {
  return (
    <View className="w-1/2 h-80 shadow-2xl">
      <ImageBackground
        className="flex-1"
        imageStyle={{borderRadius: 10, opacity: .7}}
        source={{
          uri: "https://media.istockphoto.com/id/876560704/photo/fuji-japan-in-spring.jpg?s=2048x2048&w=is&k=20&c=GDyWq0cjkwyRc07Gf5MBUzJzlgKnDQLXRCPP3kKeLig=",
        }}
      >
        <View className="flex-1 justify-center items-center border-2 border-white m-2 rounded-xl">
          <Text className="text-white text-3xl">Hello</Text>
        </View>
      </ImageBackground>
    </View>
  );
}
