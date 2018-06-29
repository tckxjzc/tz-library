/**
 * 数字格式化
 */
class NumFormat {
    get units(): number {
        return this._units;
    }

    set units(value: number) {
        if(value<=0){
            throw new Error(`units <= 0`);
        }
        this._units = Math.floor(value);
    }
    get precision(): number {
        return this._precision;
    }

    set precision(value: number) {
        this._precision = value;
    }
    get separator(): string {
        return this._separator;
    }

    set separator(value: string) {
        this._separator = value;
    }

    /**
     * 连接/分割符
     * @type {string}
     * @private
     */
    private _separator:string='.';
    /**
     * 精度
     * @type {number}
     *
     * @private
     */
    private _precision:number=2;

    /**
     * 间隔位数
     * @type {number}
     * @private
     */
    private _units:number=3;

    /**
     * 格式化
     * @param {number | string | null} num
     * @returns {string}
     */
    format(num:number|string|null){

        let value:number=0;
        if(num==null){
            return '';
        }
        if(typeof num=='string'){
            value=parseFloat(num);
        }
        if(isNaN(value)){
            return '';
        }

        /**
         * 精度
         */
        let decimal='';
        if(this.precision>0){
            decimal=Number(value).toFixed(this.precision).substr(-1-this.precision);
        }
        //分割
        value=Math.floor(value);
        let arr=[];
        //取余数 、 取模数
        let redundant=Math.pow(10,this._units);
        do{
            arr.push(value%redundant);
            value=Math.floor(value/redundant)
        } while(value>0);

        return arr.reverse().join(this.separator)+decimal;
    }
}

export default NumFormat;