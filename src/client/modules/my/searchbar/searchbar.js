//import { LightningElement } from 'lwc'

import lightningElementBootstrap from '../../lib/lightningElementBootstrap'

export default class Searchbar extends lightningElementBootstrap{
    changehandler(event)
    {
        if(event.target.name === 'locsearch')
        {
            console.debug('Inside Location search')
        }
        else if(event.target.name === 'textsearch')
        {
            console.debug('Inside Text search')
        }
        else if(event.target.name === 'permanent')
        {
            console.debug('Inside Checkbox'+event.target.checked)
        }
    }
}