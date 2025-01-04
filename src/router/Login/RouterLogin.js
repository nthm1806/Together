import React from 'react'
import Header from '~/layout/components/FhasaHeader'
import Footer from '~/layout/components/FhasaFooter'
import Login from '~/layout/components/FahasaLogin'
import Background from '~/layout/components/Background/Background';


function RouterHome() {
  return (
    <div>
      <Header></Header>
      <Background>
        <Login></Login>
        <Footer></Footer>
      </Background>
    </div>
  )
}

export default RouterHome
