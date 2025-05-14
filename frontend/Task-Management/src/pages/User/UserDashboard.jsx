// import React from 'react'
// import { useUserAuth } from '../../hooks/useUserAuth'



// const UserDashboard =()=>{
//     useUserAuth();
//     return(
//         <div>UserDashboard</div>
//     )
// }

// export default UserDashboard


import React from 'react';
import { useUserAuth } from '../../hooks/useUserAuth';
import DashboardLayout from '../../components/layouts/DashboardLayout';  // Import the layout component

const UserDashboard = () => {
    useUserAuth();

    return (
        <DashboardLayout> 
            <div>User Dashboard</div>
        </DashboardLayout>
    );
}

export default UserDashboard;
