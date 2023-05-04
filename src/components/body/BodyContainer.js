import React from 'react';

export default function BodyContainer({children}){
    return (
        <div className="page-content">
            {children}
        </div>
    );
}