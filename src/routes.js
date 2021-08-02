import MainPage from "./containers/pages/MainPage/MainPage";
import ResultsPage from 'containers/pages/ResultsPage/ResultsPage'
import MapPage from 'containers/pages/MapPage/MapPage'

const routes = [
    {
        path: '/rezultati',
        component: ResultsPage
    },
    {
        path: '/mapa',
        component: MapPage
    },
    {
        path: '/',
        component: MainPage
    },
]

export default routes;