import React, { useMemo } from "react";
import {
  Pressable,
  StyleSheet,
  View,
  TouchableOpacity,
  ImageSourcePropType,
} from "react-native";
import { Image } from "expo-image";
import { Border, Color } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const GoForward = ({
  imagePlaceholderText,
  propTop,
  propLeft,
  propTop1,
  propRight,
  propBottom,
  propLeft1,
  onGoForwardPress,
}) => {
  const goForwardStyle = useMemo(() => {
    return {
      ...getStyleValue("top", propTop),
      ...getStyleValue("left", propLeft),
    };
  }, [propTop, propLeft]);

  const arrowIconStyle = useMemo(() => {
    return {
      ...getStyleValue("top", propTop1),
      ...getStyleValue("right", propRight),
      ...getStyleValue("bottom", propBottom),
      ...getStyleValue("left", propLeft1),
    };
  }, [propTop1, propRight, propBottom, propLeft1]);

  return (
    <TouchableOpacity
      style={[styles.goForward, goForwardStyle]}
      activeOpacity={0.2}
      onPress={onGoForwardPress}
    >
      <View style={styles.goForwardChild} />
      <Image
        style={[styles.goForwardItem, arrowIconStyle]}
        contentFit="cover"
        source={imagePlaceholderText}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  goForwardChild: {
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
  goForwardItem: {
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
  goForward: {
    top: "10%",
    left: "20%",
    width: "20%",
    height: "7.5%",
    position: "absolute",
  },
});

export default GoForward;
