/**
 * 获取文件的内容
 * @param file 
 */
export function getContentFromFile(file:string){
    return new Promise((resolve)=>{
        return resolve({
            title:file?"test":"test2",
            content:"你好",
            date:"2019-04-24 15:12:45",
            tags:["你好"]
        })
    })
}
