import React from "react";
import {Modal, Toast} from 'antd-mobile';
import U from "../../common/U";
import {App} from "../../common";
import ApplyUtils from "./ApplyUtils";


export default class ApplyModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cour: this.props.cour,
            visible: true
        };
    }

    componentWillReceiveProps(pro) {
        this.state = {
            cour: this.pro.cour
        }
    }

    handleOk = () => {
        let {form = {}} = this.state;
        let {name, mobile, course} = form;
        if (name === undefined) {
            Toast.fail('请填写姓名');
        } else if (U.str.isChinaMobile(mobile) !== true) {
            Toast.fail("请填写正确的电话");
        } else {
            App.api('/ws/home/saveForm', {
                form: JSON.stringify({
                    ...form,
                    type: 1,
                    name, mobile, course,
                })
            }).then(() => {
                this.setState({
                    visible: false,
                });
                ApplyUtils.applySuccess();
            });

        }
    };

    close = () => {
        this.setState({
            visible: false,
            user: {},
        });
    };

    render() {
        let {form = {}, cour} = this.state;
        let {name, mobile} = form;
        return <div>
            <Modal
                className="course"
                title="咨询课程"
                visible={this.state.visible}
                transparent
                closable={true}
                maskClosable={true}
                onClose={() => this.close()}
            >
                <div className="advisory">
                    <div className="form">
                        <div className="line">
                            <p className='p required'>{cour}</p>
                        </div>
                        <div className="line">

                            <input style={{width: 300}} className="input-wide" placeholder="输入姓名"
                                   value={name} maxLength={64}
                                   onChange={(e) => {
                                       this.setState({
                                           form: {
                                               ...form,
                                               name: e.target.value
                                           }
                                       })
                                   }}/>
                        </div>
                        <div className="line">
                            <input style={{width: 300}} className="input-wide" placeholder="输入手机号"
                                   value={mobile} maxLength={64}
                                   onChange={(e) => {
                                       this.setState({
                                           form: {
                                               ...form,
                                               mobile: e.target.value
                                           }
                                       })
                                   }}/>
                        </div>

                        <div className="btn" onClick={() => {
                            this.handleOk();
                        }}>申请咨询
                        </div>
                    </div>
                </div>

            </Modal>
        </div>
    }
}
