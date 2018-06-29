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
    private _separator:string=',';
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

        let value;
        if(num==null){
            return '';
        }
        if(typeof num=='string'){
            value=parseFloat(num);
        }else{
            value=num;
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
        value=value+'';


        const len = value.length;
        if (len <= this.units) {
            return num+ decimal;
        }
        const arr = [];
        const remainder = len % this.units;
        const round = len / this.units;
        remainder && arr.push(value.substr(0, remainder));

        for (let i = 0; i <= round - 1; i++) {
            arr.push(value.substr(remainder + this.units * i, this.units));
        }
        return arr.join(this.separator) + decimal;
    }
}

export default NumFormat;