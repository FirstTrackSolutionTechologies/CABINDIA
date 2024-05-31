export const navItems = [
    {
        name: 'Home',
        link: '/'
    },
    {
        name: 'Career',
        link: '/career'
    },
    {
        name: 'Services',
        link: '/services',
        dropdown:true,
        dropdownOptions: [
            {
                name: 'Cabs',
                link: '/cabs'
            },
            {
                name: 'Food Delivery',
                link: '/foodDelivery'
            },
            {
                name: 'Logistics',
                link: '/logistics'
            }
        ],
    },
    {
        name: 'About Us',
        link: '/aboutus'
    }
    
]