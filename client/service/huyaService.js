import env from '../../env'
//异步函数
export async function searchLiveRoom(keyword,page){
    
    return new Promise((success,error)=>{
        $.ajax({
            type : 'GET',
            url  : env.host_self+'/huya/'+keyword+'?page='+page,
            success : function(response){
                success(response)
            },
            error : function(xhr){
                error('请求失败')
            }
        });
    })
}