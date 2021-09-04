import axios from "axios";

const BaseUrl = "http://jsonplaceholder.typicode.com" 

export default {
    async getUsers() {
       let result =await axios.get(`${BaseUrl}/users`)
       return result
    },
    async getPosts(id) {
        let result =await axios.get(`${BaseUrl}/posts/${id}`)
        return result
    },
    async createPost(data) {
        let result =await axios.post(`${BaseUrl}/posts`, data)
        return result
    }
}