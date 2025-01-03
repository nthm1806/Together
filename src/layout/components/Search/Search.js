import styles from './Search.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Search() {
    return (
        <div className={cx('fhs_search_header')}>
            <input placeholder="Tìm Kiếm Sản Phẩm..." />
            <button className={cx('fhs_button_search_header', 'fhs_mouse_point')}>
                <img
                    src="https://cdn0.fahasa.com/skin/frontend/ma_vanese/fahasa/images/ico_search_white.svg"
                    alt=""
                    style={{ width: '20px' }}
                />
            </button>
        </div>
    );
}

export default Search;
