import './Users.css'
import {useEffect, useState} from "react";
import {getPostsofUser, getUsers} from "../../services/user.fetch.service";
import User from "../User/User";

export default function Users() {
    let [users, setUsers] = useState([]);
    let [user, setUser] = useState(null);


    useEffect(() => {
        getUsers().then(value => setUsers([...value]))
    }, []);
    const choseUser = (u) => {
        setUser({...u})
        getPostsofUser(u.id).then(value => console.log(value))
    }

    return (
        <div className={'wrap'}>
            <div className={"user-box"}>
                {
                    users.map(value => <User
                        key={value.id}
                        item={value}
                        choseUser={choseUser}/>)
                }
            </div>
            {
                user && (<div className={"choosen-one"}>
                    {JSON.stringify(user)}
                </div>)
            }
        </div>
    );
}