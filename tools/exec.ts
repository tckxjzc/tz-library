export default {
    selectText(text:string){
        let element=document.createElement('textarea');
        element.value=text;
        element.setAttribute('readonly','');
        element.style.display='hidden';
        document.body.appendChild(element);

        element.select();
        element.setSelectionRange(0,element.value.length);
        return element;
    },
    copyText(text:string){
        let result;
        let element=this.selectText(text);
        try {
            result=document.execCommand('copy');
        }catch (e) {
            result=false;
        }
        document.body.removeChild(element);
        return result;

    }
}