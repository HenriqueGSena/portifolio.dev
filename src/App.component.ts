import { Options, Vue } from 'vue-class-component';
import AppHeader from '@/components/shared/AppHeader/AppHeader.vue';
import "./styles/scroll.css";

@Options({
    components: {
        AppHeader,
    }
})
export default class App extends Vue {}
