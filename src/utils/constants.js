const GOOGLE_API_KEY = "AIzaSyAPABI6ICgLqbC6DOuvj5HRRa9K6nxVWmg";

export const YOUTUBE_VIDEO_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=${GOOGLE_API_KEY}`;
