# vue-cli-plugin-easy-axios
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]
<!-- PROJECT LOGO -->
<br />
<p align="center">
  <h3 align="center">vue-cli-plugin-easy-axios</h3>

  <p align="center">
    A easeily to add a contours to page by d3
    <br />
    <br />
    <br />
    <a href="https://github.com/sumerliu/vue-cli-plugin-easy-axios/issues">Report Bug</a>
    ·
    <a href="https://github.com/sumerliu/vue-cli-plugin-easy-axios/issues">Request Feature</a>
  </p>
</p>

## Table of Contents

* [About the Project](#about-the-project)
  * [Built With](#built-with)
* [Features](#Features)
* [Installation](#Installation)
* [Usage](#Usage)
* [License](#license)
* [Contact](#contact)

<!-- ABOUT THE PROJECT -->
## About The Project
> 基于easier-axios封装的Vuecli插件<br>
> version:  0.0.11<br>
> lastDate: 2020/3/12<br>
> Author:  Sumer Liu<br>

### Built With

* [axios](https://github.com/axios/axios)
* [TypeScript](https://github.com/Microsoft/TypeScript)
* [webpack](https://github.com/webpack/webpack)
* [vue-cli](https://github.com/vuejs/vue-cli)

## Features
1. 以axios作为基础库，easier-axios作为api管理工具对axios请求做模块化管理。
2. 已实现axiso配置，拦截器等模板

## Installatiom
```
 vue add easy-axios

```
## Usage
在vue项目中的plugin中找到easier-axios.js在其中填写相应配置。
```js
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
```
关于easier-axios中模块注册以及全局注册API移步到[easier-axios](https://github.com/sumerliu/esaier-axios)。

<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.



<!-- CONTACT -->
## Contact

Sumer Liu - 843627979@qq.com

Project Link: [https://github.com/sumerliu/vue-cli-plugin-easy-axios](https://github.com/sumerliu/vue-cli-plugin-easy-axios)

[license-shield]: https://img.shields.io/github/license/sumerliu/vue-cli-plugin-easy-axios.svg?style=flat-square
[license-url]: https://github.com/sumerliu/vue-cli-plugin-easy-axios/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=flat-square&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/%E5%A4%A9%E9%AA%84-%E5%88%98-4038528a/