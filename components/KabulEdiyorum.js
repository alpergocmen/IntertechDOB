import React, { useState } from "react";
import { Text, StyleSheet, View, SafeAreaView } from "react-native";
import { CheckBox } from "@rneui/themed";
import { FontSize, FontFamily, Color } from "../GlobalStyles";
import KvkkInfoBox from "../components/KvkkInfoBox";
const KabulEdiyorum = () => {
  const [rectangleCheckboxchecked, setRectangleCheckboxchecked] =
    useState(false);

  return (
    <SafeAreaView style={styles.safearea}>
      <KvkkInfoBox/>
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
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safearea: {
    flex: 1,
  },
  rectangleCheckboxLayout: {
    backgroundColor: "transparent",
    padding: 0,
    alignItems: "center",
    marginRight: "85%",
    marginTop: "2.5%"
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
    top: "75%",
    left: 71,
    width: 261,
    height: 41,
    position: "absolute",
  },
});

export default KabulEdiyorum;