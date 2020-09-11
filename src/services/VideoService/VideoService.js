import http from '../../../http-common';

class VideoService {
  getAllVideos() {
    return http.get("/videos");
  }

  getSingleVideo(id) {
    return http.get(`/videos/${id}`);
  }

  update(id, data) {
    return http.put(`/videos/${id}`, data);
  }

  addVideo(data) {
    return http.post(`/videos`, data);
  }

  delete(id) {
    return http.delete(`/videos/${id}`);
  }
}

export default new VideoService();
