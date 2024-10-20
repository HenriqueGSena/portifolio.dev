import { Options, Vue } from "vue-class-component";
import AppBanner from "@/components/shared/AppBanner/AppBanner.vue";
import ProjectsGrid from "@/components/projects/ProjectsGrid.vue";

@Options({
    components: {
        AppBanner,
        ProjectsGrid
    }
})
export default class home extends Vue {

    get whatsappLink():string {
        return `https://wa.me/5521988136224?text=Ola%2C%20gostaria%20de%20contratar%20seus%20servi%C3%A7os`;
    }
}
