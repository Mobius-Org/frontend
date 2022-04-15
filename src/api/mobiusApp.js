import axios from "axios";

export default axios.create({
  baseURL:
    // "https://cors-anywhere.herokuapp.com/" +
    "https://mobius-stage.herokuapp.com/mbApi/v1",
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
});
