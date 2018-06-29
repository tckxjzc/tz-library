class LayerUiToast {
    static LONG = 2;
    static SHORT = 1;

    static makeText(msg: string) {
        return new LayerUiToast(msg);
    }

    private option: LayerOptions = {
        content: '',
        skin: 'msg',
        time: LayerUiToast.LONG
    };

    private constructor(msg: string) {
        this.option.content = msg;
    }

    setTime(time: number) {
        this.option.time = time;
        return this;
    }

    show() {
        layer.open(this.option);
    }

}


export default LayerUiToast;
