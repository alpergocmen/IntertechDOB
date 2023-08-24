import React, { useMemo } from "react";
import { Image } from "expo-image";
import { StyleSheet, ImageSourcePropType } from "react-native";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const StatusBarDark = ({
  statusBarDarkStatusBarDar,
  statusBarDarkPosition,
  statusBarDarkTop,
  statusBarDarkLeft,
}) => {
  const statusBarDarkStyle = useMemo(() => {
    return {
      ...getStyleValue("position", statusBarDarkPosition),
      ...getStyleValue("top", statusBarDarkTop),
      ...getStyleValue("left", statusBarDarkLeft),
    };
  }, [statusBarDarkPosition, statusBarDarkTop, statusBarDarkLeft]);

  return (
    <Image
      style={[styles.statusBarDark, statusBarDarkStyle]}
      contentFit="cover"
      source={statusBarDarkStatusBarDar}
    />
  );
};

const styles = StyleSheet.create({
  statusBarDark: {
    width: 375,
    height: 44,
  },
});

export default StatusBarDark;
