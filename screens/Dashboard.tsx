import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { Button } from "react-native-paper";
import { connect } from "react-redux";
import Styles from "../styles/Styles";

type Props = {
  lots: any;
  navigation: {
    navigate: Function;
  };
};

const Dashboard = ({ lots, navigation }: Props) => {
  var count = 0;
  Object.keys(lots).map(function (key, lot) {
    if (lots[key].availability == true) {
      count = count + 1;
    }
  });

 
  console.log(count, "count");

  return (
    <View style={Styles.container}>
      <Text>{count}</Text>
      <Button
        mode="contained"
        onPress={() => {
          navigation.navigate("lots");
        }}
      >
        Create lots
      </Button>
      <Button
        mode="contained"
        onPress={() => {
          navigation.navigate("register");
        }}
      >
        Register Vehicle
      </Button>
      <Button
        mode="contained"
        onPress={() => {
          navigation.navigate("payment");
        }}
      >
        Complete Payment
      </Button>
    </View>
  );
};

const mapStateToProps = (state: any) => ({ lots: state.reducer.lot });

export default connect(mapStateToProps)(Dashboard);
