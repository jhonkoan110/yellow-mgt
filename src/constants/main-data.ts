import { Companies, CompanyData } from 'types/company';
import { IGG_DATA } from './companies/igg';

export const MAIN_DATA: {
    [key in Companies]?: CompanyData[];
} = {
    [Companies.IGG]: IGG_DATA,
};
