import React, { useState } from "react";
import { View, Text, ScrollView } from "react-native";
import { Button, TextInput } from "react-native-paper";
import { connect } from "react-redux";
import Styles from "../styles/Styles";
import { setRegistration } from "../redux/actions/action";

type Props = {
  lots: any;
  setRegistration: Function;
  navigation: {
    navigate: Function;
  };
};

const Register = ({ lots, setRegistration, navigation }: Props) => {
  const [reg, setReg] = useState("");
  const [count, setCount] = useState(0);

  const handlePress = () => {
    setRegistration(reg, lots, navigation);
    // console.log(lots);
  };

  return (
    <ScrollView>
      <View style={Styles.box}>
        <View style={Styles.input}>
          <TextInput
            mode="outlined"
            value={reg}
            onChangeText={(val) => {
              setReg(val);
            }}
          />
        </View>
        <View style={Styles.input}>
          <Button mode="contained" onPress={handlePress}>
            Register
          </Button>
        </View>
      </View>
    </ScrollView>
  );
};

const mapStateToProps = (state: any) => ({ lots: state.reducer.lot });

export default connect(mapStateToProps, { setRegistration })(Register);
