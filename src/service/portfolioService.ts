import axios from "axios";

const baseApiUrl = "https://api.github.com/users/HenriqueGSena/repos";

export default class portfolioService {

    public findEverythingGithubApiByRepos() {
        fetch(baseApiUrl)
            .then(async res => {
                if (!res.ok) {
                    throw new Error(res.status.toString());
                }

                const data = await res.json();
                data.map((item: any) => {
                    console.log(item);
                })
            })
    }
}
