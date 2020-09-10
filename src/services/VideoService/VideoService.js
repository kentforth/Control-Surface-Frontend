import http from '../../../http-common';

class VideoService {
  getAllVideos() {
    return http.get("/videos");
  }

  addVideo(data) {
    return http.post(`/videos`, data);
  }
}

export default new VideoService();
