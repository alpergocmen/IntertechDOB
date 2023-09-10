import React, { useState } from "react";
import { Pressable, StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { animated, useSpring } from '@react-spring/native'
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const Component3 = ({ buttonText, onComponent3Press, onGoForwardPress }) => {
  const [pressed, setPressed] = useState(false);

  const handlePress = () => {
    setPressed(true);
    // You can add more logic here if needed.
    onComponent3Press();
  };

  return (
    <Spring
      to={{
        scale: pressed ? 0.9 : 1, // Scale down when pressed, scale back to 1 when not pressed
      }}
    >
      {(style) => (
        <Pressable
          style={[styles.component3, { transform: [{ scale: style.scale }] }]}
          onPress={handlePress}
        >
          <Pressable style={styles.forwardPosition} onPress={onGoForwardPress}>
            <View style={[styles.goForwardChild, styles.forwardPosition]} />
            <Image
              style={styles.goForwardItem}
              contentFit="cover"
              source={require("../assets/arrow-21.png")}
            />
          </Pressable>
          <Text style={styles.grmeyiBalat}>{buttonText}</Text>
        </Pressable>
      )}
    </Spring>
  );
};

const styles = StyleSheet.create({
  component3: {
    top: 695,
    left: 73,
    width: 229,
    height: 70,
    position: "absolute",
  },
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
});

export default Component3;
