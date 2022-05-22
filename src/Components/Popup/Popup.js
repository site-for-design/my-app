import styles from './Popup.module.css';

const Popup = (props) => {
    return (
        <div className={styles.popupWrap}>
            <div className={styles.popup}>
                <div className={styles.close} onClick={() => {
                    props.popupClose()
                }}>+</div>
                <h5>{props.popupTitle}</h5>
                <div className={styles.desc} dangerouslySetInnerHTML={{ __html: props.popupMessage }} />
            </div>
        </div>
    );
}
  
export default Popup;