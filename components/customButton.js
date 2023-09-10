import React, { useMemo } from "react";
import { TouchableOpacity, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { Color, Border } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};

const CustomButton = ({
  imagePlaceholderText,
  propTop,
  propLeft,
  propTop1,
  propRight,
  propBottom,
  propLeft1,
  onPress,
}) => {
  const buttonStyle = useMemo(() => {
    return {
      ...getStyleValue("top", propTop),
      ...getStyleValue("left", propLeft),
    };
  }, [propTop, propLeft]);

  const imageStyle = useMemo(() => {
    return {
      ...getStyleValue("top", propTop1),
      ...getStyleValue("right", propRight),
      ...getStyleValue("bottom", propBottom),
      ...getStyleValue("left", propLeft1),
    };
  }, [propTop1, propRight, propBottom, propLeft1]);

  return (
    <TouchableOpacity
      style={[styles.button, buttonStyle]}
      activeOpacity={0.2}
      onPress={onPress}
    >
      <View style={styles.buttonBackground} />
      <Image
        style={[styles.buttonImage, imageStyle]}
        contentFit="cover"
        source={imagePlaceholderText}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: "33%",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "7.5%",
    marginLeft: "30%",
    marginRight: "30%",
    marginBottom: "15%",
    backgroundColor: Color.gray,
    borderRadius: Border.br_31xl,
  },
  buttonBackground: {
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: Border.br_3xs,
    backgroundColor: Color.gainsboro,
    position: "absolute",
  },
  buttonImage: {
    height: "31.56%",
    width: "61.5%",
    top: "34.22%",
    right: "19.5%",
    bottom: "34.22%",
    left: "19%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    position: "absolute",
  },
});

export default CustomButton;
