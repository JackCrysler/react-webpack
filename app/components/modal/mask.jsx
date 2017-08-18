import React,{Component} from "react";
//遮罩层组件
const maskStyle = {
    position: "fixed",
    left:0,
    top:0,
    width: "100%",
    height: "100%",
    background: 'rgba(0,0,0,0.7)',
    zIndex: 98
}

class Masker extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="mask" style={maskStyle}>
                {this.props.children}
            </div>
        )
    }
}

export { Masker }
