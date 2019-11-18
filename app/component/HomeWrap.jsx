import React from 'react';

import '../assets/css/common.scss'
import '../assets/css/page/home-wrap.scss'
import {Utils} from "../common";
import {Footer, Header} from "./Comps";

export default class HomeWrap extends React.Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {
        window.addEventListener('hashchange', () => {
            window.scrollTo(0);
            this.judgePage();
        });
        this.judgePage();
    }


    judgePage = () => {

        window.removeEventListener('scroll', this.doScroll);
        let loc = window.location.hash;
        let specialPage = loc.indexOf("#/article/") > -1;
        let menu = document.getElementsByClassName("top-header")[0];
        menu.className = specialPage ? "top-header top-header-innerpage" : "top-header";
        if (!specialPage) {
            window.addEventListener('scroll', this.doScroll);
        } else {
            let menu = document.getElementsByClassName("top-header")[0];
            menu.className = "top-header top-header-fixed";
        }
    };

    doScroll = () => {
        let topScroll = document.documentElement.scrollTop || document.body.scrollTop;
        let menu = document.getElementsByClassName("top-header")[0];
        if (topScroll > 100) {
            menu.className = "top-header top-header-fixed";
        } else {
            menu.className = "top-header";
        }
    };



    render() {
        return <div className='home-wrap'>
            <Header/>
            <div className='inner-page'>
                {this.props.children}
            </div>
            <Footer/>
        </div>
    }
}
