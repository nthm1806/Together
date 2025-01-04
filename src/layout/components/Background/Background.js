import classNames from "classnames/bind";
import styles from './Background.module.scss'
import PropTypes from 'prop-types'

const cx = classNames.bind(styles);

function Background({children, className}) {
    return ( 
        <div className={cx('wrapper')}>
            {children}
        </div>
     );
}

Background.prototype={
    children: PropTypes.node.isRequired,
    className: PropTypes.string
}

export default Background;