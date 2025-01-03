import React from 'react'
import Header from '~/layout/components/FhasaHeader'
import Footer from '~/layout/components/FhasaFooter'
import Login from '~/layout/components/FahasaLogin'

function RouterHome() {
  return (
    <div>
      <Header></Header>
      <Login></Login>
      <Footer></Footer>
    </div>
  )
}

export default RouterHome
