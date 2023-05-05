import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import Ticket from '../../../components/ticket';


export default function TicketsScreen() {
  return (
    <ScrollView className="bg-white">
      <SafeAreaView className="m-6">
        <Ticket/>
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
