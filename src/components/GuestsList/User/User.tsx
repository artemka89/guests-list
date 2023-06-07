import { BiPlus, BiMinus } from "react-icons/bi";
import { UserType } from "../../../App";
import styles from "./User.module.scss";

type GuestProps = {
    user: UserType;
    onClickInvite: (id: number) => void;
    isInvited: boolean;
};

export const User: React.FC<GuestProps> = ({
    user,
    onClickInvite,
    isInvited,
}) => {
    return (
        <li className={styles.listItem}>
            <div className={styles.avatar}>
                <img src={user.avatar} alt="User" />
            </div>
            <div className={styles.userInfo}>
                <div className={styles.fullName}>
                    {user.last_name} {user.first_name}
                </div>
                <div className={styles.email}>@ {user.email}</div>
            </div>
            {isInvited ? (
                <BiMinus
                    onClick={() => {
                        onClickInvite(user.id);
                    }}
                    className={styles.minus}
                />
            ) : (
                <BiPlus
                    onClick={() => {
                        onClickInvite(user.id);
                    }}
                    className={styles.plus}
                />
            )}
        </li>
    );
};
