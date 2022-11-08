const BASE_URL = "https://ws.audioscrobbler.com/2.0/";
const API_KEY = "api_key=67112688656ffd82f22cb52fa78802ac";

const GET = async(type, specific, ext="") => {
  const res = await fetch(BASE_URL+'?'+type+specific+'&'+API_KEY+ext);
  return await res.json();
}


export { GET };


// https://ws.audioscrobbler.com/2.0/?method=user.gettopartists&user=rj&api_key=67112688656ffd82f22cb52fa78802ac&format=json