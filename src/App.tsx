import { ChangeEvent, useEffect, useState } from "react";
import { Users } from "./components/Users/Users";
import axios from "axios";
import { Sucsses } from "./components/Success/Success";

export type UserType = {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    avatar: string;
};

function App() {
    const [users, setUsers] = useState<UserType[]>([]);
    const [searchValue, setSearchValue] = useState("");
    const [invites, setInvites] = useState<number[]>([]);
    const [sucsses, setSucsses] = useState(false);

    useEffect(() => {
        axios("https://reqres.in/api/users")
            .then((res) => setUsers(res.data.data))
            .catch((err) => {
                console.warn(err);
                alert("Ошибка при получении пользователя");
            });
    }, []);

    const onChangeSearchValue = (event: ChangeEvent<HTMLInputElement>) => {
        setSearchValue(event.target.value);
    };

    const onClickInvite = (id: number) => {
        if (invites.includes(id)) {
            setInvites((prev) => prev.filter((_id) => _id !== id));
        } else {
            setInvites((prev) => [...prev, id]);
        }
    };
    const onClickSucsses = () => {
        setSucsses(true);
    };

    return (
        <div className="wrapper">
            <div className="guestsList">
                {sucsses ? (
                    <Sucsses count={invites.length} />
                ) : (
                    <Users
                        users={users}
                        searchValue={searchValue}
                        onChangeSearchValue={onChangeSearchValue}
                        invaites={invites}
                        onClickInvite={onClickInvite}
                        onClickSucsses={onClickSucsses}
                    />
                )}
            </div>
        </div>
    );
}

export default App;
