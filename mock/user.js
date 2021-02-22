export default [
  {
    url: '/api/user',
    method: 'get',
    response: () => ({
      code: 0,
      message: "ok",
      data: {
        name: "张三",
        age: 22
      }
    })
  }
]
