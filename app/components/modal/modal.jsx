import Button from '../buttons/button'
import React,{Component} from "react";

//对话框组件
const modalStlye = {
            position:'absolute',
            left:'50%',
            top:'50%',
            transform:"translate3d(-50%,-50%,0)",
            background:'#fff',
            color:'#000',
            padding:'10px 0',
            maxWidth:'80%',
            minWidth:'30%',
            wordWrap: 'break-word'
        }

        const titleStyle = {
            height:'38px',
            lineHeight:'38px',
            padding:'0 10px'
        }

        const contentStyle = {
            padding:"10px 15px 15px",
            lineHeight: '24px',
            textAlign:'center'
        }

        const buttonsStyle = {
            display:'flex',
            justifyContent:'center',
            alignItems:'center'
        }

       export default class Modal extends Component{
            constructor(props){
                super(props)
            }

            componentWillMount(){
                const callbacks = this.props.callbacks;
            }

            render(){
                return (
                    <div style={modalStlye}>
                        <div className="title" style={titleStyle}>{this.props.title}</div>
                        <div className="content" style={contentStyle}>{this.props.children}</div>
                        <div className="btns" style={buttonsStyle}>
                            <Button type="certain" close={this.props.close} callback={this.props.callbacks.certain}></Button>
                            <Button type="cancel" close={this.props.close} callback={this.props.callbacks.cancel}></Button>
                        </div>
                    </div>
                )
            }
        }