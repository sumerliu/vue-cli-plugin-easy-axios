"use strict";

import Vue from 'vue';
import axios from "axios";
import EasierAxios, { CONSTANT } from "easier-axios";

// Full config:  https://github.com/axios/axios#request-config
// axios.defaults.baseURL = process.env.baseURL || process.env.apiUrl || '';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';



const api = new EasierAxios(
  axios,
  // config that same as axios
  {
      // baseURL: process.env.baseURL || process.env.apiUrl || ""
      // timeout: 60 * 1000, // Timeout
      // withCredentials: true, // Check cross-site Access-Control
  },
  {
      dynamicRouterPattern: `:${CONSTANT.DYNAMICROUTER_PATTERN_FLAG}` // 插件的动态路由url参数默认以：开头
  }
);
api.requestInterceptors(
  function(config) {
    // Do something before request is sent
    return config;
  },
  function(error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
api.responseInterceptors(
  function(response) {
    // Do something with response data
    return response;
  },
  function(error) {
    // Do something with response error
    return Promise.reject(error);
  }
);

Plugin.install = function(Vue, options) {
  Vue.axios = axios;
  Vue.api = api.request;
  //
  Object.defineProperties(Vue.prototype, {
    api: {
      get() {
        return api.request;
      }
    },
    $api: {
      get() {
        return api.request;
      }
    },
  });
};

Vue.use(Plugin)

export default Plugin;