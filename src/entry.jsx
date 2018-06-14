const initProject = async () => {
  const React = await import('react')
  const ReactDOM = await import('react-dom')
  const { Provider } = await import('react-redux')
  const { ConnectedRouter } = await import('react-router-redux')
  const { store, history } = await import('./redux/configureStore')

  await import('semantic-ui-css/semantic.min.css')
  await import('./replace-semantic.css')
  await import('./i18n')

  const App = await import('./App')

  ReactDOM.render(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <App.default />
      </ConnectedRouter>
    </Provider>,
    document.getElementById('app'),
  )
}

initProject()
