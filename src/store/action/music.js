import * as apis from "../../api";
import actionType from "./actionType";
export const setCurrentSongId = (songId) => ({
  type: actionType.SET_CUR_SONG_ID,
  songId,
});

export const playMusic = (flag) => ({
  type: actionType.PLAY_MUSIC,
  flag,
});

export const setDurationSong = (duration) => {
  return {
    type: actionType.SET_DURATION_SONG,
    duration,
  };
};

export const playAlbum = (flag) => ({
  type: actionType.SET_ALBUM,
  flag,
});

export const setPlaylist = (songs) => ({
  type: actionType.PLAY_LIST,
  songs,
});
export const setCurrentAudio = (audio) => ({
  type: actionType.CURRENT_AUDIO,
  audio,
});

// export const fetchDetailPlaylist = (pid) => async (dispatch) => {
//     try {
//         const res = await apis.apiGetDetailPlaylist(pid)
//         if(res?.data.err === 0) {
//             dispatch({
//                 type: actionType.PLAY_LIST,
//                 songs: res.data?.data?.song?.items
//             })
//         }
//     } catch (error) {
//         dispatch({
//             type: actionType.PLAY_LIST,
//             songs: null
//         })
//     }
// }
