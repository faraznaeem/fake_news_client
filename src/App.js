import React, { Component, Suspense } from 'react'
import ListArticles from './Components/ListArticles'
import Login from './Components/Login'
import CreateArticle from './Components/CreateArticle'
import FakeFunction from './Components/FakeFunction'
import "./i18n";

class App extends Component {

  render() {
    return (
      <>
        <Suspense fallback={(<div>Loading</div>)}>
          <FakeFunction />
          {/* <Login />
          <ListArticles />
          <CreateArticle /> */}
        </Suspense>
      </>
    )
  }
}

export default App