interface Object {
    toFormData():FormData
}

Object.defineProperty(Object.prototype,'toFormData',{
    value:function () {
        let data=new FormData();
        for(let key in this){
            if(this.hasOwnProperty(key)){
                data.append(key,this[key]);
            }
        }
        return data;
    },
    enumerable:false
});
