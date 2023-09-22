import React from 'react';

import { AboutUs } from 'components/about-us';
import { Cases } from 'components/cases';
import { MainInfo } from 'components/main-info';
import { OurServices } from 'components/our-services';
import { Topic } from 'components/topic';
import { WeWorkedWith } from 'components/we-worked-with';
import { Feedback } from 'components/feedback';
import { Anchors } from 'constants/anchors';
import { Outlet } from 'react-router-dom';

export const MainPage = () => {
    return (
        <>
            <MainInfo />

            <Topic title="about us" name={Anchors.AboutUs} />
            <AboutUs />

            <Topic title="our services" name={Anchors.OurServices} />
            <OurServices />

            <Topic title="cases" name={Anchors.Cases} />
            <Cases />

            <Topic title="we worked with" />
            <WeWorkedWith />

            <Feedback />
        </>
    );
};
