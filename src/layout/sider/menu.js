export default [
  {
    url: "/",
    title: "Home",
    icon: "fa-camera",
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
        url: "/401",
        title: "401",
        icon: "",
        children: [
          {
            url: "/1",
            title: "401-1",
            icon: "fa-dice-one"
          },
          {
            url: "/2",
            title: "401-2",
            icon: "fa-dice-two"
          }
        ]
      },
      {
        url: "/404",
        title: "404",
        icon: ""
      }
    ]
  }
]
