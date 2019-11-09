import React from "react";
import "../../assets/css/page/article.scss";
import {App, U} from "../../common";
import {WingBlank} from "antd-mobile";


class Article extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: parseInt(this.props.match.params.id),
            article: {},
            next: {},
            last: {},
        }
    }

    componentDidMount() {
        this.loadData();
    }

    loadData = () => {
        let {id} = this.state;
        App.api('/adm/article/three_article', {id}).then((result) => {
            let {article, next, pre} = result;
            this.setState({article, next, pre})
        })
    };
    edit = (id) => {
        App.go(`/article/${id}`);
        window.location.reload();
    };

    render() {
        let {article = {}, next, pre} = this.state;
        let {title, createdAt, content, name, intro} = article;

        return <div className='article-page'>
            <WingBlank>
                <div className='top'>
                    <div className='title'>{title}</div>
                    <div className='date'>
                        <span className="name">作者姓名&nbsp;&nbsp;&nbsp;&nbsp;{name}&nbsp;&nbsp;</span>
                        <span className="time">{U.date.format(new Date(createdAt), 'yyyy-MM-dd')}</span>
                    </div>
                    <div className="abstract">
                        <div className="center">
                            <span className="font">摘要:</span>
                            <span className="text">{intro}</span>
                        </div>
                    </div>
                    <div className='content'>
                        <div dangerouslySetInnerHTML={{__html: content}}/>
                    </div>
                </div>
            </WingBlank>
            <div className="footer">
                {
                    pre !== undefined ? <div className="last arrow" onClick={() => {
                        this.edit(pre.id);
                    }}>
                        <img src="../../assets/image/article/left-arrow-1.png" alt="左箭头"
                             className="arrow-img left-arrow-img"/>
                        上一篇
                    </div> : <div className="no arrow">
                        <img src="../../assets/image/article/left-arrow-2.png" alt="左箭头"
                             className="arrow-img left-arrow-img"/>
                        没有了
                    </div>
                }
                <div className="home arrow" onClick={() => {
                    App.go('/');
                }}>返回首页
                </div>
                {next !== undefined ?
                    <div className="next arrow" onClick={() => {
                        this.edit(next.id);
                    }}>

                        下一篇
                        <img src="../../assets/image/article/right-arrow-1.png" alt="右箭头"
                             className="arrow-img right-arrow-img"/>
                    </div> : <div className="no arrow">
                        没有了
                        <img src="../../assets/image/article/right-arrow-2.png" alt="右箭头"
                             className="arrow-img right-arrow-img"/>
                    </div>
                }
            </div>
        </div>
    }
}

export default Article;