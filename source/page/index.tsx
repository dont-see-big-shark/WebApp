import { FC, lazy } from 'web-cell';
import { createRouter } from 'cell-router';
import {
    Container,
    OffcanvasNavbar,
    NavLink,
    DropdownItem,
    DropdownButton
} from 'boot-cell';

import { session } from '../model';
import { RoleNames } from '../service';
import menu, { RouteRoot } from './data/menu';
import logo from '../image/wuhan2020.png';

import { HomePage } from './Home';
import Disclaimer from '../../Disclaimer.md';

const HospitalPage = lazy(() => import('./Hospital')),
    HospitalEdit = lazy(() => import('./Hospital/Edit')),
    LogisticsPage = lazy(() => import('./Logistics')),
    LogisticsEdit = lazy(() => import('./Logistics/Edit')),
    HotelPage = lazy(() => import('./Hotel')),
    HotelEdit = lazy(() => import('./Hotel/Edit')),
    FactoryPage = lazy(() => import('./Factory')),
    FactoryEdit = lazy(() => import('./Factory/edit')),
    DonationPage = lazy(() => import('./Donation')),
    DonationEdit = lazy(() => import('./Donation/edit')),
    ClinicList = lazy(() => import('./Clinic')),
    ClinicEdit = lazy(() => import('./Clinic/Edit')),
    UserAdmin = lazy(() => import('./Admin/User')),
    CommunityPage = lazy(() => import('./Community')),
    MapsPage = lazy(() => import('./Map'));
const userMenu = [
    {
        title: '管理',
        href: 'admin',
        roles: ['Admin'] as RoleNames[]
    },
    {
        title: '登出',
        onClick: () => session.signOut()
    }
];

const { location } = globalThis,
    { Route } = createRouter();

export const PageFrame: FC = () => (
    <>
        <OffcanvasNavbar
            variant="light"
            expand="md"
            sticky="top"
            brand={
                <img
                    alt="新冠战疫信息平台"
                    src={logo}
                    style={{ height: '2rem' }}
                />
            }
        >
            {menu.map(({ href, title }) => (
                <NavLink
                    className="m-3 my-md-0 mx-md-3"
                    href={href.startsWith('http') ? href : `#${href}`}
                    active={
                        location.hash.slice(1) === href ||
                        (!!href && location.hash.slice(1).startsWith(href))
                    }
                >
                    {title}
                </NavLink>
            ))}
            {session.user && (
                <DropdownButton
                    variant="primary"
                    // alignType="right"
                    // alignSize="md"
                    caption={session.user.username}
                >
                    {userMenu.map(
                        ({ roles, title, ...rest }) =>
                            !roles ||
                            (roles?.find(role => session.hasRole(role)) && (
                                <DropdownItem {...rest}>{title}</DropdownItem>
                            ))
                    )}
                </DropdownButton>
            )}
        </OffcanvasNavbar>

        <Container>
            <Route path="" component={HomePage} />
            <Route path={RouteRoot.Hospital} component={HospitalPage} />
            <Route
                path={RouteRoot.Hospital + '/edit'}
                component={HospitalEdit}
            />
            <Route path={RouteRoot.Logistics} component={LogisticsPage} />
            <Route
                path={RouteRoot.Logistics + '/edit'}
                component={LogisticsEdit}
            />
            <Route path={RouteRoot.Hotel} component={HotelPage} />
            <Route path={RouteRoot.Hotel + '/edit'} component={HotelEdit} />
            <Route path={RouteRoot.Factory} component={FactoryPage} />
            <Route path={RouteRoot.Factory + '/edit'} component={FactoryEdit} />
            <Route path={RouteRoot.Donation} component={DonationPage} />
            <Route
                path={RouteRoot.Donation + '/edit'}
                component={DonationEdit}
            />
            <Route path={RouteRoot.Clinic} component={ClinicList} />
            <Route path={RouteRoot.Clinic + '/edit'} component={ClinicEdit} />
            <Route path={RouteRoot.Maps} component={MapsPage} />
            <Route path={RouteRoot.Admin} component={UserAdmin} />
            <Route path={RouteRoot.Community} component={CommunityPage} />
            <Route
                path="disclaimer"
                component={({ className = '', ...props }) => (
                    <article
                        className={`py-5 ${className}`}
                        {...props}
                        innerHTML={Disclaimer}
                    />
                )}
            />
        </Container>

        <footer className="d-md-flex justify-content-around text-center bg-light py-5">
            <p>
                Proudly developed with
                <a
                    className="mx-1"
                    target="_blank"
                    href="https://web-cell.dev/"
                >
                    WebCell v3
                </a>
                &amp;
                <a
                    className="mx-1"
                    target="_blank"
                    href="https://web-cell.dev/BootCell/"
                >
                    BootCell v2
                </a>
            </p>
            <a href="#disclaimer">免责声明</a>
        </footer>
    </>
);
