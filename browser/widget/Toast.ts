import LayerUiToast from "./LayerUiToast";

let Proxy: any = LayerUiToast;

class Toast {
    toast;

    static makeText(msg: string) {
        return new Toast(msg);
    }

    private constructor(msg: string) {
        this.toast = new Proxy(msg);
    }

    setTime(time: number) {
        return this.toast.setTime(time);
    }

    show() {
        this.toast.show();
    }

    static register(SubToast) {
        Proxy = SubToast;
    }
}


export default Toast;
