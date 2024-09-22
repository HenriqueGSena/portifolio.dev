import {Vue} from "vue-class-component";
import apiGithub from "@/service/apiGithub";

export default class ProjectsGrid extends Vue {
    public repositories: any[] = [];

    mounted() {
        this.getAllRepositories();
    }

    public async getAllRepositories() {
        try {
            const githubApi = new apiGithub();
            const repos = await githubApi.findEverythingRepositoriesByGithub();
            
            this.repositories = repos.sort((a: any, b: any) => {
                return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
            });
        } catch (err) {
            console.error("Error repository", err);
            throw err;
        }
    }

}
