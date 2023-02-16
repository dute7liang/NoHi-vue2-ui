import request from '@/utils/request'

// 查询参数列表
export function bindInfo(query) {
  return request({
    url: '/bind/info',
    method: 'get',
    params: query
  })
}

export function bind(query) {
  return request({
    url: '/bind/wx',
    method: 'get',
    params: query
  })
}

export function getBindUrl(query) {
  return request({
    url: '/bind/getBindUrl',
    method: 'get',
    params: query
  })
}
