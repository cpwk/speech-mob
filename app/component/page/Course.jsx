import React from "react";
import {Badge, Tabs} from 'antd-mobile';
import "../../assets/css/page/youngerCourse.scss";
import {Banners} from "../Comps";
import ApplyUtils from "../common/ApplyUtils";

const course = [
    {
        img: require('../../assets/image/course/course-1.png'),
        text: {h1: '少年演说家全能养成课', first: '前进是未来的方向', second: '演说是飞翔的翅膀'},
        ul: [
            {icon: require('../../assets/image/icon/demo.png'), font: '自信力'},
            {icon: require('../../assets/image/icon/demo.png'), font: '分析力'},
            {icon: require('../../assets/image/icon/demo.png'), font: '组织力'},
            {icon: require('../../assets/image/icon/demo.png'), font: '逻辑力'},
            {icon: require('../../assets/image/icon/demo.png'), font: '创造力'},
            {icon: require('../../assets/image/icon/demo.png'), font: '感染力'},
            {icon: require('../../assets/image/icon/demo.png'), font: '表现力'},
            {icon: require('../../assets/image/icon/demo.png'), font: '表现力'}]
    },
    {
        img: require('../../assets/image/course/course-2.png'),
        text: {h1: '明星力集训营', first: '成为聚光灯下的孩子', second: '树立不甘平庸的信仰'},
        ul: [{icon: require('../../assets/image/icon/demo.png'), font: '榜样之力'},
            {icon: require('../../assets/image/icon/demo.png'), font: '向往之力'},
            {icon: require('../../assets/image/icon/demo.png'), font: '荣耀之力'},
            {icon: require('../../assets/image/icon/demo.png'), font: '梦想之力'},
        ]
    },
    {
        img: require('../../assets/image/course/course-3.png'),
        text: {h1: '少年演说家蓝图计划', first: '用志向绘制蓝图', second: '用演说成就明日之光'},
        ul: [{icon: require('../../assets/image/icon/demo.png'), font: '自信力'},
            {icon: require('../../assets/image/icon/demo.png'), font: '学习力'},
            {icon: require('../../assets/image/icon/demo.png'), font: '演说学习法'},
            {icon: require('../../assets/image/icon/demo.png'), font: '演说读心术'},
        ]
    }
];
const tabs = [
    {title: <Badge text=''>青少年课程</Badge>},
    {title: <Badge text=''>企业家课程</Badge>},
];
const Yimgs = [
    {img: require('../../assets/image/course/lessons01.png')},
    {img: require('../../assets/image/course/lessons02.png')},
    {img: require('../../assets/image/course/lessons03.png')},
    {img: require('../../assets/image/course/lessons04.png')},
    {img: require('../../assets/image/course/lessons05.png')},
    {img: require('../../assets/image/course/lessons06.png')},

];
const Qimgs = [
    {img: require('../../assets/image/course/lessons07.png')},
    {img: require('../../assets/image/course/lessons08.png')},
    {img: require('../../assets/image/course/lessons09.png')},
    {img: require('../../assets/image/course/lessons10.png')},
    {img: require('../../assets/image/course/lessons11.png')},
    {img: require('../../assets/image/course/lessons12.png'),}
];

const Program = '个人品牌方案班';
const training = '个人品牌集训营';

