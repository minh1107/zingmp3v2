import actionType from "./actionType";
import * as apis  from "../../api";
export const getHome = () => async (dispatch) => {
  try {
    const res = await apis.getHome();
    if (res?.data.err === 0) {
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
