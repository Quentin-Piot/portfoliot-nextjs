import React from 'react';
import Layout from '../containers/common/common-layout'
import Testimonial1 from '../pages/layouts/sections/modern-sass/testimonial'
import Testimonial2 from '../pages/layouts/sections/event/testimonial'
import Testimonial3 from '../pages/layouts/sections/app/team'
import Testimonial4 from '../pages/layouts/sections/gym/testimonial'
import Testimonial5 from '../pages/layouts/sections/agency/testimonial'

const Testimonial = () => (
    <Layout pathList={['elements', 'testimonial']} pathTitle="elements with testimonial">
        <Testimonial1 />

        <Testimonial2 />

        <section className="pb-0">
            <Testimonial3 />
        </section>

        <Testimonial4 />

        <Testimonial5 />

    </Layout>
)

export default Testimonial;
