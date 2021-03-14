import lightningElementBootstrap from '../../lib/lightningElementBootstrap'
import {api} from 'lwc'
export default class Navbar extends lightningElementBootstrap{
    @api homevisible =false

    backhomehandler()
    {
        this.dispatchEvent(new CustomEvent('backhome'))
    }
}