import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const CallbackHandler = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const hash = window.location.hash;
    let token = localStorage.getItem("spotify_token");

    if (!token && hash) {
      // Parse the token from the hash
      const spotifyToken = hash
        .substring(1)
        .split("&")
        .find((elem) => elem.startsWith("access_token"))
        ?.split("=")[1];

      if (spotifyToken) {
        token = spotifyToken;
        localStorage.setItem("spotify_token", token);
        window.location.hash = ""; // Clean the hash from the URL
      }
    }

    navigate("/home"); // Redirect to your home page
  }, [navigate]);

  return <div>Loading...</div>;
};

export default CallbackHandler;