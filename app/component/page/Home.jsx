import React from "react";
import {App} from "../../common";
import {Banners} from "../Comps";
import "../../assets/css/page/home.scss";
import Utils from "../../common/Utils";
import ApplyUtils from "../common/ApplyUtils";

const synopsis = [
    {
        icon: require('../../assets/image/home/Vector-4.png'),
        title: '理论更严谨',
        text: '联合中国传媒大学厂广告学院成立语言表达研究院，形成更科学严谨的教学体系。'
    },
    {icon: require('../../assets/image/home/Vector-3.png'), title: '案例更丰富', text: '7年间超过4000件演说培训案例，井成功搬上荧幕成为国内演说经典。'},
    {icon: require('../../assets/image/home/Vector-2.png'), title: '师资更豪华', text: '集结国内外演说届明星、名师大咖，拥有演说导师的顶配阵容。'},
    {icon: require('../../assets/image/home/Vector-1.png'), title: '学员更成功', text: '大平台铸造学员进阶之路，成功帮助300位素人成为专业级的演说明星。'}
];
const card = [
    {
        img: require('../../assets/image/home/program.png'),
        h1: '个人品牌方案班',
        h2: '从小众走向大众',
        one: '全新思维方式',
        two: '专属流量型人设 ',
        three: '演说家特有的训练方法',
        four: '导演组特别互动指导',
        text: '所有竞争都是资源的抢夺，如何在这个时代让自己持续升值，让人脉、资本主动找上自己，拥有一呼百应的能力。',
    },
    {
        img: require('../../assets/image/home/shape.png'),
        h1: '个人品牌塑造营',
        h2: '明星影响力 为自己代言',
        one: '用演说重塑明星级影响力',
        two: '加速个人品牌溢价',
        three: '构建品牌演说思路',
        four: '驱动自我价值的产出',
        text: '同样的个体，为什么有人自带明星光环?同样的产品，为什么有些自带流量?用独特个人品牌成就闪光自我。'
    },
    {
        img: require('../../assets/image/home/training.png'),
        h1: '明星力集训营',
        h2: '优秀自屈 明星的素养',
        one: '建立榜样力量激发梦想',
        two: '树立不甘平庸的信仰',
        three: '新闻演播室录制、舞台体验',
        four: '让孩子成为自我驱动型人才',
        text: '逼迫式学习就能成长?灌输式教育就能成长?成为聚光灯下的孩子建立不甘平庸的信仰。'
    }
];


