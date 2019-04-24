import Button from './button/index'
import Input from './input/index'


const install = function(Vue){
    if (install.installed) return;
    Vue.component(Button.name,Button)
    Vue.component(Input.name,Input)
}
export default {
    install,
    Button,
    Input
}