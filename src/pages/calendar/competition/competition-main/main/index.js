import React from 'react';
import clsx from 'clsx';
import FileLink from 'components/file-link';
import useStyles from '../use-styles';
import { useService } from 'utils/reservices';
import moment from 'moment';

import InfoBlock from '../components/info-block';
import ContactsBlock from '../components/contacts-block';

export default function Competition() {
    const styles = useStyles();
    const CompetitionsService = useService('competitions');
    const competition = CompetitionsService.competition.payload.competition || {};

    const className = clsx(styles.container, {
        '_has_video': false
    });

    let createMarkup = (html) => {
        return { __html: html };
    };

    return (
        <div className={className}>
            <div />
            <div className={styles.infoBlocks}>
                <InfoBlock title='contacts' name="contacts">
                    <div className={styles.contacts}>
                        <div className={styles.column}>
                            {competition.memo && (
                                <div className={styles.container}>
                                    <div className={styles.title}>
                                        <div dangerouslySetInnerHTML={createMarkup(competition.memo)} />
                                    </div>
                                </div>
                            )}

                            {competition.contact_email && (
                                <ContactsBlock name="email" title="Email">
                                    <a href={`mailto:${competition.contact_email}`}>{competition.contact_email}</a>
                                </ContactsBlock>
                            )}
                            {competition.contact_website && (
                                <ContactsBlock name="website" title="Website" icon={require('../website.svg')}>
                                    <a href={competition.contact_website}>Visit website</a>
                                </ContactsBlock>
                            )}
                        </div>
                        <div className={styles.column}>
                            {competition.contact_phone && (
                                <ContactsBlock name="phone" title="Phone">
                                    {competition.contact_phone}
                                </ContactsBlock>
                            )}
                            {competition.contact_mobile && (
                                <ContactsBlock name="mobile" title="Mobile">
                                    {competition.contact_mobile}
                                </ContactsBlock>
                            )}
                            {competition.contact_fax && (
                                <ContactsBlock name="mobile" title="Mobile">
                                    {competition.contact_fax}
                                </ContactsBlock>
                            )}
                        </div>
                    </div>
                </InfoBlock>

                {competition.entry_file_url && (
                    <InfoBlock title="Entry">
                        <div className={styles.column}>
                            {competition.deadline && (
                                <ContactsBlock title="deadline">
                                    {moment(competition.deadline).format('MMMM DD, YYYY')}
                                </ContactsBlock>
                            )}
                            <ContactsBlock title="ISSF Entry">
                                <FileLink name="issf_entry" link={competition.entry_file_url} />
                            </ContactsBlock>
                        </div>
                    </InfoBlock>
                )}

                {competition.contact_file_url && (
                    <InfoBlock title="Information">
                        <div className={styles.column}>
                            <FileLink name="information" link={competition.contact_file_url} />
                        </div>
                    </InfoBlock>
                )}
            </div>

        </div>
    )
}