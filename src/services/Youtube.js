class Youtube {
  constructor(YoutubeClient) {
    this.youtube = YoutubeClient;
  }

  async mostPopular() {
    const res = await this.youtube.get("videos", {
      params: {
        part: "snippet",
        chart: "mostPopular",
        maxResults: 10,
        regionCode: "KR",
        videoCategoryId: 20,
      },
    });
    return res.data.items;
  }

  async search(query) {
    const res = await this.youtube.get("search", {
      params: {
        part: "snippet",
        maxResults: 10,
        q: query,
        type: "video",
      },
    });
    return res.data.items.map((item) => ({ ...item, id: item.id.videoId }));
  }
}
export default Youtube;
