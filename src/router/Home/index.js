import React from 'react'
import styles from './FahasaHome.module.scss';
import classNames from 'classnames/bind';
import Header from '~/components/layout/components/FhasaHeader'
import Footer from '~/components/layout/components/FhasaFooter'
import Intro from '~/components/Intro'

const cx = classNames.bind(styles);

function Home() {
  return (
    <div>
      <Header></Header>
      <div id={cx('content')}>
        <Intro></Intro>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default Home
