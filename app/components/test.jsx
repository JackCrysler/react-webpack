import Dialog from './modal/dialog';
import React,{Component} from "react";

const title = '测试Dialog组件的使用'

function close(){
    console.log('close')
}

function certain(){
    console.log('想放什么都可以')
}
function cancel(){
    console.log('不猜')
}


export default class Test extends Component{
    constructor(props){
        super(props);
        this.showDialog= this.showDialog.bind(this)
    }

    componentDidMount(){

    }

    showDialog(){
        this.refs.tips.show()
    }

    render(){
        return <div>
            <header>头部</header>
            <section>主体 <button onClick={this.showDialog}>对话框</button></section>
            <footer>页脚</footer>
            <Dialog ref="tips" title={title} onclose={close} oncertain={certain} oncancel={cancel}>
                你猜我会放什么进来
            </Dialog>
        </div>
    }
}