export default class Course extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tabKey: parseInt(this.props.match.params.tabKey),
            // tabKey: 0, //0:青少年课程  1:企业家课程
        }
    }

    render() {
        let {tabKey} = this.state;
        console.log(tabKey);
        return <div className="course-page  home-box">
            <div className="banner">
                <Banners/>
            </div>
            <div className='ren-tabs'>
                <Tabs tabs={tabs}
                      initialPage={tabKey}
                      tabBarActiveTextColor={"#fff"}
                      onChange={(tab, index) => {
                          this.setState({tabKey: index, display: 'block', type: index === 0 ? 1 : 0}, () => {
                          });
                      }}>
                    <div className="younger-course-page">
                        <div className="page-first piece">
                            {
                                course.map((item, index) => {
                                    let {img, text = {}, ul = []} = item;
                                    let {first, h1, second} = text;
                                    return <div key={index} className="course-information">
                                        <div className="course-img">
                                            <img src={img} className="img-detail" alt="图片"/>
                                        </div>

                                        <div className="course-information-content">
                                            <div className="first">
                                                {first}
                                            </div>
                                            <div className="second">
                                                <div className="label">{h1}</div>
                                                <div className="label">{second}</div>
                                            </div>
                                            <div className="third">
                                                {
                                                    ul.map((item, index) => {
                                                        let {icon, font} = item;
                                                        return <div key={index} className="third-content">
                                                            <div className="third-icon">
                                                                <img src={icon} className="icon" alt="图标"/>
                                                            </div>
                                                            <div className="font">{font}</div>
                                                        </div>
                                                    })
                                                }

                                            </div>
                                        </div>
                                        <div className="btn" onClick={() => {
                                            ApplyUtils.modal(h1)
                                        }}>
                                            咨询该课程
                                        </div>
                                    </div>
                                })
                            }
                        </div>
                        <div className="page-second piece">
                            <div className="second-top">
                                少年演说 教学系统
                            </div>
                            <div className="second-font">
                                少年演说课程体系由“心智维度”“语义纬度”两大维度构成，课程以“注意-兴趣-热望-行动”为路径，通过激发热情、发掘潜能、独立思考、组织思维、梳理逻辑、自信表现达成表达逻辑的养成，培养青少年形成
                                正确的表达逻辑思维、良好的语言表达素养。
                            </div>
                            <div className="second-img">
                                <img src="../../assets/image/course/Frame%201.png" alt="图片"/>
                            </div>
                        </div>
                        <div className="page-third piece">
                            <div className="title">
                                <h2 className="mark">名师授课 精彩课堂</h2>
                                <h2/>
                            </div>
                            <div className="third-content">
                                {Yimgs.map((item, index) => {
                                    let {img} = item;
                                    return <div className="div"
                                                style={{
                                                    backgroundImage: `url(${img})`,
                                                    backgroundPosition: '50% 50%',
                                                    backgroundRepeat: 'no-repeat',
                                                    backgroundSize: 'cover',
                                                }}
                                    >
                                    </div>
                                })}
                            </div>
                        </div>
                    </div>
                    <div className="enter-course-page">
                        <div className="enter-first">
                            <div className="first-content">
                                <div className="first-content-img">
                                    <img src="../../assets/image/course/course-4.png"/>
                                </div>
                            </div>
                            <div className="content">
                                <div className="content-top">
                                    <div className="top-name">
                                        <div className="name-first">
                                            {Program}
                                        </div>
                                        <div className="name-second">
                                            打造品牌人设 从小众走向大众
                                        </div>
                                    </div>

                                    <div className="btn" onClick={() => {
                                        ApplyUtils.modal(Program)
                                    }
                                    }>
                                        咨询该课程
                                    </div>
                                </div>
                                <div className="content-list">
                                    <div className="list-detail">
                                        <div className="list-icon"/>
                                        <div className="list-label">全新思维方式</div>
                                    </div>
                                    <div className="list-detail">
                                        <div className="list-icon"/>
                                        <div className="list-label">演说家特有的训练方法</div>
                                    </div>
                                    <div className="list-detail">
                                        <div className="list-icon"/>
                                        <div className="list-label">专属流量型人设</div>
                                    </div>
                                    <div className="list-detail">
                                        <div className="list-icon"/>
                                        <div className="list-label">导演组特别互动指导</div>
                                    </div>

                                </div>
                                <div className="content-font">
                                    所以竞争都是资源的抢夺，如何在这个时代让自己持续升值，让人脉、资本主动上门，拥有一呼百应的能力。
                                </div>

                            </div>
                            <div className="second-content">
                                <div className="first-content-img">
                                    <img src="../../assets/image/course/course-5.png"/>
                                </div>
                            </div>
                            <div className="content">
                                <div className="content-top">
                                    <div className="top-name">
                                        <div className="name-first">
                                            {training}
                                        </div>
                                        <div className="name-second">
                                            打造品牌人设 从小众走向大众
                                        </div>
                                    </div>
                                    <div className="content-button">
                                        <div className="btn" onClick={() => {
                                            ApplyUtils.modal(training)
                                        }
                                        }>
                                            咨询该课程
                                        </div>
                                    </div>
                                </div>
                                <div className="content-list">
                                    <div className="list-detail">
                                        <div className="list-icon"/>
                                        <div className="list-label">全新思维方式</div>
                                    </div>
                                    <div className="list-detail">
                                        <div className="list-icon"/>
                                        <div className="list-label">演说家特有的训练方法</div>
                                    </div>
                                    <div className="list-detail">
                                        <div className="list-icon"/>
                                        <div className="list-label">专属流量型人设</div>
                                    </div>
                                    <div className="list-detail">
                                        <div className="list-icon"/>
                                        <div className="list-label">导演组特别互动指导</div>
                                    </div>

                                </div>
                                <div className="content-font">
                                    所以竞争都是资源的抢夺，如何在这个时代让自己持续升值，让人脉、资本主动上门，拥有一呼百应的能力。
                                </div>

                            </div>
                        </div>
                        <div className="enter-second">
                            <div className="enter-font">
                                演说家团队自2013年开启华人演说领域的探索
                                ，并成功让华人演说在全球范围内释放语言的智慧与力量。历时6年，这个伫立在华人演说领域金字塔顶尖的团队，在长期的实践中形成并验证了一套成熟的训练体系。
                            </div>
                            <div className="enter-img">
                                <img src="../../assets/image/course/course-6.png"/>
                            </div>
                            <div className="enter-font">
                                2019年6月演说家学院与中国传媒大学广告学院联合成立研究院，专注于公众表达的学术研究，为与时俱进实现更科学化、系统化、效果化的演说教研供给提供学术基础。
                            </div>
                            <div className="enter-img">
                                <img src="../../assets/image/course/course-7.png"/>
                            </div>

                        </div>
                        <div className="enter-third">
                            <div className="enter-top">
                                名师授课 精彩课堂
                            </div>
                            <div className="enter-content">
                                {Qimgs.map((item, index) => {
                                    let {img} = item;
                                    return <div className="div"
                                                style={{
                                                    backgroundImage: `url(${img})`,
                                                    backgroundPosition: '50% 50%',
                                                    backgroundRepeat: 'no-repeat',
                                                    backgroundSize: 'cover',
                                                }}
                                    >
                                    </div>
                                })}
                            </div>
                        </div>
                    </div>
                </Tabs>
            </div>
        </div>
    }
}
