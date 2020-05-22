// 路由信息
const routerList = {
  state: {
    routerList: []
  },
  mutations: {
    setMenuList(state, data) {   //配置菜单
      state.routerList = data
    }
  }
}

export default routerList;