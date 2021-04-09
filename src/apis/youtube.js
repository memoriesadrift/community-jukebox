import axios from "axios";
const apiKey = "AIzaSyA39H2g0ipa-NZnXr9euxvjO1nPLaq3xms";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3/",
  params: {
    part: "snippet",
    maxResults: 8,
    key: apiKey,
  },
});
