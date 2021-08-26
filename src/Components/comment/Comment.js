export default function Comment({item, chooseComment}) {
    const onClickCommentChoose = () => {
        chooseComment(item);
    }
    return (
        <div>
            {item.id} - {item.name}
            <button onClick={onClickCommentChoose}>comment</button>
        </div>
    );
}