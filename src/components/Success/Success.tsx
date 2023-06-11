import { BiCheck } from "react-icons/bi";

import styles from './Success.module.scss'

type SucssesProps = {
    count: number
}

export const Sucsses: React.FC<SucssesProps> = ({count}) => {
      return (
        <div className={styles.sucsses}>
            <BiCheck className={styles.icon}/>
            <span>Успешно!</span>
            <p>Всем {count} пользователям отправлено приглашение.</p>
            <button onClick={() => window.location.reload()} className={styles.btn}>Назад</button>
            
        </div>
      )
}