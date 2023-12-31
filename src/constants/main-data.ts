import { Companies, CompanyData } from 'types/company';
import { IGG_DATA } from './companies/igg';

import iggLordsMobile1 from '../images/cases/igg-lords-mobile-1.jpg';
import iggLordsMobile2 from '../images/cases/igg-lords-mobile-2.jpg';

import iggTimePrincess1 from '../images/cases/igg-time-princess-1.jpg';
import iggTimePrincess2 from '../images/cases/igg-time-princess-2.jpg';
import iggTimePrincess3 from '../images/cases/igg-time-princess-3.jpg';
import iggTimePrincess4 from '../images/cases/igg-time-princess-4.jpg';

import iggCosplay1 from '../images/cases/igg-cosplay-1.jpg';
import iggCosplay2 from '../images/cases/igg-cosplay-2.jpg';

import wildlifeZooba1 from '../images/cases/wildlife-zooba-1.jpg';
import wildlifeZooba2 from '../images/cases/wildlife-zooba-2.jpg';
import wildlifeZooba3 from '../images/cases/wildlife-zooba-3.jpg';

import matchGroupAblo1 from '../images/cases/match-group-ablo-1.jpg';
import matchGroupAblo2 from '../images/cases/match-group-ablo-2.jpg';
import matchGroupAblo3 from '../images/cases/match-group-ablo-3.jpg';
import matchGroupAblo4 from '../images/cases/match-group-ablo-4.jpg';
import matchGroupAblo5 from '../images/cases/match-group-ablo-5.jpg';
import matchGroupAblo6 from '../images/cases/match-group-ablo-6.jpg';
import matchGroupAblo7 from '../images/cases/match-group-ablo-7.jpg';
import matchGroupAblo8 from '../images/cases/match-group-ablo-8.jpg';
import matchGroupAblo9 from '../images/cases/match-group-ablo-9.jpg';
import matchGroupAblo10 from '../images/cases/match-group-ablo-10.jpg';
import matchGroupAblo11 from '../images/cases/match-group-ablo-11.jpg';

import masomoBasketball1 from '../images/cases/masomo-basketball-1.jpg';

import tencentPubgMobileSong1 from '../images/cases/tencent-pubg-mobile-song-1.jpg';

import tencentPubgProLeague1 from '../images/cases/tencent-pubg-pro-league-1.jpg';
import tencentPubgProLeague2 from '../images/cases/tencent-pubg-pro-league-2.jpg';
import tencentPubgProLeague3 from '../images/cases/tencent-pubg-pro-league-3.jpg';

import tencentMobileLeagueOfLegends1 from '../images/cases/tencent-mobile-league-of-legends-1.jpg';

import lordsMobileLogo from '../images/lords-mobile-logo.png';
import pubgMobileLogo from '../images/pubg-mobile-logo.png';
import basketballArenaLogo from '../images/basketball-arena-logo.png';
import abloLogo from '../images/ablo-logo.png';
import tennisClashLogo from '../images/tennis-clash-logo.png';
import timePrincessLogo from '../images/time-princess-logo.png';

export const MAIN_DATA: {
    [key in Companies]?: CompanyData[];
} = {
    [Companies.IGG]: IGG_DATA,
};

interface Tmp {
    id: number | string;
    companyName: Companies;
    title: string;
    addition: string;
    productLogo?: string;
    cases: {
        id: number;
        link: string;
        description: string;
        imageSrc: string;
        height?: number;
        isShortView?: boolean;
    }[];
}

