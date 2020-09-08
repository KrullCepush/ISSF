import createRoute from './create-route';

export const home = createRoute({
    path: '/',
    exact: true,
    component: require('./home').default
});

export const federation = createRoute({
    pageTitle: 'Federation',
    path:  '/federation',
});

export const federationMembers = createRoute({
    pageTitle: 'ISSF Members',
    path: '/federation/members',
    exact: true,
    component: require('./federation/members').default,
    breadcrumbs: [federation]
});

export const federationMembersConfederations = createRoute({
    pageTitle: 'Confederations',
    path: '/federation/members/confederations',
    exact: true,
    component: require('./federation/members').default,
    breadcrumbs: [federation, federationMembers]
});

export const issfDocuments = createRoute({
    pageTitle: 'ISSF Documents',
    path: '/federation/issf-documents/:slug',
    exact: true,
    component: require('./static-page/issf-documents').default,
    breadcrumbs: [federation]
});

export const calendar = createRoute({
    pageTitle: 'Calendar',
    path: '/calendar',
    exact: true,
    component: require('./calendar/calendar-main').default,
});

export const results = createRoute({
    pageTitle: 'Results',
    path: '/calendar/results',
    component: require('./results').default,
    exact: true,
    breadcrumbs: [calendar]
});

export const historicalResults = createRoute({
    pageTitle: 'Historical results',
    path: '/historical-results',
    component: require('./hist-results').default,
    exact: true,
});


export const tokyo = createRoute({
    path: '/tokyo2020',
    component: require('./calendar/competition/tokyo').default,
    exact: true,
    pageTitle: 'Tokyo-2020'
});

export const tokyoMain = createRoute({
    path: `${tokyo.path}`,
    component: require('./calendar/competition/competition-main').default,
    exact: true,
    breadcrumbs: [tokyo]
});

export const tokyoPulse = createRoute({
    path: `${tokyo.path}/pulse-beating`,
    component: require('./calendar/competition/competition-pulse-beating').default,
    exact: true,
    breadcrumbs: [tokyo]
});

export const tokyoResultsMain = createRoute({
    path: `${tokyo.path}/results`,
    component: require('./calendar/competition/competition-results/main').default,
    exact: true,
    breadcrumbs: [tokyo]
});

export const tokyoSchedule = createRoute({
    path: `${tokyo.path}/schedule`,
    component: require('./calendar/competition/competition-schedule').default,
    exact: true,
    breadcrumbs: [tokyo]
});

export const tokyoResultsVariant1 = createRoute({
    path: `${tokyo.path}/results/:eventId`,
    component: require('./calendar/competition/competition-results/results').default,
    breadcrumbs: [tokyo]
});

export const tokyoMedals = createRoute({
    pageTitle: 'Medal standig',
    path: `${tokyo.path}/medal-standing`,
    component: require('./calendar/competition/competition-medals').default,
    exact: true,
    breadcrumbs: [tokyo]
});

export const competition = createRoute({
    path: '/calendar/competition/:id',
    component: require('./calendar/competition').default,
    breadcrumbs: [calendar]
});

export const competitionMain = createRoute({
    path: `${competition.path}`,
    component: require('./calendar/competition/competition-main').default,
    exact: true,
    breadcrumbs: [calendar]
});

export const competitionPulse = createRoute({
    path: `${competition.path}/pulse-beating`,
    component: require('./calendar/competition/competition-pulse-beating').default,
    exact: true,
    breadcrumbs: [calendar, competition]
});

export const competitionResultsMain = createRoute({
    path: `${competition.path}/results`,
    component: require('./calendar/competition/competition-results/main').default,
    exact: true,
    breadcrumbs: [calendar]
});

export const competitionSchedule = createRoute({
    path: `${competition.path}/schedule`,
    component: require('./calendar/competition/competition-schedule').default,
    exact: true,
    breadcrumbs: [calendar]
});

export const competitionResultsVariant1 = createRoute({
    path: `${competition.path}/results/:eventId`,
    component: require('./calendar/competition/competition-results/results').default,
    breadcrumbs: [calendar]
});

