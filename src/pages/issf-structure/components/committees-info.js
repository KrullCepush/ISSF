import {
    sectionStatusesAndEligibilityCommittee,
    sectionCouchAndAdvisoryCommittee,
    sectionTechnicalCommittee,
    sectionAthletesCommittee,
    sectionMedicalCommittee,
    sectionRiffleCommittee,
    sectionJudgesCommittee,
} from 'pages';

export default function getCommitteesInfo() {
    return [
        {
            title: 'ISSF TECHNICAL COMMITTEE',
            description: 'The technical committee consists of the chairman and five members. It assists the section committees in the development of the shooting rules and the sport, coordinates the proposals from the section committees, evaluates and assists in range design and operational procedures for competitions, and verifies and approves world records. The committee meets once a year and reports to the administrative council or to the executive committee.',
            linkTo: sectionTechnicalCommittee.getPath()
        },
        {
            title: 'ISSF JUDGES COMMITTEE',
            description: 'The judges committee consists of a chairman and seven members. It is responsible for the uniform application of the shooting rules, provides guidelines for international judges, prepares and conducts courses for judges and jury members, approves applications for judges licenses and proposes juries to the executive committee for championships and games. The committee meets at least once a year and reports to the administrative council.',
            linkTo: sectionJudgesCommittee.getPath()
        },
        {
            title: 'ISSF STATUTES AND ELIGIBILITY COMMITTEE',
            description: 'The statutes and eligibility committee consists of a chairman and seven members. As its name implies, it studies the constitution, general regulations and any proposed changes to them and also all aspects of eligibility. It reports to the administrative council.',
            linkTo: sectionStatusesAndEligibilityCommittee.getPath()
        },
        {
            title: 'ISSF MEDICAL COMMITTEE',
            description: 'The medical committee consists of a chairman and members - the number of members not being specified. It examines medical questions, offers guidelines and proposals, supports the organization and conduct of the doping control and promotes the exchange of experience through publications and the organization of special events. It reports to the administrative council.',
            linkTo: sectionMedicalCommittee.getPath()
        },
        {
            title: 'ISSF ATHLETES COMMITTEE',
            description: 'The athletes committee consists of a chairman and six members. Its objective is to gather information and opinions from athletes on their needs and problems and to establish a direct link with the athletes within the ISSF. The committee coordinates activities with Athletes Committees of other international federations; it strives for the best possible conditions for the training, accommodation and living conditions for the athletes and supports the fight against doping and drugs.',
            linkTo: sectionAthletesCommittee.getPath()
        },
        {
            title: 'THE ISSF COACH ADVISORY COMMITTEE',
            description: 'The athletes committee consists of a chairman and six members. The ISSF Coach Committee is a provisional committee whose members represent the international coaching community of the ISSF. Its purpose is to provide advice and opinion on all aspects that are of concern to active coaches within the ISSF community. A key role, is the improvement of communication amongst coaches and the creation of a vibrant coaching community.',
            linkTo: sectionCouchAndAdvisoryCommittee.getPath()
        },
        {
            title: 'ISSF SECTION COMMITTEES',
            description: 'Section committees are elected for rifle shooting, pistol shooting, shotgun shooting and running target shooting. Each committee consists of a chairman and seven members. Each committee is responsible for the formulation and interpretation of the special technical rules for its discipline. The committees meet when necessary and report to the ISSF administrative council.',
            linkTo: sectionRiffleCommittee.getPath()
        },
    ];
}