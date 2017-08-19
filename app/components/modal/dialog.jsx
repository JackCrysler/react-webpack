import Modal from './modal';
import { Masker } from './mask';
import React,{Component} from "react";
import PropTypes from 'prop-types';


export default class Dialog extends Component{
    constructor(props){
        super(props);
        this.state={
            isVisible:false
        }
        this.show = this.show.bind(this)
        this.hide = this.hide.bind(this)
    }

    show(){
        this.setState(function (state) {
            state.isVisible = true
        })
    }

    hide(){
        this.setState(function (state) {
            this.props.onclose();
            state.isVisible = false
        })
    }

    componentWillMount(){
        this.callbacks = {
            certain:this.props.oncertain,
            cancel:this.props.oncancel,
        }
    }

    render(){
        return (
            this.state.isVisible ?
            <Masker>
                <Modal title={this.props.title} close={this.hide} callbacks={this.callbacks}>
                    {this.props.children}
                </Modal>
            </Masker>:
            <div />
        )
    }
}


Dialog.propTypes = {//添加静态属性
    onclose: PropTypes.func,
    oncertaine: PropTypes.func,
    oncancel: PropTypes.func,
    title:PropTypes.string.isRequired,
    children:PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.node,
        PropTypes.element
    ])
}