// class YoutubeFetch {
//   constructor(key) {
//     this.key = key;
//     this.getRequestOptions = {
//       method: "GET",
//       redirect: "follow",
//     };
//   }

//   async mostPopular() {
//     try {
//       const res = await fetch(
//         `https://www.googleapis.com/youtube/v3/videos?key=${this.key}&part=snippet,statistics&chart=mostPopular&maxResults=12&regionCode=KR&videoCategoryId=20&key=${this.key}`,
//         this.getRequestOptions
//       );
//       const result_1 = await res.json();
//       return result_1.items;
//     } catch (error) {
//       return console.log("error", error);
//     }
//   }

//   async search(query, published) {
//     try {
//       const res = await fetch(
//         `https://www.googleapis.com/youtube/v3/search?key=${this.key}&part=snippet&maxResults=12&q=${query}&type=video&regionCode=KR&publishedAfter=${published}&key=${this.key}`
//       );
//       const result_1 = await res.json();
//       return result_1.items.map((item) => ({ ...item, id: item.id.videoId }));
//     } catch (error) {
//       return console.log("error", error);
//     }
//   }
// }

// export default YoutubeFetch;
