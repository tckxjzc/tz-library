/**
 * 弹出框
 */
import DialogInterface from "./DialogInterface";

class LayerUiDialog implements DialogInterface{
    static STYLE_NORMAL = null;
    static STYLE_FOOTER = 'footer';

    private options: LayerOptions = {
        content: ''
    };

    /**
     * 设置内容
     * @param {string} content
     * @returns {this}
     */
    setContent(content: string) {
        this.options.content = content;
        return this;
    }

    /**
     * 设置样式
     * @param style
     * @returns {this}
     */
    setStyle(style) {
        this.options.skin = style;
        return this;
    }

    /**
     *
     * @param {string} content
     * @param {Function} callback
     * @returns {this}
     */
    setPositiveButton(content: string, callback?: Function) {
        this.options.btn = this.options.btn || [];
        this.options.btn[0] = content;
        if (callback) {
            this.options.yes = (index: number) => {
                callback();
                layer.close(index)
            };
        }
        return this;

    }

    /**
     *
     * @param {string} content
     * @param {Function} callback
     * @returns {this}
     */
    setNegativeButton(content: string, callback?: Function) {
        if (!this.options.btn) {
            throw  new Error('need setPositiveButton!');
        }
        this.options.btn[1] = content;
        if (callback) {
            this.options.no = (index: number) => {
                callback();
                layer.close(index)
            };
        }
        return this;
    }

    /**
     * 显示
     */
    show() {
        layer.open(this.options)
    }
}


export default LayerUiDialog;