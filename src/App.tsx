import { ChangeEvent, useEffect, useState } from "react";
import { GuestsList } from "./components/GuestsList/GuestsList";
import axios from "axios";

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
    const [invaites, setInvaites] = useState<number[]>([]);

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
      
        if (invaites.includes(id)) {
          setInvaites(prev => prev.filter(_id => _id !== id))
        } else {
          setInvaites(prev => [...prev, id])
        }
    };

    

    return (
        <div className="wrapper">
            <GuestsList
                users={users}
                searchValue={searchValue}
                onChangeSearchValue={onChangeSearchValue}
                invaites={invaites}
                onClickInvite={onClickInvite}
            />
        </div>
    );
}

export default App;
