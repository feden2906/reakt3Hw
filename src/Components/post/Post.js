export default function Post({item, chosePost}) {

    const onClickPostChoose = () => {
        chosePost(item);
    }


    return (
        <div>
            {item.id} - {item.title}
            <button onClick={onClickPostChoose}>details</button>

        </div>
    );
}