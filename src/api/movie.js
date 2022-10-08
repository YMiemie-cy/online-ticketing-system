import axios from '../plugins/axios';

export const getMovies = async ()=>
  axios.get("/movie?apipost_id=c5deb3")


