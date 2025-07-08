export async function generateSpotifyLoginUrl(): Promise<string> {
  const clientId = "5b82a28ff387492cac57e5a9a982b84d";
  const redirectUri = "https://spotifystream.vercel.app/"; // your deployed frontend
  const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
    "playlist-read-private",
    "playlist-read-collaborative",
  ];

  const generateRandomString = (length: number): string => {
    const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const values = crypto.getRandomValues(new Uint8Array(length));
    return values.reduce((acc, x) => acc + possible[x % possible.length], "");
  };

  const sha256 = async (plain: string) => {
    const encoder = new TextEncoder();
    const data = encoder.encode(plain);
    return await crypto.subtle.digest("SHA-256", data);
  };

  const base64encode = (input: ArrayBuffer): string => {
    return btoa(String.fromCharCode(...new Uint8Array(input)))
      .replace(/=/g, "")
      .replace(/\+/g, "-")
      .replace(/\//g, "_");
  };

  const codeVerifier = generateRandomString(64);
  const hashed = await sha256(codeVerifier);
  const codeChallenge = base64encode(hashed);

  localStorage.setItem("code_verifier", codeVerifier);

  const params = new URLSearchParams({
    response_type: "code",
    client_id: clientId,
    redirect_uri: redirectUri,
    scope: scopes.join(" "),
    code_challenge_method: "S256",
    code_challenge: codeChallenge,
  });

  return `https://accounts.spotify.com/authorize?${params.toString()}`;
}