export const competitionMedals = createRoute({
    pageTitle: 'Medal standig',
    path: `${competition.path}/medal-standing`,
    component: require('./calendar/competition/competition-medals').default,
    exact: true,
    breadcrumbs: [calendar]
});

export const athletes = createRoute({
    pageTitle: 'Athletes',
    path: '/athletes',
    component: require('./athletes/athletes-main').default,
    exact: true
});

export const worldRanking = createRoute({
    pageTitle: 'World Ranking',
    path: '/athletes/world-ranking',
    component: require('./athletes/world-ranking').default,
    breadcrumbs: [athletes]
});

export const worldRankingMain = createRoute({
    path: '/athletes/world-ranking',
    component: require('./athletes/world-ranking/main').default,
    exact: true
});

export const worldRankingIntroduction = createRoute({
    pageTitle: 'Introduction',
    path: worldRanking.path + '/introduction',
    component: require('./athletes/world-ranking/introduction').default,
    breadcrumbs: [athletes, worldRanking]
});

export const records = createRoute({
    pageTitle: 'Records',
    path: '/athletes/records',
    component: require('./athletes/records').default,
    breadcrumbs: [athletes]
});

export const recordsMain = createRoute({
    path: '/athletes/records',
    component: require('./athletes/records/main').default,
    exact: true
});

export const recordsIntroduction = createRoute({
    pageTitle: 'OFFICIALLY RECOGNIZED BY THE ISSF',
    path: records.path + '/introduction',
    component: require('./athletes/records/introduction').default,
    breadcrumbs: [athletes, records]
});

export const athletePage = createRoute({
    pageTitle: 'Athletes Database',
    path: '/athletes/:id',
    component: require('./athletes/athlete').default,
    breadcrumbs: [athletes]
});

export const news = createRoute({
    pageTitle: 'News',
    path: '/news',
    component: require('./news/news-main').default,
    exact: true
});

export const newsArticle = createRoute({
    path: '/news/:slug',
    component: require('./news/news-article').default,
    exact: true,
    breadcrumbs: [news]
});

export const issfStructure = createRoute({
    pageTitle: 'ISSF Structure',
    path: '/issf-structure',
    component: require('./issf-structure').default,
    breadcrumbs: [federation]
});

export const executiveCommittee = createRoute({
    pageTitle: 'Executive Committee',
    path: '/issf-structure/executive-committe',
    component: require('./issf-structure/executive-committee').default,
    exact: true,
    breadcrumbs: [federation, issfStructure]

});

export const issfPresident = createRoute({
    path: '/issf-structure',
    component: require('./issf-structure/issf-president').default,
    exact: true,
    pageTitle: 'ISSF President',
    breadcrumbs: [federation, issfStructure]

});

export const administrativeCouncil = createRoute({
    pageTitle: 'Administrative council',
    path: '/issf-structure/administrative-council',
    component: require('./issf-structure/administrative-council').default,
    exact: true,
    breadcrumbs: [federation, issfStructure]
});

export const sectionCommittees = createRoute({
    pageTitle: 'Committees',
    path: '/issf-structure/section-committees',
    component: require('./issf-structure/section-committees').default,
    breadcrumbs: [federation, issfStructure]
});

export const sectionRiffleCommittee = createRoute({
    pageTitle: 'ISSF Rifle Committee',
    path: '/issf-structure/section-committees/rifle-committee',
    component: require('./issf-structure/section-committees/rifle-committee').default,
    exact: true,
    breadcrumbs: [federation, issfStructure]
});

export const sectionPistolCommittee = createRoute({
    pageTitle: 'ISSF Pistol Committee',
    path: '/issf-structure/section-committees/pistol-committee',
    component: require('./issf-structure/section-committees/pistol-committee').default,
    exact: true,
    breadcrumbs: [federation, issfStructure]
});

