const contexts = import.meta.globEager('./*.ts')
import { Ref } from 'vue'

type Modules = {
    [key: string]: Ref | (() => void)
}

let modules: Modules = {}
Object.keys(contexts).forEach(key => {
    Object.assign(modules, contexts[key].default)
})

export default modules
