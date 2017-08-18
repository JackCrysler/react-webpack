import React,{Component} from 'react' 

//button组件
const buttonCommonStyle = {
    outline: 'none',
    padding: '8px 25px',
    border: '5px solid #ccc',
    margin: '0 5px'
}

function extend(_super,_cur){
    return Object.assign({},_cur,_super)
}

const certainStyle = extend(buttonCommonStyle,{
    background: 'lightblue',
    color: '#fff'
})

const cancelStyle = extend(buttonCommonStyle,{
    background: 'pink',
    color: '#fff'
})


export default class Button extends Component {
    constructor(props) {
        super(props)
        this.close = this.close.bind(this);
    }

    close() {
        this.props.callback()
        this.props.close()
    }

    render() {
        let type = this.props.type;
        switch (type) {
            case 'certain':
                return <button className="btn" style={certainStyle} onClick={this.close}>确定</button>
                break;
            case 'cancel':
                return <button className="btn" style={cancelStyle} onClick={this.close}>取消</button>
                break;
            case 'close':
                return <button className="btn">关闭</button>
                break;

            default:
                return <button className="btn">确定</button>
                break;
        }
    }
}
