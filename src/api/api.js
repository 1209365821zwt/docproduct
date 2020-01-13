import axios from '@/until/http'
const api={
    user:{
        list:(params)=>axios.get('/wapi/public/index.php/pc/index',params),
        miaozhao:(params)=>axios.get('/wapi/public/index.php/index/video/video_for_cate',params)
    }
}
export default api