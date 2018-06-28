import React, {Component} from 'react';
import Transition from "react-transition-group/Transition";
import fade from './animate/fade';
import duration,{D1000} from './animate/duration';

type Props = {
    show: boolean,
    timeout?:number,
    onExited?,
    [name:string]:any
};
let a=<div onClick={()=>{}}/>;

class Fade extends Component<Props> {
    /**
     * lifecycle
     */
    mounted = false;
    state = {
        show: false
    };

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.mounted = true;
        this.setState({show: this.props.show});
    }

    componentDidUpdate(prevProps) {
        if (this.props.show != this.state.show) {
            this.setState({show: this.props.show});
        }
    }

    componentWillUnmount() {
        this.mounted = false;
    }

    render() {

        let {children,show,onExited,...childProps} = this.props;



        let child = React.Children.only(this.props.children);
        let timeout=this.props.timeout||D1000;
        return <Transition
            in={this.state.show}
            timeout={timeout}
            onExited={this.props.onExited}
            unmountOnExit={false} >

            {
                (state) => {
                    return React.cloneElement(child, {
                        ...childProps,
                        className: `${child.props.className || ''} ${fade.getClassName(state) || ''} ${duration.getClassName(timeout)}`
                    })
                }
            }
        </Transition>
    }

    /**
     *properties
     */

    /**
     *method
     */

}

export default Fade;