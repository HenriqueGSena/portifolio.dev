import { Options, Vue } from 'vue-class-component';
import AppHeader from '@/components/shared/AppHeader/AppHeader.vue';

@Options({
    components: {
        AppHeader,
    }
})
export default class App extends Vue {}
