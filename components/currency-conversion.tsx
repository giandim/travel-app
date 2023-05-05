import { View } from "react-native";
import { useState } from "react";
import Input from "./ui/input";

const yenConversion = 98.69;

export default function CurrencyConversion() {
  const [cad, setCad] = useState<string>("");
  const [yen, setYen] = useState<string>("");

  function handleCurrencyConversion(amount: string, currency: "cad" | "yen") {
    if (currency == "cad") {
      setCad(amount);
      setYen((+amount * yenConversion).toFixed(2));
    } else {
      setYen(amount);
      setCad((+amount / yenConversion).toFixed(2));
    }
  }

  return (
    <View className="bg-white-400 p-5 flex">
      <Input
        keyboardType="numeric"
        returnKeyType={"done"}
        value={yen}
        label="JPY"
        icon="yen"
        placeholder="Japanese Yen"
        onChangeText={(value) => handleCurrencyConversion(value, "yen")}
      />
      <Input
        keyboardType="numeric"
        returnKeyType={"done"}
        value={cad}
        label="CAD"
        icon="dollar"
        placeholder="Canadian Dollars"
        onChangeText={(value) => handleCurrencyConversion(value, "cad")}
      />
    </View>
  );
}
