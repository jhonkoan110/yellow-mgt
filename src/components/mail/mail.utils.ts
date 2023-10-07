export const copyMail = () => {
    try {
        navigator.clipboard.writeText('nikita@yellowmgt.com');
    } catch {
        return;
    }
};
