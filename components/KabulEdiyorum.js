import React, { useState } from "react";
import { Text, StyleSheet, View } from "react-native";
import { CheckBox } from "@rneui/themed";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const KabulEdiyorum = () => {
  const [rectangleCheckboxchecked, setRectangleCheckboxchecked] =
    useState(false);

  return (
    <View style={styles.kabulEdiyorum}>
      <Text style={styles.kvkkAydnlanmaMetnini}>
        KVKK Aydınlanma metnini okudum ve kabul ediyorum.
      </Text>
      <CheckBox
        style={styles.kabulEdiyorumChild}
        checked={rectangleCheckboxchecked}
        onPress={() => setRectangleCheckboxchecked(!rectangleCheckboxchecked)}
        checkedColor="#fff"
        containerStyle={styles.rectangleCheckboxLayout}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  rectangleCheckboxLayout: {
    backgroundColor: "transparent",
    padding: 0,
    left: "0%",
    right: "92.34%",
    top: "9.76%",
    bottom: "41.46%",
    position: "absolute",
  },
  kvkkAydnlanmaMetnini: {
    height: "95.12%",
    width: "86.97%",
    top: "4.88%",
    left: "13.03%",
    fontSize: FontSize.size_base,
    lineHeight: 20,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    color: Color.white,
    textAlign: "center",
    position: "absolute",
  },
  kabulEdiyorumChild: {
    backgroundColor: Color.white,
    borderStyle: "solid",
    borderColor: "#0329ae",
    borderWidth: 3,
  },
  kabulEdiyorum: {
    top: 393,
    left: 71,
    width: 261,
    height: 41,
    position: "absolute",
  },
});

export default KabulEdiyorum;
