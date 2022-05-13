import styles from './Popup.module.css';

const Popup = (props) => {
    return (
        <div className={styles.popupWrap}>
            <div className={styles.popup}>
                <div className={styles.close} onClick={() => {
                    props.isFormValid()
                }}>+</div>
                <h5>{props.popupMessage.title}</h5>
                <div className={styles.desc} dangerouslySetInnerHTML={{ __html: props.popupMessage.desc }} />
            </div>
        </div>
    );
}
  
export default Popup;