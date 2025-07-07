export const initialState = {
  user: null,
  playlists: [],
  //token:
  //"BQBrKHTv_zYJN_kboQ1OVMvvUZiLPR4VqYvGNzHd8Nz24gD8Z_LKvwo3pnoCJawnfQ_v67JcyB-ZFa6nUN6uIg1pRByCMwTagqlYeD2y7ntvCLXc4UOqtDtLezY1PoHA9brAG9DRG-7guW7WTTH3TOGjNfvroH9yxNvXdEn5FNvIllr6enl3lXSMoAjo7CYiAp9DVlRqOmmTs3FYhb9przat5fsDoiwW7UIqULwDP7WYodlJHZVP0C55NjK2",
  token : "AQAj9fsKFRTfA_9Yff3bYmRqpdyqkRqJOVIhjumx22pWjzibM8CmEpafjB9bOyKRWj51EOuP4j5KEHfzjT_V_fV88sOMpYotzhA_-TJ802tLQcU-Z6dxsOsEfMIkkdyMcP4kMk-nuOENz1-ajS-Rnp5A3kMdk19GYsDRyEGfxWLvHPA7CEVmSEBmJU7EddB1mcVEYxn21l9ywH4poMr_AhXWzDlpobDyBMgLGroswimc_slPYIiALkX9B3bUvFkWxYwD_xGqXxw6o2Ta7MlQiPQc-ahPdAW5IXJsBPxn78i5pOJSgbFHhao819zndr7sXjNyp99Qq1Iiz_5auVgw9smRCFaDNi4ULcSxn3FJdYF7vhdGKzu3FXDdcSo5fQA_NBooT3ujT5ZBrZGstOULtj4hAnnHHA",
  playing: false,
  //  token: null,
  albums: [],
  items: null,
  albumAndAlbumTracks: [],
  playlistTracks: [],
  selectedTrackId: null,
  selectedUserPlaylistID: null,
  selectedAlbumId: null,
  albumTracks: [],
  searchQuery: null,
  searchTracks: [],
  // albumTracks: [],
  // searchSongs: [],
};

export default function reducer(state = initialState, action) {
  switch (action?.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };

    case "SET_PLAYLISTES":
      return {
        ...state,
        playlists: action.playlists,
      };
    case "SET_ALBUMS":
      return {
        ...state,
        albums: action.albums,
      };
    // case "SET_SEARCH_SONG":
    //   return {
    //     ...state,
    //     searchSongs: action.searchSongs,
    //   };
    case "SET_TRACKS":
      return {
        ...state,
        albumAndAlbumTracks: action.albumAndAlbumTracks,
      };
    case "SET_SELECTEDTRACTID":
      return {
        ...state,
        selectedTrackId: action.selectedTrackId,
      };
    case "SET_SELECTEDUSERPLAYLISTID":
      return {
        ...state,
        selectedUserPlaylistID: action.selectedUserPlaylistID,
      };
    case "SET_PLAYLISTTRACKS":
      return {
        ...state,
        playlistTracks: action.playlistTracks,
      };
    case "SET_SELECTEDALBUMID":
      return {
        ...state,
        selectedAlbumId: action.selectedAlbumId,
      };
    case "SET_ALBUMTRACKS":
      return {
        ...state,
        albumTracks: action.albumTracks,
      };
    case "SET_SEARCHQUERY":
      return {
        ...state,
        searchQuery: action.searchQuery,
      };
    case "SET_SEARCHTRACKS":
      return {
        ...state,
        searchTracks: action.searchTracks,
      };
    default:
      return state;
  }
}
