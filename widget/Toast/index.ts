import LayerUiToast from "./LayerUiToast";

let Proxy: any = LayerUiToast;

class Toast {
    static makeText(msg: string) {
        return new Proxy(msg);
    }

    static register(SubToast) {
        Proxy = SubToast;
    }
}


export default Toast;
