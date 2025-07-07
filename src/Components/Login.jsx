import React from "react";
import SpotifyLogo from "../assets/SpotifyLogo.png";
// import { getSpotifyAuthUrl } from "../assets/Spotify/SpotifyAuth";
import { loginUrl } from "../assets/Spotify/Spotify";


export default function Login() {
  console.log("Login component rendered", loginUrl);
  return (
    <div className="h-full w-full bg-black flex justify-center flex-col items-center pb-3 space-y-5">
      <img src={SpotifyLogo} alt="spotify-logo" />
      
      <a
        href={loginUrl}
        className="bg-green-600 pl-10 pr-10 pt-3 pb-3 rounded-4xl text-white font-bold hover:cursor-pointer"
      >
        Open Spotify
      </a>
    </div>
  );
}
