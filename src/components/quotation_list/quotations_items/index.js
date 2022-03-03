

import { View, Text, Image } from "react-native";

//import bitCoin from '../../../assets/logo.jpg'

import styles from './style'

export default function QuotationItem(){

    return (
      <>
        <View style={styles.mainContent}>
          <View style={styles.contextLeft}>
            <View style={styles.boxLogo}>
              <Image style={styles.logBitCoin} source='' />
              <Text style={styles.dayQuotation}>03/03/2022</Text>
            </View>
          </View>
          <View style={styles.contextRight}>
            <Text style={styles.price}>$ 53251.150</Text>
          </View>
        </View>
      </>
    );
}