import * as React from "react";
import { Pressable, StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const Component3 = ({ buttonText, onComponent3Press, onGoForwardPress }) => {
  return (
    <Pressable style={[styles.component3, { backgroundColor: "rgba(255, 255, 255, 0.5)" }]} onPress={onComponent3Press}>
      <Pressable style={[styles.forwardPosition, { backgroundColor: "rgba(255, 255, 255, 0.5)" }]} onPress={onGoForwardPress}>

        <View style={[styles.goForwardChild, styles.forwardPosition]} />
        <Image
          style={styles.goForwardItem}
          contentFit="cover"
          source={require("../assets/arrow-21.png")}
        />
      </Pressable>
      <Text style={styles.grmeyiBalat}>{buttonText}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  forwardPosition: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  goForwardChild: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.gainsboro,
  },
  goForwardItem: {
    width: "60%",
    top: "50%",
    right: "21%",
    left: "19%",
    maxWidth: "100%",
    overflow: "hidden",
    height: 0,
    display: "none",
    position: "absolute",
  },
  grmeyiBalat: {
    height: "68.57%",
    width: "82.53%",
    top: "35.71%",
    left: "8.73%",
    fontSize: FontSize.size_lg,
    lineHeight: 20,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    color: Color.black,
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
  },
  component3: {
    top: 695,
    left: 73,
    width: 229,
    height: 70,
    position: "absolute",
  },
});

export default Component3;
