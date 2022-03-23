import createHttp from "./http.service";

class ContactService {
    constructor() {
        this.http = createHttp("/api/contacts");
    }
    async getAll() {
        return (await this.http.get("/")).data;
    }
    async create(data) {
        return (await this.http.post("/", data)).data;
    }
    async deleteAll() {
        return (await this.http.delete("/")).data;
    }
    async get(id) {
        return (await this.http.get(`/${id}`)).data;
    }
    async update(id) {
        return (await this.http.put(`/${id}`)).data;
    }
} 

export default new ContactService();