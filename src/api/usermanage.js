/**
 * Created by hukekuan on 17-9-28.
 */
import fetch from '@/common/fetch'
import qs from 'qs'

export function GetUserList (pagesize, currentpage) {
  return fetch({
    url: process.env.API_ROOT + '/user/userlist?pagesize=' + pagesize + '&currentpage=' + currentpage,
    method: 'get'
  })
}

export function AddUser (userInfo) {
  return fetch({
    url: process.env.API_ROOT + '/user/usercreate',
    method: 'post',
    data: qs.stringify(userInfo)
  })
}

export function RemoveUser (userIds) {
  return fetch({
    url: process.env.API_ROOT + '/user/userremove',
    method: 'post',
    data: qs.stringify({userids: userIds})
  })
}
