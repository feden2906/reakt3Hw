import {useEffect, useState} from "react";
import {getCommentsOfUsers} from "../../services/comment.fetch.service";
import Comment from "../comment/Comment";


export default function Comments() {

    const [comments, setComments] = useState([]);
    const [comment, setComment] = useState([]);

    useEffect(() => {
        getCommentsOfUsers().then(value => setComments([...value]))
    }, []);

    const chooseComment = (k) => {
      setComment({...k});

    }
    return (
        <div className={'hakah'}>
            <div className={"Comments-Box-box"}>
                {
                    comments.map(value => <Comment
                        key={value.id}
                        item={value}
                        chooseComment={chooseComment}/>
                    )
                }

            </div>

            {comment && (
                <div className={"chosen-three"}>
                    {JSON.stringify(comment)}
                </div>
            )}

        </div>);
}
