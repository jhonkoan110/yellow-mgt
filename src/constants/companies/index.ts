import { MAIN_DATA } from 'constants/main-data';
import { Companies, CompanyCase, CompanyData } from 'types/company';

type FullCase = CompanyCase & Pick<CompanyData, 'name' | 'addition'> & {companyName: string};

export const ALL_CASES = Object.keys(MAIN_DATA).map((key) =>
    MAIN_DATA[key as Companies]?.reduce<FullCase[]>((acc, curr) => {
        return [...acc, ...curr.cases.map((caseItem) => ({ ...caseItem, companyName: key, name: curr.name, addition: curr.addition }))];
    }, []),
)[0];
