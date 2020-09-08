import React from 'react';

import useStyles from './use-styles';
import SubNavigation from './subNavigation'
import { NavLink as Link } from 'react-router-dom';
import { sectionCommittees } from 'pages';
import availableFileIds from './availableFileIds';

export default function MembersList({
    withSubNavigation,
    withLinkBack,
    paragraphs,
    title,
    data,
}) {
    const styles = useStyles();
    let keyId = 0;

    const members = data || []
    const renderAdress = (address) => {
        let adressArr = []
        for (const key in address) {
            adressArr.push(address[key])
        }
        return (
            adressArr.map(addressLine => (
                <div key={addressLine || ++keyId}>
                    {addressLine}
                </div>
            ))
        )
    }

    const getPhoto = (member) => {
        const { external_id } = member
        const photo = 'https://result.issf-sports.info/get_image.php?issfid=[ISSFID]&width=90'
        let photoPath = photo.replace(/\[ISSFID\]/i, external_id)
        return photoPath
    }

    const getUrl = (member) => {
        const { external_id } = member;
        const url = 'https://www.issf-sports.org/documents/officialbio/[ISSFID].pdf';
        let fileUrl = url.replace(/\[ISSFID\]/i, external_id);
        return fileUrl;
    }

    // const renderDowloadFileIcon = (member) => {
    //     const { external_id } = member;
    //     let className;
    //     if (!availableFileIds[external_id]){
    //         className = styles.disabledLink ;
    //     }
    //     //TODO: implement another file type
    //     return (
    //         <a href={getUrl(member)} className={className}>
    //             <img src={require('assets/icons/pdf-icon.svg')} alt="" className={styles.fileIcon} />
    //         </a>
    //     )
    // }

    return (
        <div className={styles.wrapper}>
            {withLinkBack && (
                <Link
                    className={styles.link}
                    to={sectionCommittees.getPath()}
                    exact
                >
                    BACK TO COMMITTEES
                </Link>
            )}
            {title && (
                <div className={styles.pageTitle}>
                    {title.toUpperCase()}
                </div>
            )}
            {withSubNavigation && (
                <SubNavigation />
            )}
            <div className={styles.text}>
                {paragraphs && paragraphs.map((paragraph) => (
                    <p key={paragraph}>
                        {paragraph}
                    </p>
                ))}
            </div>

            <div className={styles.content}>
                {members.map(member => (
                    <div className={styles.row} key={member.id}>
                        <div className={styles.title}>
                            {member.position_name}
                        </div>
                        <div className={styles.blockWithPhoto}>
                            <div className={styles.imageWrapper}>
                                <img src={getPhoto(member)} className={styles.image} />
                            </div>
                            <div className={styles.name}>
                                <a href={getPhoto(member)}>
                                    {member.name}
                                </a>
                            </div>
                        </div>
                        <div className={styles.address}>
                            {renderAdress(member.address)}
                            {member.city}
                        </div>
                        {/* <div className={styles.pdf}>
                            {renderDowloadFileIcon(member)}
                        </div> */}
                    </div>
                ))}
            </div>
        </div>
    )
}
