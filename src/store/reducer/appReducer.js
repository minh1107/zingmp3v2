import actionType from "../action/actionType";

const initState = {
  banner: [],
  playlist: {},
  newRelease: {},
  isLoading: false, 
  weekChart: {},
  favoriteArtist: {},

};

const appReducer = (state = initState, action) => {
  switch (action.type) {
    case actionType.GET_HOME:
      return {
        ...state,
        banner: action.homeData?.find(item => item.sectionType === 'banner') || null,
        playlist: action.homeData?.find(item => item.sectionType === 'playlist') || {},
        newRelease: action.homeData?.find(item => item.sectionType === 'new-release') || {},
        artistTheme: action.homeData?.find(item => item.sectionId === 'hArtistTheme') || {},
        top100: action.homeData?.find(item => item.sectionId === 'h100') || {},
        recentPlaylist: action.homeData?.find(item => item.sectionId === 'hRecent') || {},
        hLiveRadio: action.homeData?.find(item => item.sectionId === 'hLiveRadio') || {},
        hXone: action.homeData?.find(item => item.sectionId === 'hXone') || {},
        newMusicEveryDay: action.homeData?.find(item => item.sectionId === "hAutoTheme2") || {},
        newMusic: action.homeData?.find(item => item.sectionId === "hNewrelease") || {},
        weekChart: action.homeData?.find(item => item.sectionType === "weekChart") || {},
        favoriteArtist: action.homeData?.find(item => item.sectionType === "artistSpotlight") || {},
        zingChart: action.homeData?.find(item => item.sectionId === "hZC").chart || {},
        zingRank: action.homeData?.find(item => item.sectionId === "hZC").items || {},

      };
    case actionType.LOADING:
      return {
        ...state, isLoading: action.flag
      }
    default:
      return state;
  }
};

export default appReducer;
