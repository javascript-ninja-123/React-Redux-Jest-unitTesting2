import React from 'react';
import Wallet from './Wallet';
import Loot from './Loot';

const APP = () => {
        return (
            <div className="APP">
                  <h3>Wallet ballance</h3>
                  <Wallet/>
                  <Loot/>
            </div>
        );
}

export default APP
