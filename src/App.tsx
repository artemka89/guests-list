import { useEffect, useState } from "react";
import { GuestsList } from "./GuestsList/GuestsList";
import axios from "axios";

export type UserType = {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string
}

function App() {

  const [users, setUsers] = useState<UserType[]>([])

  useEffect(() => {
    axios('https://reqres.in/api/users').then(res => setUsers(res.data.data))
  }, [])  

  console.log(users);
  

  return (
    <div className="wrapper">
       <GuestsList users={users}/>
    </div>
  );
}

export default App;
