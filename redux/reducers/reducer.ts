import { REGISTER, REMOVE_LOT, SET_LOT } from "../../constants/Constants";

const initialState = {
  lot: [],
};

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_LOT:
      const val = [...state.lot, action.data];
      return { ...state, lot: val };
      break;

    case REMOVE_LOT:
      return { ...state, lot: action.data };

    case REGISTER:
      return { ...state, lot: action.data };

    default:
      return state;
      break;
  }
};

export default reducer;
