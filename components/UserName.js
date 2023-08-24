import React, { useMemo } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const UserName = ({ kullaniciAdi, propTop }) => {
  const userNameStyle = useMemo(() => {
    return {
      ...getStyleValue("top", propTop),
    };
  }, [propTop]);

  return (
    <View style={[styles.username, userNameStyle]}>
      <View
        style={[styles.kullaniciadirectangle, styles.kullaniciadiPosition]}
      />
      <Text style={[styles.kullaniciadi, styles.kullaniciadiPosition]}>
        {kullaniciAdi}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  kullaniciadiPosition: {
    left: "0%",
    top: "0%",
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  kullaniciadirectangle: {
    right: "0%",
    bottom: "0%",
    borderRadius: Border.br_3xs,
    backgroundColor: Color.white,
  },
  kullaniciadi: {
    fontSize: FontSize.size_mini,
    lineHeight: 20,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    color: Color.darkgray,
    textAlign: "left",
    display: "flex",
    alignItems: "center",
  },
  username: {
    top: 327,
    left: 65,
    width: 245,
    height: 30,
    position: "absolute",
  },
});

export default UserName;
