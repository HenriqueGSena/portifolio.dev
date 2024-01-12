import { Options, Vue } from "vue-class-component";
import AppBanner from "@/components/shared/AppBanner/AppBanner.vue";
import ProjectsGrid from "@/components/projects/ProjectsGrid.vue";

@Options({
    components: {
        AppBanner,
        ProjectsGrid
    }
})
export default class home extends Vue {}
