import actionType from "../action/actionType";

const initState = {
  currentSongId: null,
  isPlaying: false,
  durationSong: null,
  atAlbum: false,
  songs: null,
  audio: new Audio(),
  currentSongData: null,
};

const musicReducer = (state = initState, action) => {
  switch (action.type) {
    case actionType.SET_CUR_SONG_ID:
      return {
        ...state,
        currentSongId: action.songId || null};
    case actionType.SET_DURATION_SONG:
      return {
        ...state,
        durationSong: action.duration,
      };
    case actionType.PLAY_MUSIC:
      return {
        ...state,
        isPlaying: action.flag,
      };
    case actionType.SET_ALBUM:
      return {
        ...state,
        atAlbum: action.flag,
      };
    case actionType.PLAY_LIST:
      return {
        ...state,
        songs: action.songs || null,
      };
    case actionType.CURRENT_AUDIO:
      return {
        ...state,
        audio: action.audio,
      };
    case actionType.SET_CUR_SONG_DATA:
      return {
        ...state,
        currentSongData: action.data || null,
      };
    default:
      return state;
  }
};

export default musicReducer;
