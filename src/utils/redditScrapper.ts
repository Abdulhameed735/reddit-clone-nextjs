import axios from "axios";
import * as cheerio from "cheerio";

const redditScrapper = async () => {
  try {
    const response = axios.get("https://www.reddit.com");
    const $ = cheerio.load((await response).data);
    const posts = $("div._1poyrkZ7g36PawDueRza-J").map((_, post) => {});
  } catch (error) {
    console.error("Error fetching Reddit data:", error);
    return [];
  }
};

export default redditScrapper;
