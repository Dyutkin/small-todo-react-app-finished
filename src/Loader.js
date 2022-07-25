import React from 'react';

// eslint-disable-next-line import/no-anonymous-default-export
export default(() => {
    return (
        <div 
            className="lds-dual-ring"
            style={{
                width: '100%',
                height: '50%', 
                display: 'flex', 
                flexDirection: 'row', 
                justifyContent: 'center', 
                alignItems: 'center',  
                margin: '.5rem'
            }} >
        </div>
    )
})
