import {useEffect, useState} from "react";
import {getPostsofUser} from "../../services/post.fetch";
import Post from "../post/Post";

export default function Posts() {

    let [posts, setPosts] = useState([]);
    let [post, setPost] = useState(null);

    useEffect(() => {
        getPostsofUser().then(value => setPosts([...value]))
    }, []);

    const chosePost = (n) => {
        setPost({...n});
    };

    return (
        <div className={'index'}>
            <div className={"Posts-box"}>
                {
                    posts.map(value => <Post
                        key={value.id}
                        item={value}
                        chosePost={chosePost}/>
                    )
                }

            </div>
        </div>

       );
   }