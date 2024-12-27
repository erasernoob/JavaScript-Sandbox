import axios from 'axios'
export default new class IdeasApi {
    constructor() {
        this._apiUrl = "http://localhost:5000/api/ideas"
    }

    getIdeas() {
        return axios.get(this._apiUrl)
    }
    
    deleteIdeas(id) {
        return axios.delete(`${this._apiUrl}/${id}`)
    }

    addIdeas(ideas) {
        return axios.post(this._apiUrl, ideas)
    }
}