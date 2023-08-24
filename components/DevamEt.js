import React, { useMemo } from "react";
import { Pressable, StyleSheet, View, Text } from "react-native";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const DevamEt = ({
  dEVAMET,
  propPosition,
  propHeight,
  propWidth,
  propTop,
  propRight,
  propBottom,
  propLeft,
  propBorderRadius,
  propBackgroundColor,
  propMarginTop,
  propMarginLeft,
  propTop1,
  propLeft1,
  propFontSize,
  propLineHeight,
  propFontWeight,
  propFontFamily,
  propColor,
  propTextAlign,
  propHeight1,
  propWidth1,
  propRight1,
  propBottom1,
  propBorderRadius1,
  propBackgroundColor1,
  onDevamEtPress,
}) => {
  const rectangleViewStyle = useMemo(() => {
    return {
      ...getStyleValue("position", propPosition),
      ...getStyleValue("height", propHeight),
      ...getStyleValue("width", propWidth),
      ...getStyleValue("top", propTop),
      ...getStyleValue("right", propRight),
      ...getStyleValue("bottom", propBottom),
      ...getStyleValue("left", propLeft),
      ...getStyleValue("borderRadius", propBorderRadius),
      ...getStyleValue("backgroundColor", propBackgroundColor),
    };
  }, [
    propPosition,
    propHeight,
    propWidth,
    propTop,
    propRight,
    propBottom,
    propLeft,
    propBorderRadius,
    propBackgroundColor,
  ]);

  const dEVAMETStyle = useMemo(() => {
    return {
      ...getStyleValue("marginTop", propMarginTop),
      ...getStyleValue("marginLeft", propMarginLeft),
      ...getStyleValue("top", propTop1),
      ...getStyleValue("left", propLeft1),
      ...getStyleValue("fontSize", propFontSize),
      ...getStyleValue("lineHeight", propLineHeight),
      ...getStyleValue("fontWeight", propFontWeight),
      ...getStyleValue("fontFamily", propFontFamily),
      ...getStyleValue("color", propColor),
      ...getStyleValue("textAlign", propTextAlign),
      ...getStyleValue("height", propHeight1),
      ...getStyleValue("width", propWidth1),
      ...getStyleValue("right", propRight1),
      ...getStyleValue("bottom", propBottom1),
      ...getStyleValue("borderRadius", propBorderRadius1),
      ...getStyleValue("backgroundColor", propBackgroundColor1),
    };
  }, [
    propMarginTop,
    propMarginLeft,
    propTop1,
    propLeft1,
    propFontSize,
    propLineHeight,
    propFontWeight,
    propFontFamily,
    propColor,
    propTextAlign,
    propHeight1,
    propWidth1,
    propRight1,
    propBottom1,
    propBorderRadius1,
    propBackgroundColor1,
  ]);

  return (
    <Pressable style={styles.devamEt} onPress={onDevamEtPress}>
      <View style={[styles.devamEtChild, rectangleViewStyle]} />
      <Text style={[styles.devamEt1, dEVAMETStyle]}>{dEVAMET}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  devamEtChild: {
    height: "87.72%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "12.28%",
    left: "0%",
    borderRadius: Border.br_31xl,
    backgroundColor: Color.gray,
    position: "absolute",
  },
  devamEt1: {
    marginTop: -13.5,
    marginLeft: -58,
    top: "50%",
    left: "50%",
    fontSize: FontSize.size_4xl,
    lineHeight: 20,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    color: Color.white,
    textAlign: "center",
    position: "absolute",
  },
  devamEt: {
    top: 631,
    left: 92,
    width: 190,
    height: 57,
    position: "absolute",
  },
});

export default DevamEt;
