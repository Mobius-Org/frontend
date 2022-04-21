import axios from "axios";

export default axios.create({
  baseURL:
    "http://mobiusorg-env.eba-tac3kb3k.eu-west-2.elasticbeanstalk.com/api/v1",
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
});
