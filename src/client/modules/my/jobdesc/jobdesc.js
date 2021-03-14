import lightningElementBootstrap from '../../lib/lightningElementBootstrap'
import {api} from 'lwc'
export default class Jobdesc extends lightningElementBootstrap{
    onetimeload =false;
    @api selectedjob = {}   
      renderedCallback()
      {
          if(this.onetimeload){
            return
          }
          if(this.selectedjob.description)
          {
            const cbody = this.template.querySelector('.contentbody')
            cbody.innerHTML = this.selectedjob.description
            this.onetimeload = true
          }
          
      }
    
}