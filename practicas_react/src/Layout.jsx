import React from 'react'

const Layout = (props) => {
  return (
    <div>
        <header>
            <h2></h2>
            <nav>Link 1</nav>
            <nav>Link 2</nav>
        </header>
        <main>
            {props.children}
        </main>
    </div>
  )
}

export default Layout