export default [
  {
    url: "/",
    children: [
      {
        url: "index",
        title: "首页",
        icon: "fa-home"
      }
    ]
  },
  {
    url: "/error",
    title: "错误页",
    icon: "fa-bug",
    children: [
      {
        url: "401",
        title: "401",
        icon: ""
      },
      {
        url: "404",
        title: "404",
        icon: ""
      }
    ]
  }
]
