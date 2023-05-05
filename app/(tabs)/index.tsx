import { ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CurrencyConversion from '../../components/currency-conversion';
import Text from '../../components/ui/text';

export default function HomeScreen() {
  return (
    <ScrollView className="bg-white">
      <SafeAreaView>
        <Text type='header'>Welcome</Text>
        <CurrencyConversion />
      </SafeAreaView>
    </ScrollView>
  );
}
