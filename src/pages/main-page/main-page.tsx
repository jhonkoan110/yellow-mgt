import React from 'react';
import { AboutUs } from 'components/about-us';
import { Cases } from 'components/cases';
import { MainInfo } from 'components/main-info';
import { OurServices } from 'components/our-services';
import { Topic } from 'components/topic';
import { WeWorkedWith } from 'components/we-worked-with';
import { Feedback } from 'components/feedback';

export const MainPage = () => {
    return (
        <>
            <MainInfo />

            <Topic title="about us" />
            <AboutUs />

            <Topic title="our services" />
            <OurServices />

            <Topic title="cases" />
            <Cases />

            <Topic title="we worked with" />
            <WeWorkedWith />

            <Feedback />
        </>
    );
};
