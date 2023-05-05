import { TouchableHighlight, TouchableOpacity, View } from "react-native";
import Text from "./ui/text";
import { Image } from "expo-image";

export default function Ticket() {
  return (
    <View className="h-96 w-full shadow-black shadow-md">
      <View className="bg-white rounded-t-3xl h-4/5">
        <View className="p-5">
          <Text>JOJO Bar</Text>
          <Text className="text-sm text-gray-600">Tokyo</Text>
        </View>

        <Image source="https://en.resto.ru/data/msk/places/15984/4b1b.jpg" className="w-full h-28"/>

        <View className="p-5">
          <Text className="text-sm">July 12, 2023</Text>
          <Text className="text-sm">8:00 am</Text>
          <Text className="text-sm">body</Text>
        </View>
      </View>

      <View className="relative bg-white self-center h-10 w-11/12">
        <View
          className="w-12 h-12 absolute -top-1 rotate-45 rounded-full border-white border-b-transparent border-l-transparent"
          style={{ borderWidth: 10, left: -38 }}
        />
        <View
          className="w-12 h-12 absolute -top-1 rotate-45 rounded-full border-white border-t-transparent border-r-transparent"
          style={{ borderWidth: 10, right: -38 }}
        />
        <View className="absolute h-px w-full border border-dashed border-blue-600 top-1/2"/>
      </View>

      <View className="bg-white h-1/5 rounded-b-3xl p-5 flex items-center">
        <TouchableOpacity><Text>View Details</Text></TouchableOpacity>
      </View>
    </View>
  );
}
