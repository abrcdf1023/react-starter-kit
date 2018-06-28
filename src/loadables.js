import Loadable from 'react-loadable'
import FullPageLoader from '@/components/FullPageLoader'

export const Home = Loadable({
  loader: () => import('@/components/Home'),
  loading: FullPageLoader,
})
