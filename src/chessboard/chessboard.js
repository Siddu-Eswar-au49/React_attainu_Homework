import "./styles.css";

const rows = () => {
  let arr = [];
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
        arr.push(<div className={`${(i+j)%2==0 ? "black" : "white"} tile`}></div>)
    }
  }
  return arr;
};

const chessboard = () => {
  return <div className="board">{rows()}</div>;
};
