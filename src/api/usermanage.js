/**
 * Created by hukekuan on 17-9-28.
 */
import fetch from '@/common/fetch'

export function GetUserList(){
  return fetch({
    url: process.env.API_ROOT + '/user/userlist',
    method: 'get'
  })
}
