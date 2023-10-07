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

import tencentPubgProLeague1 from '../images/cases/tencent-pubg-pro-league-1.jpg'
import tencentPubgProLeague2 from '../images/cases/tencent-pubg-pro-league-2.jpg'
import tencentPubgProLeague3 from '../images/cases/tencent-pubg-pro-league-3.jpg'

export const MAIN_DATA: {
    [key in Companies]?: CompanyData[];
} = {
    [Companies.IGG]: IGG_DATA,
};

const obj = {
    [Companies.IGG]: {
        1: {
            id: 1,
            title: 'lords mobile',
            addition: '360° Campaign Development',
            cases: [
                {
                    id: 1,
                    link: '/youtube',
                    imageSrc: '',
                },
                {
                    id: 2,
                    link: '/youtube',
                    imageSrc: '',
                },
            ],
        },
        2: {
            id: 2,
            title: 'time princess',
            addition: '360° Campaign Development',
            cases: [
                {
                    id: 1,
                    link: '/youtube',
                    imageSrc: '',
                },
                {
                    id: 2,
                    link: '/youtube',
                    imageSrc: '',
                },
                {
                    id: 3,
                    link: '/youtube',
                    imageSrc: '',
                },
                {
                    id: 4,
                    link: 'dgraph / youtube',
                    imageSrc: '',
                },
            ],
        },
        3: {
            id: 3,
            title: 'Time Princess. Cosplay. Instagram',
            addition: '360° Campaign Development',
            cases: [
                {
                    id: 1,
                    link: 'burning.princess / instagram',
                    imageSrc: '',
                },
                {
                    id: 2,
                    link: '_raspytina_ / instagram',
                    imageSrc: '',
                },
            ],
        },
    },
    [Companies.WildLife]: {
        1: {
            id: 1,
            title: 'Zooba & Tennis Clash',
            addition: '360° Campaign Development',
            cases: [
                {
                    id: 1,
                    link: '/ youtube',
                    imageSrc: '',
                },
                {
                    id: 2,
                    link: '/ youtube',
                    imageSrc: '',
                },
                {
                    id: 3,
                    link: '/ youtube',
                    imageSrc: '',
                },
            ],
        },
    },
    [Companies.MatchGroup]: {
        1: {
            id: 1,
            title: 'Ablo',
            addition: '360° Campaign Development',
            cases: [
                {
                    id: 1,
                    link: 'aveme lissa / ig story',
                    imageSrc: '',
                },
                {
                    id: 2,
                    link: 'aveme lissa / ig story',
                    imageSrc: '',
                },
                {
                    id: 3,
                    link: 'Dima Ermuzevich / ig story',
                    imageSrc: '',
                },
                {
                    id: 4,
                    link: 'glossmix / IG story',
                    imageSrc: '',
                },
                {
                    id: 5,
                    link: 'Kostiakina Yelyzaveta / IG story',
                    imageSrc: '',
                },
                {
                    id: 6,
                    link: 'Maniloun / ig story',
                    imageSrc: '',
                },
                {
                    id: 7,
                    link: 'Nastya Molkova / IG story',
                    imageSrc: '',
                },
                {
                    id: 8,
                    link: 'mar.maries / IG story',
                    imageSrc: '',
                },
                {
                    id: 9,
                    link: 'dgraph / ig story',
                    imageSrc: '',
                },
                {
                    id: 10,
                    link: 'Evelinushka / ig story',
                    imageSrc: '',
                },
                {
                    id: 11,
                    link: 'mar.maries / youtube',
                    imageSrc: '',
                },
            ],
        },
        2: {
            id: 2,
            title: 'pubg mobile. pro league europe championship season 1',
            addition: '360° Campaign Development',
            cases: [
                {
                    id: 1,
                    link: 'Kika Kim / tiktok',
                    imageSrc: '',
                },
                {
                    id: 2,
                    link: 'Dasha Dzhakeli / tiktok',
                    imageSrc: '',
                },
                {
                    id: 3,
                    link: 'TIM / tiktok',
                    imageSrc: '',
                },
            ],
        },
    },
    [Companies.Masomo]: {
        1: {
            id: 1,
            title: 'basketball arena.',
            addition: '360° Campaign Development',
            cases: [
                {
                    id: 1,
                    link: 'Lesha Maisak / youtube',
                    imageSrc: '',
                },
            ],
        },
    },
    [Companies.TencentGames]: {
        1: {
            id: 1,
            title: 'pubg mobile. (song)',
            addition: '360° Campaign Development',
            cases: [
                {
                    id: 1,
                    link: 'PUBG MOBILE СНГ / youtube',
                    imageSrc: '',
                },
            ],
        },
        2: {
            id: 2,
            title: 'pubg mobile x League of Legends',
            addition: '360° Campaign Development',
            cases: [
                {
                    id: 1,
                    link: 'danya milokhin / youtube',
                    imageSrc: '',
                },
            ],
        },
    },
    [Companies.Nutaku]: {},
    [Companies.OasisGames]: {},
};

