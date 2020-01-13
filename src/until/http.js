import axios from 'axios'
const instans=axios.create({
    baseURL:''
})
export default {
    get:(url,params)=>instans.get(url,{params}),
    post:(url,params)=>instans.post(url,params)
}