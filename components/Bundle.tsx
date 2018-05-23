import React, {Component} from 'react';
import Loading from './Loading';
type Props={
    el:Function
};
class Bundle extends Component<Props>{
    state={
        update:false,
        Element:null
    };
    mounted:boolean;
    constructor(props) {
        super(props);
    }
    load(){
        this.props.el().then((element)=>{
            if(this.mounted)
                this.setState({Element:element.default?element.default:element})
        })
    }
    componentDidMount(){
        this.mounted=true;
        this.load();
    }

    componentWillUnmount(){
        this.mounted=false;
    }

    static getDerivedStateFromProps(nextProps, prevState){

        return {update:true};
    }
    componentDidUpdate(){
        if(this.state.update){
            this.load();
            this.setState({update:false});
        }
    }

    render() {
        let {Element}=this.state;
        return <div>
            {Element?<Element/>:<Loading/>}
        </div>
    }
}


export default Bundle;