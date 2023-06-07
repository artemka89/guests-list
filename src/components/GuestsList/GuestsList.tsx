import { BiSearchAlt2} from "react-icons/bi";
import { UserType } from "../../App";

import styles from "./GuestsList.module.scss";
import { User } from "./User/User";
import { ChangeEvent } from "react";

type GuestsListProps = {
    users: UserType[];
    searchValue: string;
    onChangeSearchValue: (event: ChangeEvent<HTMLInputElement>) => void;
    invaites: number[];
    onClickInvite: (id: number) => void;

};

export const GuestsList: React.FC<GuestsListProps> = ({
    users,
    searchValue,
    onChangeSearchValue,
    invaites,
    onClickInvite
}) => {
    return (
        <div className={styles.guestsList}>
            <div className={styles.top}>
                <div className={styles.input}>
                    <BiSearchAlt2 className={styles.iconSearch} />
                    <input
                        value={searchValue}
                        onChange={onChangeSearchValue}
                        type="text"
                    />
                </div>
            </div>
            <ul className={styles.userList}>
                {users
                    .filter((user) => {
                        const fullName = user.first_name + user.last_name;

                        return (
                            fullName.includes(searchValue.toLowerCase()) ||
                            user.email.includes(searchValue.toLowerCase())
                        );
                    })
                    .map((user) => (
                        <User key={user.id} user={user} onClickInvite={onClickInvite} isInvited={invaites.includes(user.id)}/>
                    ))}
            </ul>
            <div className={styles.bottom}>
                <button className={styles.btn}>Отправить приглашение</button>
            </div>
        </div>
    );
};
