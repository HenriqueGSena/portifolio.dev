import { Options, Vue } from 'vue-class-component';
import AppHeader from '@/components/shared/AppHeader/AppHeader.vue';
import AppFooter from "@/components/shared/AppFooter/AppFooter.vue";
import "./styles/scroll.css";

@Options({
    components: {
        AppHeader,
        AppFooter,
    }
})
export default class App extends Vue {}
