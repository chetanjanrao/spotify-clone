import React, { useEffect } from "react";

const clientId = "5b82a28ff387492cac57e5a9a982b84d";
const redirectUri = "https://spotify-clone-git-chetan-dev-jrchetan1997-7932s-projects.vercel.app/"; // must match Spotify app settings

export default function Callback() {
  useEffect(() => {
    const fetchToken = async () => {
      const urlParams = new URLSearchParams(window.location.search);
      const code = urlParams.get("code");
      const codeVerifier = localStorage.getItem("code_verifier");
      
      if (!code || !codeVerifier) {
        console.error("Missing code or code_verifier");
        return;
      }

      try {
        const response = await fetch("https://accounts.spotify.com/api/token", {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: new URLSearchParams({
            grant_type: "authorization_code",
            code,
            redirect_uri: redirectUri,
            client_id: clientId,
            code_verifier: codeVerifier,
          }),
        });
        console.log("🔄 Fetching token...");
        const data = await response.json();

        if (data.access_token) {
          localStorage.setItem("spotify_token", data.access_token);
          console.log("✅ Token stored:", data.access_token);

          // Redirect to app home or dashboard
          window.location.href = "/";
        } else {
          console.error("❌ Token error:", data);
        }
      } catch (err) {
        console.error("❌ Fetch error:", err);
      }
    };

    fetchToken();
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <p>Connecting to Spotify...</p>
    </div>
  );
}
