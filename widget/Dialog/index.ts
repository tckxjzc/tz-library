import DialogInterface from "./DialogInterface";
import LayerUiDialog from "./LayerUiDialog";

let Proxy:any=LayerUiDialog;

class Dialog implements DialogInterface{
    private  dialog:DialogInterface;
    constructor(){
        this.dialog=new Proxy();
    }
    setContent(content: string): DialogInterface {
        return this.dialog.setContent(content);
    }

    setNegativeButton(content: string, callback?: Function): DialogInterface {
        return this.dialog.setNegativeButton(content,callback);
    }

    setPositiveButton(content: string, callback?: Function): DialogInterface {
        return this.dialog.setPositiveButton(content,callback);
    }

    setStyle(style): DialogInterface {
        return this.dialog.setStyle(style);
    }

    show(): void {
        this.dialog.show();
    }

    static register(SubDialog){
        Proxy=SubDialog;
    }

}

export default Dialog;