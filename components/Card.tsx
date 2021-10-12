import React from "react";
import { View, Text } from "react-native";
import moment from "moment";
import Styles from "../styles/Styles";
import { Button } from "react-native-paper";

type Props = {
  item: any;
  handle: Function;
};

const Card = ({ item, handle }: Props) => {
  var num = moment()?.diff?.(item.created_on, "minutes");
  var hours = Math.floor(num / 60);
  var minutes = num % 60;

  const handlePress = () => {
    handle(item.key);
    // console.log("click");
  };

  let amount = 0;

  if (hours < 2) {
    amount = 10;
  } else if (hours >= 2) {
    console.log(hours);
    amount = hours * 10;
  }

  return (
    <View style={Styles.card}>
      <View>
        <Text>
          <Text style={Styles.bold}>Registration Number: </Text>
          <Text>{item.registration}</Text>
        </Text>
      </View>
      <View>
        <Text>
          <Text style={Styles.bold}>created on: </Text>
          <Text>{item.created_on?.format?.("DD MMM YYYY, h:mm:ss a")}</Text>
        </Text>
      </View>
      <View>
        <Text>
          <Text style={Styles.bold}>Time: </Text>
          <Text>
            {hours} hour : {minutes} minutes
          </Text>
          <Text>
            Total: {moment()?.diff?.(item.created_on, "minutes")} minutes
          </Text>
        </Text>
      </View>
      <View>
        <Text>
          <Text style={Styles.bold}>Amount: </Text>
          <Text>${amount}</Text>
        </Text>
      </View>
      <View style={{ alignItems: "flex-end" }}>
        <Button mode="contained" onPress={handlePress}>
          Exit
        </Button>
      </View>
    </View>
  );
};

export default Card;
