import { isPlainObject } from './util'

export function transformRequest(data: any): any {
  if (isPlainObject) {
    return JSON.stringify(data)
  }
  return data
}
