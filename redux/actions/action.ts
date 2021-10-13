import { Dispatch } from "redux";
import moment from "moment";
import { ToastAndroid } from "react-native";
import { REGISTER, REMOVE_LOT, SET_LOT } from "../../constants/Constants";

const setLots = (inp: string, navigation: any) => (dispatch: Dispatch) => {
  if (inp) {
    for (let index = 0; index < parseInt(inp); index++) {
      const lot = {
        key: (Math.random() * 1000000).toString(),
        availability: true,
        created_on: "",
        registration: "",
      };
      dispatch({
        type: SET_LOT,
        data: lot,
      });
    }
    navigation.pop();
    //ToastAndroid.show(`${inp} Lot created`, ToastAndroid.SHORT);
  }
};

const setRegistration =
  (inp: string, lot: any, navigation: any) => (dispatch: Dispatch) => {
    // console.log(inp);
    if (inp) {
      for (let index = 0; index < lot.length; index++) {
        if (lot[index].availability == true) {
          lot[index].created_on = moment();
          lot[index].registration = inp;
          lot[index].availability = false;
          break;
        }
      }

      console.log(lot);
      dispatch({
        type: REGISTER,
        data: lot,
      });
      //ToastAndroid.show(`'${inp}' Rigistered`, ToastAndroid.SHORT);
      navigation.pop();
    }
  };

const removeUser = (key: number, lot: any) => (dispatch: Dispatch) => {
  const a: Array<any> = lot.map((item: any) => {
    if (item.key == key) {
      item.availability = true;
      item.created_on = "";
      item.registration = "";
    }
    return item;
  });
  dispatch({
    type: REMOVE_LOT,
    data: a,
  });
  // console.log(JSON.stringify(a, null, 10));
  console.log("::::::::::::::::::::::::::::::::::::::");
};

export { setLots, setRegistration, removeUser };
