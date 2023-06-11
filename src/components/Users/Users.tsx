import { BiSearchAlt2 } from "react-icons/bi";
import { UserType } from "../../App";

import styles from "./Users.module.scss";
import { User } from "../User/User";
import { ChangeEvent } from "react";

type UsersProps = {
    users: UserType[];
    searchValue: string;
    onChangeSearchValue: (event: ChangeEvent<HTMLInputElement>) => void;
    invaites: number[];
    onClickInvite: (id: number) => void;
    onClickSucsses: () => void;
};

export const Users: React.FC<UsersProps> = ({
    users,
    searchValue,
    onChangeSearchValue,
    invaites,
    onClickInvite,
    onClickSucsses,
}) => {
    return (
        <div className={styles.users}>
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
            <ul className={styles.usersList}>
                {users
                    .filter((user) => {
                        const fullName = user.first_name + user.last_name;

                        return (
                            fullName.includes(searchValue.toLowerCase()) ||
                            user.email.includes(searchValue.toLowerCase())
                        );
                    })
                    .map((user) => (
                        <User
                            key={user.id}
                            user={user}
                            onClickInvite={onClickInvite}
                            isInvited={invaites.includes(user.id)}
                        />
                    ))}
            </ul>
            {invaites.length > 0 && (
                <div className={styles.bottom}>
                    <button onClick={onClickSucsses} className={styles.btn}>
                        Отправить приглашение
                    </button>
                </div>
            )}
        </div>
    );
};
