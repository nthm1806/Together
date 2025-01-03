import React,{useEffect, useRef, useState} from 'react'
import styles from './Intro.module.scss';
import classNames from 'classnames/bind';
import gsap from 'gsap'
import {useNavigate} from 'react-router-dom'

const cx = classNames.bind(styles);


function Intro() {
    const navigate = useNavigate()
    const buttonRef = useRef([]);
    const imageRef = useRef([]);
    const listImg = [{
        url:'./ctthang1_resize__840x320.png',
        link: 'https://www.fahasa.com/sale?fhs_campaign=homepageslider1'
        },{
            url:'./laprap1224_laprap1124_slide_840x320.png',
            link: 'https://www.fahasa.com/uu-dai-ngap-tran?fhs_campaign=homepageslider2'
        },{
            url:'./maytinh1224_Slide_840x320.png',
            link: 'https://www.fahasa.com/lich-nam-moi?fhs_campaign=homepageslider3'
        },{
            url:'./trangpatnership_840x320.png',
            link:'https://www.fahasa.com/trang-bach-hoa?fhs_campaign=homepageslider4'
        }]
    const [adjust,setAdjust] = useState(1);
    const timerRef = useRef(null);
    const [indexImg,setIndexImg] = useState({
        current:0,
        next:1,
    });
    const hanlderMouse=(e)=>{
        gsap.to(e.target,{
            scale:2,
            duration:0.5
        })
    }
    const mouseOut = (e)=>{
        gsap.to(e.target,{
            scale:1,
            duration:0.5
        })
    }
        useEffect(() => {
                imageRef.current = document.querySelectorAll('.imgIntro')
                gsap.killTweensOf(imageRef.current);
                gsap.timeline().fromTo(imageRef.current[0],{
                    xPercent:0
                },{
                    xPercent:adjust * -100,
                    duration:1
                },0).fromTo(imageRef.current[1],{
                    xPercent:adjust * 100 -100
                },{
                    xPercent:-100,
                    duration:1
                },0)
                nextImg(2000,1);
        }, [indexImg]);
      function nextImg(time,adj){
        setAdjust(adj)  
        if (timerRef.current) {
            clearTimeout(timerRef.current);
        }
        timerRef.current = setTimeout(() => {
          if(adj === 1){
            console.log(11)
            setIndexImg((prev) => ({
                current: prev.next,
                next: (prev.next+1)%listImg.length
            }));
          }else{
            console.log(22)
            setIndexImg((prev) => ({
                current:prev.next,
                next: prev.current
            }));
          }
        }, time);
      }
  return (
    <div id={cx('intro')}>
        <div id={cx('firtIntro')}>
            <div id={cx('mainFirtIntro')}>
                <img className='imgIntro' alt='' src={listImg[indexImg.current].url} />
                <img onClick={()=>  window.location.href =listImg[indexImg.next].link}  className='imgIntro' alt='' src={listImg[indexImg.next].url} />
            </div>
            <div id={cx('secondFirtIntro')}>
            <img alt='' src='./thanhtoankhongtienmat_392x156.png' />
            <img alt='' src='./ShopeePay392x156.png'/>
            </div>
            <button onClick={()=>nextImg(0,-1)} onMouseEnter={hanlderMouse} onMouseLeave={mouseOut} ref={(el)=>buttonRef.current[0] = el}> &lt; </button>
            <button onClick={()=>nextImg(0,1)} onMouseEnter={hanlderMouse} onMouseLeave={mouseOut} ref={(el)=>buttonRef.current[1] = el} > &gt; </button>
        </div>
        <div id={cx('secondIntro')}>    
            <img alt='' src='./LDPCTT1_flashsale_resize_310x210.png' />
            <img alt='' src='./LDPTet2025_ResizeHomepage_310X210_1.png'/>
            <img alt='' src='./thelemegasale_310x210-ver2.png' />
            <img alt='' src='./Blingbox_310X210.png'/>
        </div>
    </div>
  )
}

export default Intro
