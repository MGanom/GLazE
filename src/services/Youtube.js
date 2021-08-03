class Youtube {
  constructor(YoutubeClient) {
    this.youtube = YoutubeClient;
  }

  async mostPopular() {
    const res = await this.youtube.get("videos", {
      params: {
        part: "snippet",
        chart: "mostPopular",
        maxResults: 12,
        regionCode: "KR",
        videoCategoryId: 20,
      },
    });
    return res.data.items;
  }

  async search(query, published) {
    const res = await this.youtube.get("search", {
      params: {
        part: "snippet",
        maxResults: 12,
        q: query,
        type: "video",
        regionCode: "KR",
        publishedAfter: published,
      },
    });
    return res.data.items.map((item) => ({ ...item, id: item.id.videoId }));
  }
}
export default Youtube;
