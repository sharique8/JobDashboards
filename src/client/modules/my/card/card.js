import lightningElementBootstrap from '../../lib/lightningElementBootstrap'
import {api} from 'lwc'
export default class Card extends lightningElementBootstrap{
    @api job
    viewdetailhandler()
    {
        console.log('ViewDetail :'+this.job.title)
        this.dispatchEvent(new CustomEvent('select',{
            detail: {
                selectedjob : this.job
            }
        }))
    }
}
