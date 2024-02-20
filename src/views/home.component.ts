import { Options, Vue } from "vue-class-component";
import { Prop } from "vue-property-decorator";
import AppBanner from "@/components/shared/AppBanner/AppBanner.vue";
import ProjectsGrid from "@/components/projects/ProjectsGrid.vue";

@Options({
    components: {
        AppBanner,
        ProjectsGrid
    }
})
export default class home extends Vue {
    @Prop({default: '5521992834373'}) whatsappNumber!: string;

    get whatsappLink():string {
        return `https://wa.me/${this.whatsappNumber}`;
    }
}
