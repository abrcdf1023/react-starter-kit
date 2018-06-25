import Loadable from 'react-loadable'
import { FullPageLoader } from '@/components/Loaders'

export const Home = Loadable({
  loader: () => import('@/components/Home'),
  loading: FullPageLoader,
})
