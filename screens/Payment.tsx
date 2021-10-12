import React, { useEffect } from "react";
import { View, Text, FlatList } from "react-native";
import { connect } from "react-redux";
import Card from "../components/Card";
import { removeUser } from "../redux/actions/action";

type Props = {
  lots: any;
  removeUser: Function;
};

const Payment = ({ lots, removeUser }: Props) => {
  const handlePress = (key: any) => {
    removeUser(key, lots);
  };

  return (
    <View
      style={{
        flex: 1,
        padding: 10,
      }}
    >
      <FlatList
        data={lots}
        renderItem={(items) =>
          items.item.availability == false ? (
            <Card item={items.item} handle={handlePress} />
          ) : null
        }
        keyExtractor={(item) => item.key}
        ListEmptyComponent={
          <Text style={{ textAlign: "center" }}>No Registrations</Text>
        }
      />
    </View>
  );
};

const mapStateToProps = (state: any) => ({ lots: state.reducer.lot });

export default connect(mapStateToProps, { removeUser })(Payment);
