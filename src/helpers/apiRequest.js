/* eslint-disable import/no-anonymous-default-export */
import Config from '../config/index'
import HTTP from './httpInstance'

export default async (request) => {
  request.method = 'get'
  request.url = `${Config.APP_API_URL}/${request.url}`
  request.data = request.data || {}
  if (request.data && request.method === 'get') {
    request.data = null
  }
  
  return HTTP(request)
}
