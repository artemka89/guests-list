import { BiSearchAlt2, BiPlus, BiMinus } from "react-icons/bi";
import { UserType } from "../App";

import styles from "./GuestsList.module.scss";

type GuestsListProps = {
    users: UserType[];
};

export const GuestsList: React.FC<GuestsListProps> = ({ users }) => {
    return (
        <div className={styles.guestsList}>
            <div className={styles.top}>
                <div className={styles.input}>
                    <BiSearchAlt2 className={styles.iconSearch} />
                    <input type="text" />
                </div>
            </div>
            <ul className={styles.list}>
                {users.map((user) => (
                    <li key={user.id} className={styles.listItem}>
                        <div className={styles.avatar}>
                            <img src={user.avatar} alt="User" />
                        </div>
                        <div className={styles.userInfo}>
                            <div className={styles.fullName}>
                                {user.last_name} {user.first_name}
                            </div>
                            <div className={styles.email}>@ {user.email}</div>
                        </div>
                        <BiPlus className={styles.plus} />
                        <BiMinus className={styles.minus} />
                    </li>
                ))}
            </ul>
            <div className={styles.bottom}>
                <button className={styles.btn}>Отправить приглашение</button>
            </div>
        </div>
    );
};