interface Tmp {
    id: number | string;
    companyName: Companies;
    title: string;
    addition: string;
    cases: {
        id: number;
        link: string;
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
        cases: [
            {
                id: 1,
                link: '/youtube',
                imageSrc: iggLordsMobile1,
            },
            {
                id: 2,
                link: '/youtube',
                imageSrc: iggLordsMobile2,
            },
        ],
    },
    2: {
        id: 2,
        companyName: Companies.IGG,
        title: 'time princess',
        addition: '360° Campaign Development',
        cases: [
            {
                id: 1,
                link: '/youtube',
                imageSrc: iggTimePrincess1,
            },
            {
                id: 2,
                link: '/youtube',
                imageSrc: iggTimePrincess2,
            },
            {
                id: 3,
                link: '/youtube',
                imageSrc: iggTimePrincess3,
            },
            {
                id: 4,
                link: 'dgraph / youtube',
                imageSrc: iggTimePrincess4,
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
        cases: [
            {
                id: 1,
                link: 'burning.princess / instagram',
                imageSrc: iggCosplay1,
                height: 417,
            },
            {
                id: 2,
                link: '_raspytina_ / instagram',
                imageSrc: iggCosplay2,
                height: 417,
            },
        ],
    },
    5: {
        id: 5,
        companyName: Companies.WildLife,
        addition: '360° Campaign Development',
        title: 'Zooba & Tennis Clash',
        cases: [
            {
                id: 1,
                link: '/ youtube',
                imageSrc: wildlifeZooba1,
            },
            {
                id: 2,
                link: '/ youtube',
                imageSrc: wildlifeZooba2,
            },
            {
                id: 3,
                link: '/ youtube',
                imageSrc: wildlifeZooba3,
            },
        ],
    },
    6: {
        id: 6,
        companyName: Companies.MatchGroup,
        title: 'Ablo',
        addition: '360° Campaign Development',
        cases: [
            {
                id: 1,
                link: 'aveme lissa / ig story',
                imageSrc: matchGroupAblo1,
                isShortView: true,
            },
            {
                id: 2,
                link: 'aveme lissa / ig story',
                imageSrc: matchGroupAblo2,
                isShortView: true,
            },
            {
                id: 3,
                link: 'Dima Ermuzevich / ig story',
                imageSrc: matchGroupAblo3,
                isShortView: true,
            },
            {
                id: 4,
                link: 'glossmix / IG story',
                imageSrc: matchGroupAblo4,
                isShortView: true,
            },
            {
                id: 5,
                link: 'Kostiakina Yelyzaveta / IG story',
                imageSrc: matchGroupAblo5,
                isShortView: true,
            },
            {
                id: 6,
                link: 'Maniloun / ig story',
                imageSrc: matchGroupAblo6,
                isShortView: true,
            },
            {
                id: 7,
                link: 'Nastya Molkova / IG story',
                imageSrc: matchGroupAblo7,
                isShortView: true,
            },
            {
                id: 8,
                link: 'mar.maries / IG story',
                imageSrc: matchGroupAblo8,
                isShortView: true,
            },
            {
                id: 9,
                link: 'dgraph / ig story',
                imageSrc: matchGroupAblo9,
                isShortView: true,
            },
            {
                id: 10,
                link: 'Evelinushka / ig story',
                imageSrc: matchGroupAblo10,
                isShortView: true,
            },
            {
                id: 11,
                link: 'mar.maries / youtube',
                imageSrc: matchGroupAblo11,
            },
        ],
    },
    7: {
        id: 7,
        companyName: Companies.Masomo,
        title: 'basketball arena',
        addition: '360° Campaign Development',
        cases: [
            {
                id: 1,
                link: 'Lesha Maisak / youtube',
                imageSrc: masomoBasketball1,
            },
        ],
    },
    8: {
        id: 8,
        companyName: Companies.TencentGames,
        title: 'pubg mobile (song)',
        addition: '360° Campaign Development',
        cases: [
            {
                id: 1,
                link: 'PUBG MOBILE СНГ / youtube',
                imageSrc: tencentPubgMobileSong1,
            },
        ],
    },
    9: {
        id: 9,
        companyName: Companies.TencentGames,
        addition: '360° Campaign Development',
        title: 'pubg mobile. pro league europe championship season 1',
        cases: [
            {
                id: 1,
                link: 'Kika Kim / tiktok',
                imageSrc: tencentPubgProLeague1,
                isShortView: true,
            },
            {
                id: 2,
                link: 'Dasha Dzhakeli / tiktok',
                imageSrc: tencentPubgProLeague2,
                isShortView: true
            },
            {
                id: 3,
                link: 'TIM / tiktok',
                imageSrc: tencentPubgProLeague3,
                isShortView: true
            },
        ],
    },
};

interface FullCase {
    id: number | string;
    companyName: Companies;
    title: string;
    addition: string;
    link: string;
    imageSrc: string;
}

export const ALL_CASES_2 = Object.keys(jData).map((key) => jData[key]);

// ALL_CASES[0].
