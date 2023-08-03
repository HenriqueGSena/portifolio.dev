import {Options, Vue} from "vue-class-component";
import about from "@/components/about/about.vue";

@Options({
    components: {
        'about': about
    }
})
export default class Header extends Vue {}
