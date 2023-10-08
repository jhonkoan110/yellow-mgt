import { MAIL } from 'constants/mail';

export const copyMail = () => {
    try {
        if ('clipboard' in navigator) {
            navigator.clipboard.writeText(MAIL);
        } else {
            document.execCommand('copy', true, MAIL);
        }
    } catch (e) {
        alert((e as Error).message);
    }
};
