import actionType from "./actionType";
import * as apis from "../../api";
import * as actions from "../action";
export const getHome = () => async (dispatch) => {
  try {
    dispatch(actions.loading(true));
    const res = await apis.getHome();
    if (res?.data.err === 0) {
      dispatch(actions.loading(false));
      dispatch({
        type: actionType.GET_HOME,
        homeData: res.data.data.items,
      });
    } else {
      dispatch({
        type: actionType.GET_HOME,
        homeData: null,
      });
    }
  } catch (error) {
    dispatch({
      type: actionType.GET_HOME,
      homeData: null,
    });
  }
};
