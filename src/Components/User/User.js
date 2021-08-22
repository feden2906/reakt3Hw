export default function User({item, choseUser}) {

    const onClickUserChoose = () => {
        choseUser(item);
    }
  return (
    <div>
      {item.id} - {item.name}
      <button onClick={onClickUserChoose}>details</button>
    </div>
  );
}