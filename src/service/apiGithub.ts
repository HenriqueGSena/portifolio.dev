import axios from "axios";

const baseApiUrl = "https://api.github.com/users/HenriqueGSena";

const api = axios.create({
    baseURL: baseApiUrl
});

export default class apiGithub {

    public async findEverythingRepositoriesByGithub() {
        try {
            const response = await api.get("/repos");
            return response.data;
        } catch (err) {
            console.log("Error listing repository", err);
            throw err;
        }
    }
}
