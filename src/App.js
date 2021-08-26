//1. Отримати всі user з jsonplaceholder та вивести їх. до кожного user зробити кнопку при натисканні якої
// виводиться вся інформація о юзерах всередені Users компоненти
//2. Отримати всі пости з jsonplaceholder та вивести їх. до кожного поста зробити кнопку при натисканні якої
// виводиться біль детальна інформація про пост в середині Posts компоненти
//3.Отримати всі коментарі з jsonplaceholder та вивести їх. до кожного поста зробити кнопку при натисканні якої
// виводиться біль детальна інформація про коментар в середині Comments компоненти

import Users from "./Components/users/Users";
import Posts from "./Components/posts/Posts";
import Comments from "./Components/comments/Comments";

export default function App() {
    return (
        <div>
            {<Users/>}
            {<Posts/>}
            {<Comments/>}

        </div>
    );
}