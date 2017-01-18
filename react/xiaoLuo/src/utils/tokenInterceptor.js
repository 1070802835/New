/**
 * 统一 header 过滤
 * Created by MFChen on 21/12/2016.
 */
export default {
  request: (config) => {
    if (!config.headers) {
      config.headers = {};
    }
    const tfToken = '';
    const tfUid = '';

    // 如果headers中已有tf-token和tf-uid,则不再覆盖
    if (tfToken && tfUid && !config.headers['accesstoken'] && !config.headers['unionid']) {
      Object.assign(config.headers, {
      });
    }
    return config;
  }
};