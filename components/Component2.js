import * as React from "react";
import { Text, StyleSheet, Pressable, View, TouchableOpacity } from "react-native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";
import { useNavigation } from "@react-navigation/native";


const Component2 = () => {
  const navigation = useNavigation();

  const navigateToAnotherPage = () => {
  
    navigation.navigate("AnotherScreen");
  };

  return (
    <View style={styles.component2}>
      <Text style={[styles.musteriol, styles.musteriolTypo]}>Müşteri Ol</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  musteriolTypo: {
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    color: Color.white,
    fontFamily: FontFamily.interMedium,
    fontWeight:"bold",
    lineHeight: 20,
    fontSize: FontSize.sizebase,
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  musteriol: {
    width: "100%",
    left: "38%",
  },
  component2: {
    top: 469,
    left: 105,
    width: 165,
    height: 18,
    position: "absolute",
  },
});

export default Component2;
