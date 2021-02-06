import React from 'react';
import GenderFilter from './GenderFilter'
import FilterByPaymentMtd from './FilterByPaymentMtd'

const SideNav = ({ genderChange, paymentMtd }) => {
    return ( 
        <div>
<GenderFilter genderChange= {genderChange}/>
            <FilterByPaymentMtd paymentMtd={paymentMtd}/>
        </div>
     );
}
 
export default SideNav;