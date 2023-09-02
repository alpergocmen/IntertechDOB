import * as React from "react";
import { Text, StyleSheet, Pressable, View } from "react-native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const Component2 = () => {
  return (
    <View style={styles.component2}>
      <Text style={[styles.halaOlmadysanImdi, styles.musteriolTypo]}>
        Hala olmadıysan şimdi 
      </Text>
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
    fontWeight: "500",
    lineHeight: 20,
    fontSize: FontSize.size_3xs,
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  halaOlmadysanImdi: {
    width: "66.67%",
    left: "0%",
  },
  musteriol: {
    width: "30.3%",
    left: "67.27%",
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
