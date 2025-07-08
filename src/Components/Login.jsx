import React from "react";
import SpotifyLogo from "../assets/SpotifyLogo.png";
import { generateSpotifyLoginUrl } from "../utils/generateSpotifyLoginUrl";

export default function Login() {
  const handleLogin = async () => {
    const loginUrl = await generateSpotifyLoginUrl();
    alert("🔗 Redirecting to Spotify login:", loginUrl);
    window.location.href = loginUrl;
    
  }
  return (
    <div className="h-full w-full bg-black flex justify-center flex-col items-center pb-3 space-y-5">
      <img src={SpotifyLogo} alt="spotify-logo" />
      
      <button
        onClick={handleLogin}
        className="bg-green-600 pl-10 pr-10 pt-3 pb-3 rounded-4xl text-white font-bold hover:cursor-pointer"
      >
        Open Spotify
      </button>
    </div>
  );
}
