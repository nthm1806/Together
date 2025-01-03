import React,{useEffect, useRef, useState} from 'react'
import styles from './Intro.module.scss';
import classNames from 'classnames/bind';
import gsap from 'gsap';

const cx = classNames.bind(styles);


function Intro() {
    const buttonRef = useRef([]);
    const imageRef = useRef([]);
    const listImg = ['./ctthang1_resize__840x320.png','./laprap1224_laprap1124_slide_840x320.png','./maytinh1224_Slide_840x320.png','./trangpatnership_840x320.png']
    const [indexImg,setIndexImg] = useState({
        prev:listImg.length -1,
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
    useEffect(()=>{
        gsap.timeline().to(imageRef.current[1],{
            repeat:-1,
            repeatDelay:2,
            xPercent:-100,
            duration:1
        },1.8).to(imageRef.current[2],{
            repeat:-1,
            repeatDelay:2,
            xPercent:-100,
            duration:1
        },1.8);
        gsap.to({},{
            repeat:-1,
            repeatDelay:1,
            duration:2,
            onRepeat:()=>{
                const index = {
                    prev:indexImg.current,
                    current:indexImg.next,
                    next: (indexImg.next+1) % listImg.length,
                }
                console.log(index)
                setIndexImg(index);
            }
        },0)
    })
  return (
    <div id={cx('intro')}>
        <div id={cx('firtIntro')}>
            <div id={cx('mainFirtIntro')}>
                <img ref={(el)=>imageRef.current[0] = el} alt='' src={listImg[indexImg.prev]} />
                <img ref={(el)=>imageRef.current[1] = el} alt='' src={listImg[indexImg.current]} />
                <img ref={(el)=>imageRef.current[2] = el} alt='' src={listImg[indexImg.next]} />
            </div>
            <div id={cx('secondFirtIntro')}>
            <img alt='' src='./thanhtoankhongtienmat_392x156.png' />
            <img alt='' src='./ShopeePay392x156.png'/>
            </div>
            <button onMouseEnter={hanlderMouse} onMouseLeave={mouseOut} ref={(el)=>buttonRef.current[0] = el}> &lt; </button>
            <button onMouseEnter={hanlderMouse} onMouseLeave={mouseOut} ref={(el)=>buttonRef.current[1] = el} > &gt; </button>
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
