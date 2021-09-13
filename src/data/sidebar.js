const sidebarData = {
    title: 'Lyrically',
    menu: [
        {
            id: 1,
            title: 'Dashboard',
            path: '/dashboard',
            icon: 'bx bx-grid-alt',
            hasSubmenu: false
        },
        {
            id: 2,
            title: 'Category',
            path: '/category',
            icon: 'bx bx-collection',
            hasSubmenu: true,
            submenu: [
                {
                    id: 1,
                    title: 'HTML & CSS',
                    path: '/html-css'
                },
                {
                    id: 2,
                    title: 'HTML & CSS',
                    path: '/html-css'
                },
                {
                    id: 3,
                    title: 'Javascript',
                    path: '/javascript'
                },
            ]
        },
        {
            id: 3,
            title: 'Albums',
            path: '/dashboard',
            icon: 'bx bx-grid-alt',
            hasSubmenu: false
        },
        {
            id: 4,
            title: 'Songs',
            path: '/category',
            icon: 'bx bx-collection',
            hasSubmenu: true,
            submenu: [
                {
                    id: 1,
                    title: 'HTML & CSS',
                    path: '/html-css'
                },
                {
                    id: 2,
                    title: 'HTML & CSS',
                    path: '/html-css'
                },
                {
                    id: 3,
                    title: 'Javascript',
                    path: '/javascript'
                },
            ]
        }
    ]
};

export default sidebarData;