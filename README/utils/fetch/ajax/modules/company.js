/**
 * @param params page size
 * @param callback
 * @des 企业总表
 */
function selectPlatformCompany(params,callback) {
    post('/selectPlatformCompany',params,callback)
}

/**
 * @param params
 * @param callback
 * @des 添加企业信息
 */
function addPlatformCompany(params,callback) {
    post('/addPlatformCompany',params,callback)
}
function classifylist(params) {
    post('/electricityClassify/classifylist',params)
}

