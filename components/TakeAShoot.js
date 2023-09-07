import * as React from "react";
import { Pressable, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { Border, Color } from "../GlobalStyles";

const TakeAShoot = ({ onTakeAShootPress }) => {
  return (
    <Pressable style={styles.takeAShoot} onPress={onTakeAShootPress}>
      <View style={styles.takeAShootChild} />
      <Image
        style={styles.icons8Camera1001}
        contentFit="cover"
        source={require("../assets/icons8camera100-1.png")}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  takeAShootChild: {
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: Border.br_311xl,
    backgroundColor: Color.gainsboro,
    position: "absolute",
  },
  icons8Camera1001: {
    height: "85.71%",
    width: "60%",
    top: "7.14%",
    right: "20%",
    bottom: "7.14%",
    left: "20%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    position: "absolute",
  },
  takeAShoot: {
    top: "87.5%",
    left: 78,
    width: 80,
    height: 60,
    position: "absolute",
  },
});

export default TakeAShoot;
