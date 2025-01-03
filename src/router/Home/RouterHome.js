import React from 'react'
import styles from './FahasaHome.module.scss';
import classNames from 'classnames/bind';
import Header from '~/layout/components/FhasaHeader'
import Footer from '~/layout/components/FhasaFooter'
import Intro from '~/layout/components/FhasaIntro'

const cx = classNames.bind(styles);

function RouterHome() {
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

export default RouterHome
