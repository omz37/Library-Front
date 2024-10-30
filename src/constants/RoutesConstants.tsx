import Login from '../components/login/Login';
import Home from '../components/home/Home';
import {RouteInterface} from "../interfaces/Route.interface";
import Cgu from "../components/cgu/Cgu";
import Rules from "../components/rules/Rules";
import Schedule from "../components/schedule/Schedule";
import Account from "../components/account/Account";
import CategoryPage from "../components/collection/categories/CategoryPage";
import BooksMainPage from "../components/collection/books/BooksMainPage";
import AdminPage from "../components/admin/AdminPage";
import BookSheet from "../components/collection/books/BookSheet";
import CreateAccount from "../components/login/CreateAccount";

export const LoginRouteConstant: RouteInterface = {
    label: 'login',
    path: '/login',
    component: Login,
    isPrivate: false
}

export const HomeRouteConstant: RouteInterface = {
    label: 'home',
    path: '/home',
    component: Home,
    isPrivate: false
}

export const DefaultRouteConstant: RouteInterface = {
    label: 'default',
    path: '/',
    component: Home,
    isPrivate: false
}

export const CguRouteConstant: RouteInterface = {
    label: 'cgu',
    path: '/cgu',
    component: Cgu,
    isPrivate: false
}

export const RulesRouteConstant: RouteInterface = {
    label: 'rules',
    path: '/rules',
    component: Rules,
    isPrivate: false
}

export const ScheduleRouteConstant: RouteInterface = {
    label: 'schedule',
    path: '/schedule',
    component: Schedule,
    isPrivate: false
}

export const AccountRouteConstant: RouteInterface = {
    label: 'account',
    path: '/account',
    component: Account,
    isPrivate: true
}

export const CategoryRouteConstant: RouteInterface = {
    label: 'categories',
    path: '/categories',
    component: CategoryPage,
    isPrivate: true
}

export const CategoryFilterRouteConstant: RouteInterface = {
    label: 'category',
    path: '/category/:categoryId',
    component: BooksMainPage,
    isPrivate: true
}

export const BookSheetRouteConstant: RouteInterface = {
    label: 'book',
    path: '/book/:bookId',
    component: BookSheet,
    isPrivate: true
}

export const AdminRouteConstant: RouteInterface = {
    label: 'admin',
    path: '/admin',
    component: AdminPage,
    isPrivate: true
}

export const CreateAccountConstant: RouteInterface = {
    label: 'create',
    path: '/create',
    component: CreateAccount,
    isPrivate: false
}

export const editorialBaseURL : string = '/edito/'

export const AppRoutes: [RouteInterface, RouteInterface, RouteInterface, RouteInterface, RouteInterface, RouteInterface, RouteInterface, RouteInterface, RouteInterface, RouteInterface, RouteInterface, RouteInterface] = [
    LoginRouteConstant,
    HomeRouteConstant,
    DefaultRouteConstant,
    CguRouteConstant,
    RulesRouteConstant,
    ScheduleRouteConstant,
    AccountRouteConstant,
    CategoryRouteConstant,
    CategoryFilterRouteConstant,
    AdminRouteConstant,
    CreateAccountConstant,
    BookSheetRouteConstant
];
