import { useState } from 'react';
import styles from './FahasaLogin.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Login() {
    const [isActiveLogin, setIsActiveLogin] = useState(true);
    const [isActiveRegister, setIsActiveRegister] = useState(false);

    const [showPassword, setShowPassword] = useState(false);
    const [forgetPassword, setForgetPassword] = useState(false);

    const handleLogin = () => {
        setIsActiveLogin(true);
        setIsActiveRegister(false);
    };

    
    const handleRegister = () => {
        setIsActiveRegister(true);
        setIsActiveLogin(false);
    };

    const handleShowPassword = () => {
        return setShowPassword(!showPassword);
    };

    const handleForgetPassword = () => {
        return setForgetPassword(!forgetPassword);
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('fhs_login')}>
                <div className={cx('fhs_login_input')}>
                    <div className={cx('fhs_login_register')}>
                        {!forgetPassword && (
                            <>
                                <div
                                    className={cx('fhs_option_login_register', { active: isActiveLogin })}
                                    onClick={handleLogin}
                                >
                                    Đăng Nhập
                                </div>
                                <div
                                    className={cx('fhs_option_login_register', { active: isActiveRegister })}
                                    onClick={handleRegister}
                                >
                                    Đăng Kí
                                </div>
                            </>
                        )}

                        {forgetPassword && <div className={cx('reset_password')}>Khôi phục mật khẩu</div>}
                    </div>
                    <div className={cx('fhs_option_login_content')}>
                        <div className={cx('input_box')}>
                            {forgetPassword && (
                                <>
                                    <div style={{ marginBottom: '1vw' }}>Số điện thoại</div>
                                    <div style={{ width: '100%', display: 'flex' }}>
                                        <input
                                            style={{ marginRight: '-12vh' }}
                                            type="text"
                                            placeholder="Nhập số điện thoại..."
                                        />
                                        <button className={cx('OTP_button')}>Gửi mã OTP</button>
                                    </div>
                                    <div style={{ marginBottom: '1vw' }}>Nhập mã OTP</div>
                                    <input type="text" placeholder="6 kí tự..." />
                                    <div style={{ marginBottom: '1vw' }}>Nhập mật khẩu mới</div>
                                    <div style={{ width: '100%', display: 'flex' }}>
                                        <input
                                            style={{ marginRight: '-4vh' }}
                                            type={showPassword ? 'text' : 'password'}
                                            placeholder="Nhập Mật Khẩu Mới..."
                                        />
                                        <button className={cx('OTP_button')} onClick={handleShowPassword}>
                                            {showPassword ? 'Ẩn' : 'Hiện'}
                                        </button>
                                    </div>
                                    <div className={cx('div_button')}>
                                        <button>Xác Nhận</button>
                                        <button
                                            style={{ background: 'blue', marginLeft: '2vh' }}
                                            onClick={handleForgetPassword}
                                        >
                                            Trở Lại
                                        </button>
                                    </div>
                                </>
                            )}

                            {!isActiveLogin && !forgetPassword && (
                                <>
                                    <div style={{ marginBottom: '1vw' }}>Số điện thoại</div>
                                    <div style={{ width: '100%', display: 'flex' }}>
                                        <input
                                            style={{ marginRight: '-12vh' }}
                                            type="text"
                                            placeholder="Nhập số điện thoại..."
                                        />
                                        <button className={cx('OTP_button')}>Gửi mã OTP</button>
                                    </div>
                                    <div style={{ marginBottom: '1vw' }}>Nhập mã OTP</div>
                                    <input type="text" placeholder="6 kí tự..." />
                                    <div style={{ marginBottom: '1vw' }}>Nhập mật khẩu</div>
                                    <div style={{ width: '100%', display: 'flex' }}>
                                        <input
                                            style={{ marginRight: '-4vh' }}
                                            type={showPassword ? 'text' : 'password'}
                                            placeholder="Nhập Mật Khẩu..."
                                        />
                                        <button className={cx('OTP_button')} onClick={handleShowPassword}>
                                            {showPassword ? 'Ẩn' : 'Hiện'}
                                        </button>
                                    </div>
                                    <div className={cx('div_button')}>
                                        <button>Đăng Kí</button>
                                    </div>
                                </>
                            )}

                            {!isActiveRegister && !forgetPassword && (
                                <>
                                    <div style={{ marginBottom: '1vw' }}>Số điện thoại</div>
                                    <input type="text" placeholder="Nhập số điện thoại..." />
                                    <div style={{ marginBottom: '1vw' }}>Nhập Mật Khẩu</div>
                                    <div style={{ width: '100%', display: 'flex' }}>
                                        <input
                                            style={{ marginRight: '-4vh' }}
                                            type={showPassword ? 'text' : 'password'}
                                            placeholder="Nhập Mật Khẩu..."
                                        />
                                        <button
                                            style={{
                                                position: 'relative',
                                                right: '2vh',
                                                background: 'white',
                                                color: 'blue',
                                                height: '4vh',
                                                marginTop: '0.5vh',
                                                cursor: 'pointer',
                                            }}
                                            onClick={handleShowPassword}
                                        >
                                            {showPassword ? 'Ẩn' : 'Hiện'}
                                        </button>
                                    </div>
                                    <div onClick={handleForgetPassword} className={cx('forget_password')}>
                                        Quên Mật Khẩu ?
                                    </div>
                                    <div className={cx('div_button')}>
                                        <button>Đăng Nhập</button>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
