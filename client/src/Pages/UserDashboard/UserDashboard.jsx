import React from 'react'
import UserProfile from '../../Components/UserProfile/UserProfile'
import OrderHistory from '../../Components/OrderHistory/OrderHistory'
import AnalyticsDashboard from '../../Components/AnalyticsDashboard/AnalyticsDashboard'
import './UserDashboard.css'

export const UserDashboard = () => {

    const orders = [
        {   
            id: 1, 
            price: 1000, 
            date: "2023-01-01", 
            status: "Dispatched" ,
            totolAmount : "2569"
        },
        {   
            id: 2, 
            price: 1000, 
            date: "2023-01-01", 
            status: "On The Way" ,
            totolAmount : "2569"
        },
        {   
            id: 3, 
            price: 1000, 
            date: "2023-01-01", 
            status: "Out For Delivery" ,
            totolAmount : "2569"
        },
        {   
            id: 4, 
            price: 1000, 
            date: "2023-01-01", 
            status: "Delivered" ,
            totolAmount : "2569"
        },

    ];

    const spendData = [
        { 
            category: "Shirts", 
            AmountSpent: 3000 
        }, 
        { 
            category: "Tuxedos", 
            AmountSpent: 15000 
        }, 
        { 
            category: "Formals", 
            AmountSpent: 8390 
        }, 
        { 
            category: "Footwear", 
            AmountSpent: 3455 
        },
        { 
            category: "Acc", 
            AmountSpent: 6000 
        }, 
        { 
            category: "Traditional", 
            AmountSpent: 12399 
        }, 
 
    ];

    const brandData = [
        { 
            brand: "Nike", 
            ItemsCount: 10
        }, 
        { 
            brand: "Van", 
            ItemsCount: 1
        }, 
        { 
            brand: "Puma", 
            ItemsCount: 12
        }, 
        { 
            brand: "Adidas", 
            ItemsCount: 5
        }, 
        { 
            brand: "CK", 
            ItemsCount: 7 
        }, 
        { 
            brand: "LV", 
            ItemsCount: 9
        }, 


    ];


    const user = {
        username: 'Arjun Sharma',
        email: 'arjunsharma6622@gmail.com',
        img : 'https://t4.ftcdn.net/jpg/03/26/98/51/360_F_326985142_1aaKcEjMQW6ULp6oI9MYuv8lN9f8sFmj.jpg',
        gender : 'Male',
        number : '9700812822',

    };


    return (
        <div className="dash-container">
        <div className='dash'>
            <div className='dash-top'>
                <UserProfile user={user} />
                <OrderHistory orders={orders} />
            </div>
            <div className='dash-bottom'>
                <AnalyticsDashboard spendData={spendData} brandData={brandData} />
            </div>
        </div>
        </div>
    )
}
