const API = (() => {
     const baseAPIUrl = "https://api.spotify.com";
     const apiVersion = "v1";
     const authUrl    = "https://accounts.spotify.com/authorize";
     const clientID   = "4a52f83167e1480091ac53dfb9adece6";
     const baseurl   = "http://127.0.0.1:3000";

  return {
       URL_SPOTIFY_AUTH : authUrl + "?client_id=" + clientID + "&redirect_uri="+(baseurl)+ "&response_type=token&show_dialog=true",
       URL_GET_ARTISTS  : baseAPIUrl + "/" + apiVersion + "/artists",
       URL_SEARCH_ARTISTS : baseAPIUrl + "/" + apiVersion + "/search?type=artist&q=",
       
  };
 })();
 export default API;
 