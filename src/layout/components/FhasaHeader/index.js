import styles from './FhasaHeader.module.scss';
import classNames from 'classnames/bind';
import { useNavigate } from 'react-router-dom';
import Search  from '../Search';

const cx = classNames.bind(styles);

function FhasaHeader() {

    const navigate = useNavigate();

    // Hàm điều hướng
    const handleNavigate = (path) => {
        navigate(path); // Điều hướng đến đường dẫn được chỉ định
    };

    return (
        <header className={cx('wrapper')}>
            <div className={cx('fhs-top-header-banner')}>
                <img
                    src="https://cdn0.fahasa.com/media/wysiwyg/Thang-12-2024/NCCBITEX_KC_Header_1263x60.png"
                    alt="banner"
                    style={{ maxWidth: '100%', cursor: 'pointer' }}
                />
            </div>
            <div className={cx('container')}>
                <div className={cx('fhs-header-top-second-bar')}>
                        <img
                            src="https://cdn0.fahasa.com/skin/frontend/ma_vanese/fahasa/images/fahasa-logo.png"
                            alt="logo-header"
                            style={{ height: 'auto', maxWidth: '18%', cursor: 'pointer' }}
                            
                            onClick={() => handleNavigate('/')}
                        />
                    <div className={cx('fhs_option_header')}>
                        <div className={cx('fhs_option_header_span')}>
                            <img
                                src="https://cdn0.fahasa.com/skin/frontend/ma_vanese/fahasa/images/ico_menu.svg"
                                alt=""
                                style={{ width: '36px', cursor: 'pointer' }}
                            />
                            <img
                                src="https://cdn0.fahasa.com/skin/frontend/ma_vanese/fahasa/images/icon_seemore_gray.svg"
                                alt=""
                                style={{ cursor: 'pointer' }}
                            />
                        </div>
                    </div>

                    <Search/>

                    <div className={cx('fhs_center_space_header')}>
                        <div className={cx('fhs_noti_header')}>
                            <img
                                src="https://cdn0.fahasa.com/skin/frontend/ma_vanese/fahasa/images/ico_noti_gray.svg"
                                alt=""
                                className={cx('fhs_noti_icon_header')}
                            />
                            <div className={cx('fhs_top_menu_labe')}>Thông Báo</div>
                        </div>
                        <div className={cx('fhs_noti_header')}>
                            <img
                                src="https://cdn0.fahasa.com/skin/frontend/ma_vanese/fahasa/images/ico_cart_gray.svg"
                                alt=""
                                className={cx('fhs_noti_icon_header')}
                            />
                            <div className={cx('fhs_top_menu_labe')}>Giỏ Hàng</div>
                        </div>
                        <div onClick={() => handleNavigate('/login')} className={cx('fhs_noti_header')}>
                            <img
                                src="https://cdn0.fahasa.com/skin/frontend/ma_vanese/fahasa/images/ico_account_gray.svg"
                                alt=""
                                className={cx('fhs_noti_icon_header')}
                            />
                            <div className={cx('fhs_top_menu_labe')}>Tài Khoản</div>
                        </div>
                        <div className={cx('fhs_language_header_second_bar')}>
                            <div className={cx('fhs_top_language')}>
                                <img
                                    src="https://cdn0.fahasa.com/skin/frontend/ma_vanese/fahasa/images/default.svg"
                                    alt=""
                                    style={{ width: '80%' }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default FhasaHeader;
