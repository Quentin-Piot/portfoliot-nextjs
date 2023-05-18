import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import Lightbox from "react-image-lightbox";
import { Container, Row, Col, Card, CardHeader, CardBody, Media } from 'reactstrap'
import { AllImgData, BagsImgData, FeshionImgData, ShoesImgData, WatchImgData } from './database';
import AllImgFun from './Gallerys/allImgs';
import FashionImgFunc from './Gallerys/fashionImgs';
import BagsImgFunc from './Gallerys/bagsImgs';
import WatchImgFuc from './Gallerys/watchImg';
import ShoesImgFun from './Gallerys/shoesImg';

const Basic = ({ className, title, subTitle, fluid }) => {
    const [activeTab, setActiveTab] = useState('1');

    return (
        <section className="portfolio-section fullwidth-portfolio masonray-sec zoom-gallery titles">
            <div className={fluid || 'container'}>
                <TabContent className="isotopeContainer row" activeTab={activeTab}>
                    <TabPane className="row" tabId="1">
                        <AllImgFun className={className} title={title} subTitle={subTitle} />
                    </TabPane>
                </TabContent>
            </div>
        </section>
    );
}

export default Basic;
