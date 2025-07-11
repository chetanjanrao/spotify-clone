//  import React, { useEffect } from "react";
//  import Login from "./Components/Login";
//  import HomePage from "./Components/HomePage";
//  import SpotifyWebApi from "spotify-web-api-js";
//  import { useDataLayerValue } from "./Components/DataLayer";
//  const spotify = new SpotifyWebApi();
//  import  {Spotify}  from "./assets/Spotify/Spotify";
//  import "./styles.css";
//  export default function App() {
//    const albumId = "5mS4yO0p42yLgXzK1b1K1D";
//    const [{ user, token }, dispatch] = useDataLayerValue();  
   
//      const handleLogin = async () => {
//     const loginUrl = await Spotify();
//     window.location.href = loginUrl;
//     console.log("Login URL:", loginUrl);
//     console.log("Spotify instance:", window.location.href);
//   };
  //  useEffect(() => {
    
  //    if (_token) {
  //      dispatch({
  //        type: "SET_TOKEN",
  //        token: _token,
  //      });
  //      spotify.setAccessToken(_token);
  //      spotify.getMe().then((user) => {
  //        dispatch({
  //          type: "SET_USER",
  //          user: user,
  //        });
  //      });
  //      spotify.getUserPlaylists().then((playlists) => {
  //        console.log("Playlists", playlists);
  //        dispatch({
  //          type: "SET_PLAYLISTES",
  //          playlists: playlists,
  //        });
  //      });
  //      spotify.getArtistAlbums("70B80Lwx2sxti0M1Ng9e8K", function (err, data) {
  //        if (err) {
  //          console.error(err);
  //        } else {
  //          console.log("Artist albums", data);
  //          dispatch({
  //            type: "SET_ALBUMS",
  //            albums: data,
  //          });
  //        }
  //      });
  //      spotify
  //        .getArtists(["2hazSY4Ef3aB9ATXW7F5w3", "6J6yx1t3nwIDyPXk5xa7O8"])
  //        .then(
  //          function (data) {
  //            console.log("Artists information", data);
  //          },
  //          function (err) {
  //            console.error(err);
  //          }
  //        );
  //      spotify
  //        .getAlbum("4rvCQOx2G4DYIq2dnTIN5U")
  //        .then(function (data) {
  //          dispatch({
  //            type: "SET_TRACKS",
  //            albumAndAlbumTracks: data,
  //          });
  //          return data?.tracks?.items?.map(function (t) {
  //            return t.id;
  //          });
  //        })
  //        .then(function (trackIds) {
  //          return spotify.getTracks(trackIds);
  //        })
  //        .then(function (tracksInfo) {
  //          console.log("trackinfo", tracksInfo);
  //        })
  //        .catch(function (error) {
  //          console.error(error);
  //        });     
  //      spotify
  //        .getArtistAlbums("43ZHCT0cAZBISjO8DG9PnE", { limit: 10 })
  //        .then(function (data) {
  //          return (
  //            data.length > 0 &&
  //            data.albums.map(function (a) {
  //              return a.id;
  //            })
  //          );
  //        })
  //        .then(function (albums) {
  //          return spotify.getAlbums(albums);
  //        })
  //        .then(function (data) {
  //          console.log(data);
  //        });     
  //      spotify.searchArtists("Love").then(
  //        function (data) {
  //          console.log('Search artists by "Love"', data);
  //        },
  //        function (err) {
  //          console.error(err);
  //        }
  //      );     
  //      spotify.searchTracks("artist:Love").then(
  //        function (data) {
  //          console.log('Search tracks by "Love" in the artist name', data);
  //        },
  //        function (err) {
  //          console.error(err);
  //        }
  //      );
  //      spotify
  //        .getAlbums(["2hazSY4Ef3aB9ATXW7F5w3", "6J6yx1t3nwIDyPXk5xa7O8"])
  //        .then((albums) => {
  //          console.log("albums", albums);
  //          dispatch({
  //            type: "SET_ALBUMS",
  //            albums: albums,
  //          });
  //        });
  //      console.log(user);
  //      console.log(token);
  //    }
  //  }, [token]);
 //  return <>{token ? <HomePage spotify={spotify} /> : <Login handleLogin={handleLogin}/>}</>;
 //}

import React from "react";
import Login from ".Components/Login";
import Callback from "./Components/Callback";

function App() {
  const path = window.location.pathname;

  if (path === "/callback") return <Callback />;
  return <Login />;
}

export default App;
