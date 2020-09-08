import * as routes from 'pages';

export default function getMenuItems() {
    const menu = [
        routes.issfPresident,
        routes.executiveCommittee,
        routes.administrativeCouncil,
        routes.sectionTechnicalCommittee,
        routes.sectionJudgesCommittee,
        routes.sectionStatusesAndEligibilityCommittee,
        routes.sectionMedicalCommittee,
        routes.sectionAthletesCommittee,
        routes.sectionCouchAndAdvisoryCommittee,
        routes.sectionRiffleCommittee,
        routes.sectionPistolCommittee,
        routes.sectionRunningTargetCommittee,
        routes.sectionShotGunCommittee,
        routes.honoraryMembers
    ];
    const menuItems = menu.map((route) => {
        return { pageTitle: route.pageTitle, path: route.path }
    });
    return menuItems
}

