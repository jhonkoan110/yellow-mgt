export enum Companies {
    IGG = 'igg',
    WildlifeStudios = 'wildlife studios',
    MatchGroup = 'match group',
    Masomo = 'masomo',
    Nutaku = 'nutaku',
    OasisGames = 'oasis games',
    WildLife = 'wild life',
    TencentGames = 'tencent games',
}

export interface CompanyCase {
    id: number | string;
    imageSrc: string;
    title: string;
    link: string;
    caseLabel: string;
}

export interface CompanyData {
    id: number;
    name: string;
    addition: string;
    cases: CompanyCase[];
}