const warp = {name: '嘎嘎', company: '经济的角度看', src: 'https://www.runoob.com/try/demo_source/movie.mp4'};
export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tutorList: [],
            teacherList: [],
            town: [],
            latestNews: [],
            pastNews: [],
        }
    }

    componentDidMount() {
        this.loadData();
    }

    edit = (id) => {
        App.go(`/article/${id}`);
    };
    loadData = () => {
        let {type, tutorList = [], teacherList = [], latestNews = [], pastNews = []} = this.state;
        App.api('/ws/home/trainers', {
            trainerQo: JSON.stringify({
                type,
                pageSize: 30
            })
        }).then((result) => {
            let {content} = result;
            content.map((item, index) => {
                let {type} = item;
                if (type === 1 && tutorList.length < 3) {

                    tutorList.push(item);
                } else if (type === 2 && teacherList.length < 3) {
                    teacherList.push(item);
                }
            });
            this.setState({tutorList, teacherList});
        });
        App.api('ws/home/findAllCampus', {
            campusQo: JSON.stringify({
                pageSize: 30
            })
        }).then((list) => {
            let {content = []} = list;
            this.setState({town: content})
        });
        App.api('/ws/home/articles', {articleQo: JSON.stringify({type, pageSize: 30})}).then((news) => {
            let {content = []} = news;
            content.map((item, index) => {
                let {type} = item;
                if (type === 1 && latestNews.length < 4) {
                    latestNews.push(item);
                } else if (type === 2 && pastNews.length < 4) {
                    pastNews.push(item);
                }
            });
            this.setState({latestNews, pastNews});
        });
    };

    render() {
        let {tutorList = [], teacherList = [], town = [], latestNews = [], pastNews = []} = this.state;
        return <div className="home-box">
            <div className="banner">
                <Banners/>
            </div>
            <div className="wingBlank">
                <div className="piece">
                    <div className="title">
                        <h2 className="mark">国内首档语言竞技节目</h2>
                        <h2>专注演说领域走过10季璀璨之路</h2>
                    </div>
                    <div className="content">
                        <div className="top">
                            <ul>
                                <li/>
                                <li/>
                                <li/>
                            </ul>
                            <div className="text p-list">
                                <p>
                                    2013年8月1日演说家系列节目首播
                                </p>
                                <p>
                                    一档以“语言表达”为核心的原创性节目
                                </p>
                                <p>
                                    改变传统话语方式共同见证语言的力量
                                </p>
                                <p>
                                    走过七年十季演说家系列节目已锁定演说类节目王牌地位
                                </p>
                            </div>
                        </div>
                        <div className="bottom" onClick={() => {
                            Utils.view(warp);
                        }}>
                            <div className="icon-play"/>
                        </div>
                    </div>
                </div>
                <div className="piece seven">
                    <div className="title">
                        <h2 className="mark">七年厚积薄发</h2>
                        <h2>只为祝你奋力翱翔</h2>
                    </div>
                    <div className="content">
                        <div className="box college"/>
                        <div className="top">
                            <div className="text color">
                                <p>
                                    超级演说家学院是中国领先的华语培训的创新产业机构，
                                    效果式华语演说体系创立者，以演说为载体帮助学员收货认同感、获得感、成就感。
                                </p>
                                <p>
                                    超级演说家学院是能量慧明基于《演说家》系列语言表达节目的7年研究精华延展至演说培训领域的成果。
                                </p>
                            </div>
                            <div className="people">
                                <span>超级演说家总导演&nbsp;&nbsp;崎本涵涵</span>
                            </div>
                        </div>
                    </div>
                    <div className="strip">
                        <ul>
                            {synopsis.map((item, index) => {
                                let {icon, title, text} = item;
                                return <li key={index}>
                                    <img src={icon} className="icon" alt="图标"/>
                                    <div className="title">{title}</div>
                                    <div className="text">{text}</div>
                                </li>
                            })}
                        </ul>
                    </div>
                </div>
                <div className="brand piece">
                    <div className="title">
                        <h2 className="mark">知行合一</h2>
                        <h2>改变自己从这里开始</h2>
                    </div>
                    <div className="card_list">
                        <div className="card">
                            {card.map((item, index) => {
                                let {img, h1, h2, one, two, three, four, text} = item;
                                return <div key={index} className="item">
                                    <div className="top">
                                        <img src={img} alt="快照"/>
                                        <div className="foot">
                                            <h1>{h1}</h1>
                                            <h2>{h2}</h2>
                                            <div className="list-p">
                                                <p>{one}</p>
                                                <p>{two}</p>
                                                <p>{three}</p>
                                                <p>{four}</p>
                                            </div>
                                            <div className="btn" onClick={() => {
                                                ApplyUtils.modal(h1);
                                            }}>咨询该课程
                                            </div>
                                        </div>
                                    </div>
                                    <div className="text">{text}</div>
                                </div>
                            })}
                        </div>
                    </div>
                </div>
                <div className="piece change">
                    <div className="title start">
                        <h2 className="mark">超级演说家讲堂 </h2>
                        <h2>在线随时学演说</h2>
                    </div>
                    <div className="grid">
                        <div className="left"/>
                        <div className="right">
                            <div className="top"/>
                            <div className="bottom">
                                <div className="first"/>
                                <div className="second">
                                    <div className="btn" onClick={() => {
                                        ApplyUtils.receive();
                                    }}>免费领取
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="piece teacher-list">
                    <div className="title">
                        <h2 className="mark">成功的重量级导师</h2>
                        <h2>才不会纸上谈兵</h2>
                    </div>
                    <ul className="tutorList">
                        {tutorList.map((tutor, index) => {
                            let {mobImg, name, intro, masterPiece} = tutor;
                            return <li key={index}>
                                <div className="avatar">
                                    <img src={mobImg} alt="头像"/>
                                </div>
                                <div className="right">
                                    <div className="present">{intro}</div>
                                    <div className="bottom">
                                        <div className="name">{name}</div>
                                        <div className="masterpiece">
                                            <div className="delegate">代表作</div>
                                            {masterPiece}
                                        </div>
                                    </div>

                                </div>

                            </li>
                        })}
                    </ul>
                    <ul className="ordinary">
                        {teacherList.map((teacher, index) => {
                            let {pcImg, name, intro, masterPiece} = teacher;
                            return <li className="teacher" key={index}>
                                <div className="avatar">
                                    <img src={pcImg} alt="头像"/>
                                </div>
                                <div className="bottom">
                                    <div className="name">{name}</div>
                                    <div className="summary">{intro}</div>
                                    <div className="detail">{masterPiece}</div>
                                </div>
                            </li>
                        })}
                    </ul>
                </div>
                <div className="piece campus">
                    <div className="title">
                        <h2 className="mark">30多家城市校区</h2>
                        <h2>助你开启远大前程</h2>
                    </div>
                    <div className="map"/>
                    <div className="title">
                        <h2>总部</h2>
                        <div className="campus-detail">
                            <div>凤凰国际传媒中心</div>
                            <div>
                                <span className="address">北京市朝阳区朝阳公园南路3号</span>
                                <span className="tel">电话:010-65207247</span>
                            </div>

                        </div>
                        <h2>城市校区</h2>
                        <div className="city-campus">
                            {town.map((item, index) => {
                                let {name, company} = item;
                                return <div className={index > 3 ? 'none' : 'city'} key={index}>
                                    <div className="address font">{name}</div>
                                    <div className="operation font">校区运营：{company}</div>
                                </div>
                            })}
                        </div>
                    </div>
                </div>
                <div className="latestNews piece">
                    <div className="title">
                        <h2 className="mark">关注学院最新资讯</h2>
                        <h2>了解演说家前沿动态</h2>
                    </div>
                    <ul className="latest-news-list">
                        {latestNews.map((item, index) => {
                            let {id, img, intro} = item;
                            return <li key={index} onClick={() => {
                                this.edit(id);
                            }}>
                                <img src={img} alt="资讯配图"/>
                                <p>{intro}</p>
                            </li>
                        })}
                    </ul>
                </div>

                <div className="latestNews piece">
                    <div className="title">
                        <h2 className="mark">回望往期课堂</h2>
                        <h2>领略学员风采</h2>
                    </div>
                    <ul className="latest-news-list">
                        {pastNews.map((item, index) => {
                            let {id, img, intro} = item;
                            return <li key={index} onClick={() => {
                                this.edit(id);
                            }}>
                                <img src={img} alt="资讯配图"/>
                                <p>{intro}</p>
                            </li>
                        })}
                    </ul>
                </div>
            </div>


        </div>
    }
}
