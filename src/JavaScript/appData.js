const applicationData = [
  {
    type: "Brief introduction",
    title: "Introduction to Alligator and the Author",
    range: "顶置",
    image: "",
    link: "./page/index.html",
    update_time: "2023-04-07"
  },
  {
    type: "HTML Fundamentals",
    title: "HTML在线文档（从零基础到入门）",
    range: "开放",
    image: "",
    link: "",
    update_time: "2023-04-07"
  },
  {
    type: "CSS Fundamentals",
    title: "CSS在线文档（从零基础到入门）",
    range: "开放",
    image: "",
    link: "",
    update_time: "2023-04-08"
  },
  {
    type: "HTML & CSS",
    title: "HTML&CSS静态页面项目实战资料",
    range: "未开放",
    image: "",
    update_time: "2023-04-18"
  },
  {
    type: "HTML Proficiency",
    title: "HTML在线文档（从入门到精通）",
    range: "未开放",
    image: "",
    update_time: "2023-04-26"
  },
  {
    type: "CSS Proficiency",
    title: "CSS在线文档（从入门到精通）",
    range: "未开放",
    image: "",
    update_time: "2023-05-01"
  },
  {
    type: "JavaScript Basic",
    title: "JavaScript在线文档（ECMAScript）",
    range: "未开放",
    image: "",
    update_time: "--"
  },
  {
    type: "Object Model",
    title: "JavaScript在线文档（对象模型接口）",
    range: "未开放",
    image: "",
    update_time: "--"
  },
  {
    type: "Asynchronous",
    title: "AJAX异步请求（前后端数据交互）",
    range: "未开放",
    image: "",
    update_time: "--"
  },
  {
    type: "Dynamic website",
    title: "PHP动态网站开发（快速上手）",
    range: "未开放",
    image: "",
    update_time: "--"
  },
  {
    type: "Interface design",
    title: "WEB UI交互设计(Author独门秘籍)",
    range: "独家",
    image: "",
    update_time: "--"
  },
  {
    type: "Logical Skills",
    title: "JavaScript&CSS逻辑交互技巧",
    range: "独家",
    image: "",
    update_time: "--"
  }
]

applicationData.forEach((ele, index) => {
  ele.image = `https://cdn.jsdelivr.net/gh/simpletonX/simpletonX.github.io@main/src/images/app-data/${
    index < 10 ? "0" + index + 1 : index + 1
  }.jpg`
})