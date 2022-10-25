import { useEffect, useState } from 'react';
import './App.css';
import Login from './Login';
import { getTokenFromUrl } from './music';
import SpotifyWebApi from 'spotify-web-api-js';
import Player from './Player';
import { useDataLayerValue } from './DataLayer';

const spotify = new SpotifyWebApi();

function App() {
  const [{ token }, dispatch] = useDataLayerValue();

  useEffect(() => {
    // Set token
    const hash = getTokenFromUrl();
    window.location.hash = "";
    let _token = hash.access_token;

    if (_token) {
      spotify.setAccessToken(_token);

      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });

      spotify.getPlaylist("37i9dQZF1EM9ZSsgJTdlR0").then((response) =>
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly: response,
        })
      );

      spotify.getMyTopArtists().then((response) =>
        dispatch({
          type: "SET_TOP_ARTISTS",
          top_artists: response,
        })
      );

      dispatch({
        type: "SET_SPOTIFY",
        spotify: spotify,
      });

      spotify.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user,
        });
      });

      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists,
        });
      });
    }
  }, [token, dispatch]);


  // const [token,setToken] = useState(null);
  // const [{user,token},dispatch] = useDataLayerValue();

  // useEffect(() => {
  //   const hash = getTokenFromUrl();
  //   window.location.hash="";
  //   const _token = hash.access_token;

  //   if(_token){

  //     dispatch({
  //       type: "SET_TOKEN",
  //       token: _token,
  //     })
  //     // setToken(_token);
    
  //     spotify.setAccessToken(_token);

  //     spotify.getMe().then(user => {
  //       dispatch({
  //         type:'SET_USER',
  //         user:user,
  //       });
  //     });
  //     spotify.getUserPlaylists().then((playlists)=>{
  //       dispatch({
  //         type: "SET_PLAYLISTS",
  //         playlists: playlists,
  //       });
  //     });

  //     spotify.getPlaylist('37i9dQZF1EM9ZSsgJTdlR0').then(response=>{
  //       dispatch({
  //         type: "SET_DISCOVER_WEEKLY",
  //         discover_weekly: response,
  //       });
  //     })
  //   } 

  //   console.log("User",user);
  //   console.log("Alien  ",'Toke >>> ',token);
  // },[]);

  return (
    <div className="app">
      {
        token ? (
          <Player spotify={spotify}/>
        ):(
          <Login/>
        )
      }
      


      {/* Spotify Logo */}
      {/* Login with spotify button */}
      
    </div>
  );
}

export default App;
