
import { StyleSheet, StatusBar, Text, View, SafeAreaView, Platform } from 'react-native';

import CurrentPrice from './src/components/current_price';
import HistoryGraphic from './src/components/history_graphic';
import QuotationList from './src/components/quotation_list';
import QuotationItem from './src/components/quotation_list/quotations_items';



export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <CurrentPrice />
      <HistoryGraphic />
      <QuotationList />
      <QuotationItem />
      
      <StatusBar
      backgroundColor='#f50f41'
      barStyle='dark-content'
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    paddingTop: Platform.OS === 'android' ? 40 : 0,
  },
});
