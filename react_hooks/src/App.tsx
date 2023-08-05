import { lazy, Suspense } from 'react'

const CounterPage = lazy(() => import('./HigherOrderComponents/Counter'))


function App() {

  return (
    <Suspense fallback={<h2></h2>}>
      <CounterPage />
    </Suspense>
  )
}

export default App
