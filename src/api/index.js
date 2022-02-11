import instance from './instance'
export function getDemo(data) {
    return instance({
        url: '/testGet',
        method: 'get',
        headers: {},
        data: data,
    })
}
export function postDemo(data) {
    return instance({
        url: '/testPost',
        method: 'post',
        headers: {},
        data: data,
    })
}