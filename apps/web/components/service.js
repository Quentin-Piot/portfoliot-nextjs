import React from 'react';
import Layout from '../containers/common/common-layout'
import Service1 from '../pages/layouts/sections/index/services';
import Service2 from '../pages/layouts/sections/modern-sass/feature';
import Service3 from '../pages/layouts/sections/app/services';
import Service4 from '../pages/layouts/sections/agency/service';

const Service = () => (
    <Layout pathList={['elements', 'service']} pathTitle="elements with service">
        <Service1 />

        <div className="inner-service">
            <Service2 />
        </div>

        <Service3 />

        <Service4 />

    </Layout>
)

export default Service;
