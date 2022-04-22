import axios from "axios";

export default axios.create({
  baseURL: "https://mobius-stage.herokuapp.com/api/v1",
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
});