export const sectionRunningTargetCommittee = createRoute({
    pageTitle: 'ISSF Running Committee',
    path: '/issf-structure/section-committees/running-target-committee',
    component: require('./issf-structure/section-committees/running-target-committee').default,
    exact: true,
    breadcrumbs: [federation, issfStructure]
});

export const sectionShotGunCommittee = createRoute({
    pageTitle: 'ISSF Shotgun Committee',
    path: '/issf-structure/section-committees/shotgun-committeee',
    component: require('./issf-structure/section-committees/shotgun-committee').default,
    exact: true,
    breadcrumbs: [federation, issfStructure]
});

export const sectionAthletesCommittee = createRoute({
    pageTitle: 'ISSF Athletes Committee',
    path: '/issf-structure/section-committees/athletes-committee',
    component: require('./issf-structure/section-committees/athletes-committee').default,
    breadcrumbs: [federation, issfStructure]
});

export const sectionTechnicalCommittee = createRoute({
    pageTitle: 'ISSF Technical Committee',
    path: '/issf-structure/section-committees/technical-committee',
    component: require('./issf-structure/section-committees/technical-committee').default,
    breadcrumbs: [federation, issfStructure],
    exact: true
});

export const sectionStatusesAndEligibilityCommittee = createRoute({
    pageTitle: 'ISSF Status And Eligibility Committee',
    path: '/issf-structure/section-committees/statutes-and-eligibility-committee',
    component: require('./issf-structure/section-committees/statutes-and-eligibility-committee').default,
    breadcrumbs: [federation, issfStructure]
});

export const sectionMedicalCommittee = createRoute({
    pageTitle: 'ISSF Medical Committee',
    path: '/issf-structure/section-committees/medical-committee',
    component: require('./issf-structure/section-committees/medical-committee').default,
    breadcrumbs: [federation, issfStructure]
});

export const sectionJudgesCommittee = createRoute({
    pageTitle: 'ISSF Judges Committee',
    path: '/issf-structure/section-committees/judges-committee',
    component: require('./issf-structure/section-committees/judges-committee').default,
    breadcrumbs: [federation, issfStructure]
});

export const sectionCouchAndAdvisoryCommittee = createRoute({
    pageTitle: 'ISSF Coach Committee',
    path: '/issf-structure/section-committees/coach-advisory-committee',
    component: require('./issf-structure/section-committees/coach-advisory-committee').default,
    breadcrumbs: [federation, issfStructure]
});

export const honoraryMembers = createRoute({
    pageTitle: 'Honorary Members',
    path: '/issf-structure/honorary-members',
    component: require('./issf-structure/honorary-members').default,
    exact: true,
    breadcrumbs: [federation, issfStructure]
});

export const antiDoping = createRoute({
    pageTitle: 'Anti doping',
    path: '/anti-doping/:slug?',
    component: require('./static-page/anti-doping').default,
});

export const shootingSports = createRoute({
    pageTitle: 'Shooting sport',
    path: '/shooting-sports/:slug?',
    component: require('./static-page').default,
});

export const pages = createRoute({
    path: '/pages/:slug',
    component: require('./static-page').default,
});

export const issfAcademy = createRoute({
    pageTitle: 'Academy',
    path: '/issf-academy/:slug',
    component: require('./static-page').default,
    exact: true,
});

export const issfAcademyELearning = createRoute({
    pageTitle: 'E-Learning',
    path: '/issf-academy/e-learning/:slug?',
    component: require('./static-page/e-learning').default,
    breadcrumbs: [issfAcademy]
});

export const issfAcademyCoachingPlatform = createRoute({
    pageTitle: 'Coaching platform',
    path: '/issf-academy/coaching-platform/:slug?',
    component: require('./static-page/coaching-platform').default,
    breadcrumbs: [issfAcademy]
});

export const olympicGames = createRoute({
    pageTitle: 'Olympic games',
    path: '/olympic-games/:slug?',
    component: require('./static-page/olympic-games').default,
});

export const ogqualification = createRoute({
    pageTitle: 'OG Qualification',
    path: '/og-qualification',
    component: require('./og-qualification').default,
})
