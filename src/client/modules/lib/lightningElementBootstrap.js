import { LightningElement} from 'lwc';

export default class LightningElementBootstrap extends LightningElement {
    constructor(){
        super()
        const path = '/resources/css/slds.min.css'
        const styles = document.createElement('link')
        styles.href = path
        styles.rel="stylesheet"
        this.template.appendChild(styles)

        const path1 = '/resources/css/fontawesome.min.css'
        const styles1 = document.createElement('link')
        styles1.href = path1
        styles1.rel="stylesheet"
        this.template.appendChild(styles1)
    }
}
