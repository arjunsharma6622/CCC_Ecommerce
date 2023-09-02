import React from 'react'
import UserProfile from '../../Components/UserProfile/UserProfile'
import OrderHistory from '../../Components/OrderHistory/OrderHistory'
import AnalyticsDashboard from '../../Components/AnalyticsDashboard/AnalyticsDashboard'
import './UserDashboard.css'
import { brandData, spendData, user } from '../../Products'

export const UserDashboard = () => {
    return (
        <div className="dash-container">
        <div className='dash'>
            <div className='dash-top'>
                <UserProfile user={user} className='dash-top-user'/>
                <OrderHistory  className='dash-top-order'/>
            </div>
            <div className='dash-bottom'>
                <AnalyticsDashboard spendData={spendData} brandData={brandData} />
            </div>
        </div>
        </div>
    )
}
