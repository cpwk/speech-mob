import React from "react";
import { Toast,Modal} from 'antd-mobile';
import "../../assets/css/page/receivemodal.scss";
import {App} from "../../common";
import ApplyUtils from "./ApplyUtils";
import U from "../../common/U";

const gift = [
    {img: '../../assets/image/modal/class01.png'},
    {img: '../../assets/image/modal/class02.png'},
    {img: '../../assets/image/modal/class03.png'},
];

export default class ReceiveModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {visible: true};
    }

    close = () => {
        this.setState({
            visible: false,
            user: {},
        });
    };
    handleOk = () => {
        let {form = {}} = this.state;
        let {name, mobile} = form;
        if (name === undefined) {
            Toast.fail('请填写姓名');
        } else if (U.str.isChinaMobile(mobile)!==true) {
            Toast.fail('请输入正确的电话');
        } else {
            App.api('/ws/home/saveForm', {
                form: JSON.stringify({
                    type: 2,
                    name,mobile
                })
            });
            this.setState({
                visible: false,
            });
            ApplyUtils.success();
        }
    };

    render() {
        let {form = {}} = this.state;
        let {name, mobile} = form;
        return <div>
            <Modal
                title="限时免费领取超级演说家礼包"
                visible={this.state.visible}
                transparent
                closable={true}
                onClose={() => this.close()}
            >
                <div className="content">
                    <ul className="gift">
                        {gift.map((item, index) => {
                            let {img} = item;
                            return <li key={index}>
                                <img src={img} alt="课程大礼包"/>
                            </li>
                        })}
                    </ul>
                    <div className="form">
                        <div className="input">
                            <input type="text" className="name enter" placeholder="请输入您的姓名" value={name}
                                   onChange={(e) => {
                                       this.setState({form: {...form, name: e.target.value}});
                                   }}/>
                        </div>
                        <div className="input">
                            <input type="tel" className="mobile enter" placeholder="请输入您的电话" value={mobile}
                                   onChange={(e) => {
                                       this.setState({form: {...form, mobile: e.target.value}});
                                   }}
                            />
                        </div>
                    </div>
                    <div className="btn" onClick={() => {
                        this.handleOk()
                    }}>立即领取
                    </div>
                </div>
            </Modal>
        </div>
    }


}