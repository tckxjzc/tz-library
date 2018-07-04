/**
 * 弹出框
 */
interface DialogInterface {
    /**
     * 设置内容
     * @param {string} content
     * @returns {this}
     */
    setContent(content: string): DialogInterface;

    /**
     * 设置样式
     * @param style
     * @returns {this}
     */
    setStyle(style): DialogInterface;

    /**
     *
     * @param {string} content
     * @param {Function} callback
     * @returns {this}
     */
    setPositiveButton(content: string, callback?: Function): DialogInterface;

    /**
     *
     * @param {string} content
     * @param {Function} callback
     * @returns {this}
     */
    setNegativeButton(content: string, callback?: Function): DialogInterface;

    /**
     * 显示
     */
    show(): void;
}



export default DialogInterface;