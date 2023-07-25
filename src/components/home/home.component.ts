import { Options, Vue } from 'vue-class-component'
import Showprojeto from '@/components/projects/show-projeto.vue'

@Options({
    components: {
        'show-projeto': Showprojeto
    }
})
export default class Home extends Vue {}
