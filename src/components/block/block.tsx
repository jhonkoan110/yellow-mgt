import React from 'react';

interface Props {
    className: string;
    mt: React.CSSProperties['marginTop'];
    mb: React.CSSProperties['marginBottom'];
    ml: React.CSSProperties['marginLeft'];
    mr: React.CSSProperties['marginRight'];
    pt: React.CSSProperties['paddingTop'];
    pb: React.CSSProperties['paddingBottom'];
    pl: React.CSSProperties['paddingLeft'];
    pr: React.CSSProperties['paddingRight'];
    width: React.CSSProperties['width'];
    children: React.ReactNode;
}

export const Block = ({ children, width, className, mb, ml, mr, mt, pt, pb, pl, pr }: Partial<Props>) => {
    return (
        <div
            className={className}
            style={{
                width,
                marginTop: mt,
                marginBottom: mb,
                marginLeft: ml,
                marginRight: mr,
                paddingTop: pt,
                paddingBottom: pb,
                paddingLeft: pl,
                paddingRight: pr,
            }}>
            {children}
        </div>
    );
};
