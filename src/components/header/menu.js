import * as routes from 'pages'
import { pages } from '../../pages'

export const menu = [
    {
        exact: false,
        title: 'Federation',
        route: routes.issfStructure,
        submenu: [{
            title: 'ISSF Structure',
            route: routes.issfStructure,
        }, {
            title: 'ISSF Constitution',
            route: routes.pages,
            routeParams: {
                slug: 'issf-constitution'
            }
        }, {
            title: 'ISSF Members',
            route: routes.federationMembers,
        }, {
            title: 'ISSF History',
            route: routes.pages,
            routeParams: {
                slug: 'issf-history'
            }
        }, {
            title: 'ISSF Documents',
            route: routes.issfDocuments,
            routeParams: {
                slug: 'documents-general-assembly'
            }
        },
        {
            title: 'Contacts',
            route: routes.pages,
            routeParams: {
                slug: 'federation-contacts'
            }
        }]
    },

    {
        title: 'Calendar',
        route: routes.calendar,
        submenu: [{
            title: 'Results',
            route: routes.results,
        }, {
            title: 'Historical Result',
            route: routes.historicalResults,
        }, {
            title: 'OG Qualification',
            route: routes.ogqualification,
        }]
    },

    {
        title: 'TOKYO 2020',
        route: routes.tokyo,
    },

    {
        title: 'Athletes',
        route: routes.athletes,
        submenu: [{
            title: 'WORLD RANKING',
            route: routes.worldRanking,
        }, {
            title: 'Records',
            route: routes.records,
        }]
    },

    {
        title: 'Shooting sport',
        route: routes.shootingSports,
        routeParams: {
            slug: 'shooting-sports-rules'
        },
        submenu: [{
            title: 'Rules',
            route: routes.shootingSports,
            routeParams: {
                slug: 'shooting-sports-rules'
            }
        }, {
            title: 'OLYMPIC GAMES',
            route: routes.olympicGames,
            routeParams: {
                slug: 'olympic-games'
            }
        },]
    },

    // {
    //     title: 'Education',
    //     link: "#",
    //     submenu: [{
    //         title: 'Medicine section',
    //         route: routes.home,
    //     }]
    // },

    {
        hamburgerOnly: true,
        title: 'News',
        route: routes.news,
    },

    {
        hamburgerOnly: true,
        title: 'Anti-doping',
        route: routes.antiDoping,
    },

    // {
    //     hamburgerOnly: true,
    //     title: 'Academy',
    //     route: routes.issfAcademy,
    //     routeParams: { slug: 'issf-academy' }
    // },

    {
        hamburgerOnly: true,
        title: 'IOC ATHELETE CAREER',
        route: routes.pages,
        routeParams: {
            slug: 'ioc-athelete-career'
        }
    }
];
