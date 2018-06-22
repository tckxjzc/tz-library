type LayerOptions = {
    /**
     * type - 设置弹层的类型

     类型：Number

     默认：0 （0表示信息框，1表示页面层，2表示加载层）
     */
    type?: 0 | 1 | 2,
    /**
     content - 设置弹层内容

     类型：String

     必选参数
     */
    content: string,
    /**
     * btn - 按钮

     类型：String/Array

     不设置则不显示按钮。如果只需要一个按钮，则btn: '按钮'，如果有两个，则：btn: ['按钮一', '按钮二']。
     */
    btn?: Array<string>,
    /**
     skin - 设定弹层显示风格

     类型：String

     目前支持配置 footer（即底部对话框风格）、msg（普通提示） 两种风格。
     */
    skin?: 'msg' | 'footer',


    /**
     * style - 自定义层的样式

     类型：String

     非常实用，如

     layer.open({
        style: 'border:none; background-color:#78BA32; color:#fff;',
        content:'内容'
     })
     */
    style?: string,
    /**
     * title - 设置弹层标题

     类型：String或Array

     默认：空，值可以为字符串或者数组。，为空则不显示
     */
    title?: string | Array<string>
    /**
     * time - 控制自动关闭层所需秒数
     */
    time?: number
    /**
     * className - 自定义一个css类
     */
    className?: string
    /**
     * fixed - 是否固定层的位置

     类型：Boolean

     默认：true
     */
    fixed?: boolean,
    /**
     * top - 控制层的纵坐标

     类型：Number

     默认：无，一般情况下不需要设置，因为层会始终垂直水平居中，只有当fixed: false时top才有效。
     */
    top?: number
    /**
     *success - 层成功弹出层的回调

     类型：Function

     该回调参数返回一个参数为当前层元素对象

     success: function(elem){
        console.log(elem);
    }
     */
    success?: Function,

    /**
     *
     *anim - 动画类型

     类型：String/Boolean

     可支持的支持动画配置：scale（默认）、up（从下往上弹出），如果不开启动画，设置false即可
     */
    anim?: 'scale' | 'up' | false
    /**
     * shade - 控制遮罩展现

     类型：String/Boolean

     默认：true，该参数可允许你是否显示遮罩，并且定义遮罩风格

     shade: false //不显示遮罩
     或者
     shade: 'background-color: rgba(0,0,0,.3)' //自定义遮罩的透明度
     */

    shade?: string | boolean
    /**
     * shadeClose

     类型：Boolean

     默认：true，是否点击遮罩时关闭层
     */
    shadeClose?: boolean,
    /**
     * 类型：Function

     点确定按钮触发的回调函数，返回一个参数为当前层的索引

     yes: function(index){
        alert('点击了是')
        layer.close(index)
        }

     */
    yes?: Function,

    /**
     * no

     类型：Function

     点取消按钮触发的回调函数
     */
    no?: Function,
    /**
     * end

     类型：Function

     层彻底销毁后的回调函数
     */
    end?: Function,

    [name: string]: any
};


declare var layer: {
    open(option: LayerOptions): void,
    /**
     * 返回当前使用的layer mobile版本号
     */
    v,
    /**
     *用于关闭特定层，index为该特定层的索引
     */
    close(index: number): void,
    /**
     * 关闭页面所有layer的层
     */
    closeAll(): void
};
