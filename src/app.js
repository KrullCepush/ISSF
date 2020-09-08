import React, { useEffect } from 'react';
import Header from 'components/header';
import Content from 'components/content';
import Footer from 'components/footer';
import { useService } from 'utils/reservices';
import { useLocation } from 'react-router-dom';
import useLayout from 'hooks/use-layout';
import { ThemeProvider } from 'react-jss';

import { Switch, Route, Redirect } from 'react-router-dom';
import injectModules from 'utils/reservices';
import * as routes from 'pages';
import rawTheme from './config/jss/theme';

import useStyles from './config/jss/use-styles';

import 'normalize.css/normalize.css';
import 'assets/fonts/issf-font/font-face.css';

function App({ showLayout }) {
    const common = useService('common');
    const classNames = useStyles();
    const location = useLocation();

    useEffect(() => {
        common.getMeta();
    }, [0]);

    useEffect(() => {
        document.body.scrollTop = document.documentElement.scrollTop = 0;
    }, [location.pathname]);

    return (
        <div className={classNames.page}>
            <Header />
            <Content>
                <Switch>
                    <Redirect
                        exact
                        from="/anti-doping"
                        to="/anti-doping/anti-doping-general-information"
                    />
                    <Redirect
                        exact
                        from="/olympic-games"
                        to="/olympic-games/olympic-games"
                    />
                    <Redirect
                        exact
                        from="/federation"
                        to="/issf-structure"
                    />
                    <Route {...routes.home} />
                    <Route {...routes.calendar} />
                    <Route {...routes.results} />
                    <Route {...routes.tokyo} />
                    <Route {...routes.historicalResults} />
                    <Route {...routes.competition} />
                    <Route {...routes.worldRanking} />
                    <Route {...routes.records} />
                    <Route {...routes.athletes} />
                    <Route {...routes.athletePage} />
                    <Route {...routes.news} />
                    <Route {...routes.issfStructure} />
                    <Route {...routes.issfDocuments} />
                    <Route {...routes.federationMembers} />
                    <Route {...routes.federationMembersConfederations} />
                    <Route {...routes.newsArticle} />
                    <Route {...routes.antiDoping} />
                    <Route {...routes.shootingSports} />
                    <Route {...routes.issfAcademyELearning} />
                    <Route {...routes.issfAcademyCoachingPlatform} />
                    <Route {...routes.issfAcademy} />
                    <Route {...routes.olympicGames} />
                    <Route {...routes.pages} />
                    <Route {...routes.ogqualification} />
                </Switch>
            </Content>
            {showLayout && <Footer />}
        </div>
    );
}

export default function() {
    const showLayout = useLayout();

    let theme = { ...rawTheme };

    if (showLayout) {
        theme.footer.height = 8;
    }

    return (
        <ThemeProvider theme={theme}>
            <App showLayout={showLayout} />
        </ThemeProvider>
    );
}
