import { Options, Vue } from "vue-class-component";
import AppBanner from "@/components/shared/AppBanner/AppBanner.vue";
import ProjectsGrid from "@/components/projects/ProjectsGrid.vue";
import { Prop } from "vue-property-decorator";

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
