import { Route, RouteProps, Switch, Redirect } from 'react-router-dom';
import * as React from 'react';
import SamplePage from './SmartComponents/SamplePage/SamplePage';
import Rules from './PresentationalComponents/Rules/ListRules';

const paths = {
    index: '/',
    samplepage: '/samplepage',
    rules: '/rules'
};

type InsightsRouteProps = RouteProps & {
  component: React.ComponentType,
  rootClass: string
};

const InsightsRoute = (props: InsightsRouteProps) => {
    const root = document.getElementById('root');
    if (root) {
        const { component, rootClass, ...rest } = props;
        root.removeAttribute('class');
        root.classList.add(`page__${rootClass}`, 'pf-c-page__main');
        root.setAttribute('role', 'main');
        return (<Route { ...rest } component={ component } />);
    } else {
        throw new Error('No root element found');
    }
};


/**
 * the Switch component changes routes depending on the path.
 *
 * Route properties:
 *      exact - path must match exactly,
 *      path - https://prod.foo.redhat.com:1337/insights/advisor/rules
 *      component - component to be rendered when a route has been chosen.
 */
export const Routes = () => {
    return (
        <Switch>
            <InsightsRoute path={ paths.index } component={ SamplePage } rootClass='samplepage'/>
            <InsightsRoute path={ paths.samplepage } component={ SamplePage } rootClass='samplepage'/>
            <InsightsRoute path={ paths.rules } component={ Rules } rootClass='rules'/>

            { /* Finally, catch all unmatched routes */ }
            <Route>
                <Redirect to={ paths.index }/>
            </Route>
        </Switch>
    );
};
