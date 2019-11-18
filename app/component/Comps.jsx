import React from 'react'
import PropTypes from 'prop-types';
import '../assets/css/comps.scss'
import {Carousel, Icon, List, Modal, Picker, Toast, WingBlank} from 'antd-mobile';
import {App} from "../common";
import "../assets/css/page/receivemodal.scss";


const collaboration = [
    {text: '中国传媒大学', img: require('../assets/image/home/cm-logo.png')},
    {text: '北京教育出版社', img: require('../assets/image/home/bj-logo.png')},
    {text: '优酷视频', img: require('../assets/image/home/yk-logo.png')},
    {text: '凤凰视频', img: require('../assets/image/home/fh-logo.png')},
];
const data = [
    {label: '个人品牌方案班', value: "个人品牌方案班"},
    {label: '个人品牌塑造营', value: "个人品牌塑造营"},
    {label: '明星力集训营', value: "明星力集训营"}
];

class NoData extends React.Component {
    static propTypes = {
        loaded: PropTypes.bool,//
        type: PropTypes.string,
        loadTime: PropTypes.number,
        initContent: PropTypes.node,
    };

    state = {
        type: this.props.type || '',
        loaded: this.props.loaded || false,
        loadTime: this.props.loadTime || 15000,
        initContent: this.props.initContent,
    };

    componentWillReceiveProps(newProps) {
        if (newProps.loaded !== undefined) {
            this.setState({
                loaded: newProps.loaded,
            });
        }
    }

    componentDidMount() {
        this.loadedTimer = setTimeout(() => {
            this.setState({
                loaded: true,
            });
        }, this.state.loadTime);
        this.loadTimer = setTimeout(() => {
            this.setState({
                load: true,
            });
        }, 60);
    }

    componentWillUnmount() {
        clearTimeout(this.loadedTimer);
        clearTimeout(this.loadTimer);
    }

    render() {
        let {loaded, initContent, load} = this.state;
        if (loaded) {
            return initContent ||
                <div className="nodata"><img src={require('../assets/image/common/nodata.png')}/><p>暂无内容</p></div>;
        } else {
            return load ? <LoadMore/> : null;
        }
    }
}

class LoadMore extends React.Component {
    render() {
        return (
            <div className="load-container center-block margin-vertical-lg">
                <div className="load-1"/>
                <div className="load-2"/>
                <div className="load-3"/>
                <div className="load-4"/>
                <div className="load-5"/>
            </div>
        );
    }
}

class Banners extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
        };
    }

    componentDidMount() {
        App.api('/ws/home/findBanners', {bannerQo: JSON.stringify({type: 2})}).then((result) => {
            this.setState({list: result})
        })
    }

    render() {

        let {list = []} = this.state;
        return <Carousel autoplay={list.length > 1} dots={list.length > 0} infinite className="banner-carousel">
            {list.map((banner, index) => {
                return <div key={index}><img src={banner.img}/></div>;
            })}
        </Carousel>
    }
}


class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            see: false,
        }
    }

    show = () => {
        let {see} = this.state;
        let menu = document.getElementsByClassName('top-header')[0];
        let topScroll = document.documentElement.scrollTop || document.body.scrollTop;
        this.setState({see: !see});

        if (see) {
            document.body.style.overflow = 'auto';
            menu.className = 'top-header';
            if (topScroll > 100) {
                menu.className = "top-header top-header-fixed";
            }
        } else {
            document.body.style.overflow = 'hidden';
            if (topScroll > 100) {
                menu.className = "top-header top-header-fixed";
            } else {
                menu.className = "top-header  top-header-fixed";
            }
        }

    };


    render() {
        let {see} = this.state;
        return <div>

            {see && <div className='overlay' onClick={() => {
                this.show()
            }}/>}
            <div className={`top-header  ${see && 'top-header-open'}`}>
                <div className="inner">
                    <div className="logo"/>
                    <span className="phone">
                     <Icon type="phone" className="icon_phone" rotate={90}/>
                     <em> 010-6744716</em>
                </span>
                    <div className="more" onClick={() => {
                        this.show();
                    }}/>
                </div>


                {see &&
                <div className="see">
                    <div className="link" onClick={() => {
                        App.go(`/`);
                        this.show();
                    }}>网站首页
                    </div>
                    <div className="link" onClick={() => {
                        App.go(`/course/${0}`);
                        this.show();
                    }}>学院课程
                    </div>
                    <div className="link course border" onClick={() => {
                        App.go(`/course/${0}`);
                        this.show();
                    }}>青少年课程
                    </div>
                    <div className="link course" onClick={() => {
                        App.go(`/course/${1}`);
                        this.show();
                    }}>企业家课程
                    </div>
                    <div className="link" onClick={() => {
                        App.go(`/brandShow`);
                        this.show();
                    }}>品牌节目
                    </div>
                </div>}
            </div>
        </div>
    }
}

