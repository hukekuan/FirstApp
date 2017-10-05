/**
 * Created by hukekuan on 2017/9/25.
 */
// import { getToken, setToken, removeToken } from '@/common/auth'
import { GetUserList, AddUser, RemoveUser } from '@/api/usermanage'

const user = {
  state: {
    user: '',
    status: '',
    code: '',
    // token: getToken(),
    name: '',
    userCount: 0,
    userList: [],
    roleList: []
  },
  getters: {
    userList: state => state.userList,
    userCount: state => state.userCount
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
    SET_USERCOUNT: (state, userCount) => {
      state.userCount = userCount
    },
    SET_USERS: (state, roleList) => {
      state.userList = roleList
    },
    SET_ROLES: (state, roleList) => {
      state.roleList = roleList
    }
  },
  actions: {
    GetUserList ({ commit, state }, pageInfo) {
      GetUserList(pageInfo.pagesize, pageInfo.currentpage).then((res) => {
        commit('SET_USERS', res.data['userList'])
        commit('SET_USERCOUNT', res.data['userCount'])
      })
    },
    AddUser ({ dispatch, state }, userInfo) {
      AddUser(userInfo).then((res) => {
        if (res.data.hasOwnProperty('status') && res.data.status === 'OK') {
          dispatch('GetUserList', {pagesize: 5, currentpage: 1})
        }
      })
    },
    RemoveUser ({ dispatch, state }, userid) {
      RemoveUser(userid).then((res) => {
        if (res.data.hasOwnProperty('status') && res.data.status === 'OK') {
          dispatch('GetUserList', {pagesize: 5, currentpage: 1})
        }
      })
    }

  }

}

export default user
