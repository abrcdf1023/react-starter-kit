const initProject = async () => {
  const React = await import('react')
  const ReactDOM = await import('react-dom')

  await import('./index.css')

  const App = await import('./App')

  ReactDOM.render(<App.default />, document.getElementById('app'))
}

initProject()