class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            form: {},
            visible: false,
            asyncValue: [],
            modal2: false,
            success: false,
        };
    }

    showModal = key => (e) => {
        e.preventDefault(); // 修复 Android 上点击穿透
        this.setState({
            [key]: true,
        });
    };
    onClose = key => () => {
        this.setState({
            [key]: false,
        });
    };

    submit = () => {
        let {form} = this.state;
        let {name, mobile, course} = form;
        if (name === undefined) {
            Toast.fail('请填写姓名');
        } else if (mobile === undefined) {
            Toast.fail('请填写联系方式');
        } else if (course === undefined) {
            Toast.fail("请选择课程");
        } else {
            App.api('/ws/home/saveForm', {form: JSON.stringify({type: 1, name, mobile, course})}).then(() => {
                this.setState({modal2: false});
                this.setState({success: true});
                this.setState({form:{}});
            });

        }
    };

    render() {
        let {form = {}} = this.state;
        let {name, mobile, course} = form;

        return <div className="footer">
            <WingBlank>
                <div className="inner">
                    <div className="links">
                        <p className="institution">合作机构</p>
                        <div className="cooperation">
                            {collaboration.map((item, index) => {
                                let {img, text} = item;
                                return <div className="institution-logo" key={index}>
                                    <div className="name">{text}</div>

                                    <div className="logo" style={{
                                        backgroundImage: `url(${img})`,
                                        backgroundPosition: '50% 50%',
                                        backgroundRepeat: 'no-repeat',
                                        backgroundSize: 'cover',
                                    }}/>
                                    <img src={img} alt="logo" className="logo"/>
                                </div>
                            })}
                        </div>
                    </div>
                </div>
                <div className="record_number">
                    <div className="text">
                        Copyright © 2019 天津能量集团
                    </div>
                    <div className="text">
                        ALL Rights Reserved.津ICP备17027517号-3
                    </div>
                </div>
            </WingBlank>
            <div className="btn" onClick={
                this.showModal('modal2')
            }>立即报名
            </div>

            <Modal
                className='enter'
                title={'报名课程'}
                popup
                visible={this.state.modal2}
                onClose={this.onClose('modal2')}
                animationType="slide-up"
            >
                <div className="course_xz tiao">
                    <Picker data={data}
                            extra="请选择课程"
                            cols={1}
                            visible={this.state.visible}
                            onChange={v => this.setState({form: {...form, course: v[0]}})}
                            value={[course]}
                            onOk={() => this.setState({visible: false})}
                            onDismiss={() => this.setState({visible: false})}
                    >
                        <List.Item arrow="down" onClick={() => this.setState({visible: true})}/>
                    </Picker>
                </div>

                <div className="name tiao">
                    <input type="text" value={name} placeholder='请输入您的姓名' onChange={(e) => {
                        this.setState({form: {...form, name: e.target.value}})
                    }}/>
                </div>
                <div className="mobile tiao">
                    <input type="tel" placeholder='请输入您的手机号' value={mobile} onChange={(e) => {
                        this.setState({form: {...form, mobile: e.target.value}})
                    }}/>
                </div>
                <div className="btn" onClick={() => {
                    this.submit();
                }}>
                    确认提交
                </div>
            </Modal>


            <Modal
                className='success_ful_modal'
                visible={this.state.success}
                onClose={() => this.setState({success: false})}
                maskClosable={true}
            >
                <div className="success_ful"/>
            </Modal>
        </div>
    }
}

export {NoData, LoadMore, Banners, Header, Footer}
