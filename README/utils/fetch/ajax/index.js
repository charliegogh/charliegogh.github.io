"use strict";
/**
 * @author charlie
 * @Description: ajax请求封装
*/
var fetch = function fetch(url,params,type) {
    var data = params.data
    $.ajax({
        url: api + url,
        type: type,
        data: data,
        async: params.async ? params.async : true,
        success: function success(res) {
            params.success && params.success(res);
        },
        error: function (res) {
            params.error && params.error(res);
        }
    });
};
/* get请求 */
var get = function post(url,params) {
    return fetch(url,params,'get');
};
/* post请求 */
var post = function post(url,params) {
    return fetch(url,params,'post');
};
