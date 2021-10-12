import React, { useState } from "react";
import { View, Text, ScrollView } from "react-native";
import { Button, TextInput } from "react-native-paper";
import { connect } from "react-redux";
import Styles from "../styles/Styles";
import { setLots } from "../redux/actions/action";

type Props = {
  lotss: any;
  setLots: Function;
  navigation: {
    navigate: Function;
  };
};

const Lots = ({ lotss, setLots, navigation }: Props) => {
  const [lot, setLot] = useState("");
  const handlePress = () => {
    setLots(lot, navigation);
    // console.log(lotss);
  };

  return (
    <ScrollView>
      <View style={Styles.box}>
        <View style={Styles.input}>
          <TextInput
            placeholder="Enter number of lots"
            mode="outlined"
            value={lot}
            onChangeText={(val) => {
              setLot(val);
            }}
            keyboardType="numeric"
          />
        </View>
        <View style={Styles.input}>
          <Button mode="contained" onPress={handlePress}>
            Create Slots
          </Button>
        </View>
      </View>
    </ScrollView>
  );
};

const mapStateToProps = (state: any) => ({ lotss: state.reducer.lot });

export default connect(mapStateToProps, { setLots })(Lots);
