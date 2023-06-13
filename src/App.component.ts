import { Options, Vue } from 'vue-class-component';
import Header from './components/Header/Header.vue';
import home from './components/home/home.vue';
import "./styles/scroll.css";

@Options({
    components: {
        Header,
        home
    }
})
export default class App extends Vue {}