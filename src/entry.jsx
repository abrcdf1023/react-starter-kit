const initProject = async () => {
  const React = await import('react')
  const ReactDOM = await import('react-dom')

  await import('semantic-ui-css/semantic.min.css')
  await import('./replace-semantic.css')
  await import('./i18n')

  const App = await import('./App')

  ReactDOM.render(<App.default />, document.getElementById('app'))
}

initProject()
