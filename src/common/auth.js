/**
 * Created by hukekuan on 2017/9/25.
 */
import Cookes from 'js-cookie'

const TokenKey = 'key'

export function getToken () {
  return Cookes.get(TokenKey)
}

export function setToken (token) {
  return Cookes.set(TokenKey, token)
}

export function removeToken () {
  return Cookes.remove(TokenKey)
}
