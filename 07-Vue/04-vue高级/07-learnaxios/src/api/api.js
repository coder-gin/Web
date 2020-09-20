/**
 *数据请求
 */
import { get } from './personal'

const getCategories = get('/categories')

export { getCategories }