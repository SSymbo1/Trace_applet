const backend = "http://localhost:11451"
// const backend = "https://gvrc9087235.vicp.fun"

export const requestTraceProduct = (trace) => {
    return new Promise((resolve, reject) => {
        uni.request({
            url: backend + '/wechat/trace',
            method: 'GET',
            data: { traceCode: trace },
            success: (resp) => {
                resolve(resp.data);
            },
            fail: (err) => {
                reject(err);
            }
        })
    });
}