export const jData: Record<string, Tmp> = {
    1: {
        id: 1,
        companyName: Companies.IGG,
        title: 'lords mobile',
        addition: '360° Campaign Development',
        productLogo: lordsMobileLogo,
        cases: [
            {
                id: 1,
                link: 'https://www.youtube.com/watch?v=pK_UM3VHraM',
                imageSrc: iggLordsMobile1,
                description: 'BRIGMAN / youtube',
            },
            {
                id: 2,
                link: 'https://www.youtube.com/watch?v=p_rI2lskBps&t=7s',
                imageSrc: iggLordsMobile2,
                description: 'ЛЁЛЯ ТАКСИ / youtube',
            },
        ],
    },
    2: {
        id: 2,
        companyName: Companies.IGG,
        title: 'time princess',
        productLogo: timePrincessLogo,
        addition: '360° Campaign Development',
        cases: [
            {
                id: 1,
                link: 'https://youtu.be/fluUtob2Vb4?si=pC7lvEnAxt9fY6eP',
                imageSrc: iggTimePrincess1,
                description: 'Tilka Play / youtube',
            },
            {
                id: 2,
                link: 'https://youtu.be/DXcGCzN5Guo',
                imageSrc: iggTimePrincess2,
                description: 'Алиса Лисова / youtube',
            },
            {
                id: 3,
                link: 'https://www.youtube.com/watch?v=I4dyku1bGmM',
                imageSrc: iggTimePrincess3,
                description: 'eto liana / youtube',
            },
            {
                id: 4,
                link: 'https://www.youtube.com/watch?v=Y91xUOw9N94',
                imageSrc: iggTimePrincess4,
                description: 'Daria Graph / youtube',
            },
        ],
    },
    // 3: {
    //     id: 3,
    //     companyName: Companies.IGG,
    //     title: 'Time Princess. Tik Tok',
    //     addition: '360° Campaign Development',
    //     cases: [
    //         {
    //             id: 1,
    //             link: '/youtube',
    //             imageSrc: '',
    //         },
    //         {
    //             id: 2,
    //             link: '/youtube',
    //             imageSrc: '',
    //         },
    //     ],
    // },
    4: {
        id: 4,
        companyName: Companies.IGG,
        title: 'Time Princess. Cosplay. Instagram',
        addition: '360° Campaign Development',
        productLogo: timePrincessLogo,
        cases: [
            {
                id: 1,
                link: 'https://www.instagram.com/p/CNKjXKrMpui/?igshid=ssvgs12nsnhz',
                imageSrc: iggCosplay1,
                height: 417,
                description: 'burning.princess / instagram',
            },
            {
                id: 2,
                link: 'https://www.instagram.com/p/CNKi9cmgKmZ/?img_index=1',
                imageSrc: iggCosplay2,
                height: 417,
                description: '_raspytina_ / instagram',
            },
        ],
    },
    5: {
        id: 5,
        companyName: Companies.WildLife,
        addition: '360° Campaign Development',
        title: 'Zooba & Tennis Clash',
        productLogo: tennisClashLogo,
        cases: [
            {
                id: 1,
                link: 'https://www.youtube.com/watch?v=0xj6QJFzi2g&t=94s',
                imageSrc: wildlifeZooba1,
                description: 'LINE / youtube',
            },
            {
                id: 2,
                link: 'https://www.youtube.com/watch?v=cNDxBWToyxQ',
                imageSrc: wildlifeZooba2,
                description: 'Fan PDA / youtube',
            },
            {
                id: 3,
                link: 'https://www.youtube.com/watch?v=lRMgKuV3MrE',
                imageSrc: wildlifeZooba3,
                description: 'КиноИндустрия / youtube',
            },
        ],
    },
    6: {
        id: 6,
        companyName: Companies.MatchGroup,
        title: 'Ablo',
        addition: '360° Campaign Development',
        productLogo: abloLogo,
        cases: [
            {
                id: 1,
                link: '',
                imageSrc: matchGroupAblo1,
                isShortView: true,
                description: 'aveme lissa / ig story',
            },
            {
                id: 2,
                link: '',
                imageSrc: matchGroupAblo2,
                isShortView: true,
                description: 'aveme lissa / ig story',
            },
            {
                id: 3,
                link: '',
                imageSrc: matchGroupAblo3,
                isShortView: true,
                description: 'Dima Ermuzevich / ig story',
            },
            {
                id: 4,
                link: '',
                imageSrc: matchGroupAblo4,
                isShortView: true,
                description: 'glossmix / IG story',
            },
            {
                id: 5,
                link: '',
                imageSrc: matchGroupAblo5,
                isShortView: true,
                description: 'Kostiakina Yelyzaveta / IG story',
            },
            {
                id: 6,
                link: '',
                imageSrc: matchGroupAblo6,
                isShortView: true,
                description: 'Maniloun / ig story',
            },
            {
                id: 7,
                link: '',
                imageSrc: matchGroupAblo7,
                isShortView: true,
                description: 'Nastya Molkova / IG story',
            },
            {
                id: 8,
                link: '',
                imageSrc: matchGroupAblo8,
                isShortView: true,
                description: 'mar.maries / IG story',
            },
            {
                id: 9,
                link: '',
                imageSrc: matchGroupAblo9,
                isShortView: true,
                description: 'dgraph / ig story',
            },
            {
                id: 10,
                link: '',
                imageSrc: matchGroupAblo10,
                isShortView: true,
                description: 'Evelinushka / ig story',
            },
            {
                id: 11,
                link: 'https://youtu.be/CiaE8kVSL_0?si=CJTy3mwPAYg2qbkj&t=229',
                imageSrc: matchGroupAblo11,
                description: 'mar.maries / youtube',
            },
        ],
    },
    7: {
        id: 7,
        companyName: Companies.Masomo,
        title: 'basketball arena',
        addition: '360° Campaign Development',
        productLogo: basketballArenaLogo,
        cases: [
            {
                id: 1,
                link: 'https://youtu.be/lmcF7JS4_R4?si=ZN54TUWDt73bd8G1&t=200',
                imageSrc: masomoBasketball1,
                description: 'Lesha Maisak / youtube',
            },
        ],
    },
    8: {
        id: 8,
        companyName: Companies.TencentGames,
        title: 'pubg mobile (song)',
        addition: '360° Campaign Development',
        productLogo: pubgMobileLogo,
        cases: [
            {
                id: 1,
                link: 'https://www.youtube.com/watch?v=mxyu5lIukyM',
                imageSrc: tencentPubgMobileSong1,
                description: 'PUBG MOBILE СНГ / youtube',
            },
        ],
    },
    9: {
        id: 9,
        companyName: Companies.TencentGames,
        addition: '360° Campaign Development',
        productLogo: pubgMobileLogo,
        title: 'pubg mobile. pro league europe championship season 1',
        cases: [
            {
                id: 1,
                link: 'https://www.tiktok.com/@kikakiim/video/7030026999682927873',
                imageSrc: tencentPubgProLeague1,
                isShortView: true,
                description: 'Kika Kim / tiktok',
            },
            {
                id: 2,
                link: 'https://vm.tiktok.com/ZGJnnQhKs/',
                imageSrc: tencentPubgProLeague2,
                isShortView: true,
                description: 'Dasha Dzhakeli / tiktok',
            },
            {
                id: 3,
                link: 'https://vm.tiktok.com/ZGJnn5Kr4/',
                imageSrc: tencentPubgProLeague3,
                isShortView: true,
                description: 'TIM / tiktok',
            },
        ],
    },
    10: {
        id: 10,
        companyName: Companies.TencentGames,
        addition: '360° Campaign Development',
        title: 'pubg mobile x League of Legends',
        productLogo: pubgMobileLogo,
        cases: [
            {
                id: 1,
                imageSrc: tencentMobileLeagueOfLegends1,
                link: 'https://www.youtube.com/watch?v=MXkjK856hKg',
                description: 'danya milokhin / youtube',
            },
        ],
    },
};

export const ALL_CASES_2 = Object.keys(jData).map((key) => jData[key]);
