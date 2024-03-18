import {Vue} from "vue-class-component";
import portfolioService from "@/service/portfolioService";
import projectsData from '../../data/projects';

export default class ProjectsGrid extends Vue {

    projects = projectsData;
    private portfolioService!: () => portfolioService;
}
