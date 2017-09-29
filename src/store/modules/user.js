/**
 * Created by hukekuan on 2017/9/25.
 */
// import { getToken, setToken, removeToken } from '@/common/auth'
import { GetUserList } from '@/api/usermanage'

const user = {
  state: {
    user: '',
    status: '',
    code: '',
    // token: getToken(),
    name: '',
    userList: [],
    roleList: []
  },
  getters: {
    userList: state => state.userList
  },
  mutations: {
    SET_CODE: (state, code) => {
      state.code = code
    },
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_NAME: (state, name) => {
      state.name = name
    },
    SET_USERS: (state, roleList) => {
      state.userList = roleList
    },
    SET_ROLES: (state, roleList) => {
      state.roleList = roleList
    }
  },
  actions: {
    GetUserList({ commit, state }) {
      GetUserList().then((res) => {
        commit('SET_USERS', res.data)
      }).catch((error) => {
        console.log(error)
      })
    }

  }

}

export default user
