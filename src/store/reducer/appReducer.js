import actionType from "../action/actionType";

const initState = {
  banner: [],
  playlist: {},
};

const appReducer = (state = initState, action) => {
  switch (action.type) {
    case actionType.GET_HOME:
      return {
        ...state,
        banner: action.homeData?.find(item => item.sectionType === 'banner') || null,
        playlist: action.homeData?.find(item => item.sectionType === 'playlist') || {}
      };

    default:
      return state;
  }
};

export default appReducer;
