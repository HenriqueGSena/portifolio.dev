import { Options, Vue } from 'vue-class-component'
import ProjectsGrid from '@/components/projects/ProjectsGrid.vue'

@Options({
    components: {
        'ProjectsGrid': ProjectsGrid
    }
})
export default class Home extends Vue {}
