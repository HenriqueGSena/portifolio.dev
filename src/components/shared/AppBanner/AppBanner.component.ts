import {Vue} from "vue-class-component";

export default class AppBanner extends Vue {

    public downloadDocument() {
        const directoryPath = '/files/';
        const documentName = 'curriculo-sena.pdf';
        const documentUrl = `${directoryPath}${documentName}`;

        const link = document.createElement('a');
        link.href = documentUrl;
        link.download = documentName;
        link.click();
    }

}
