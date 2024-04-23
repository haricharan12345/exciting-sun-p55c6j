import "../styles.css";
export const Skills = (props) => {
  return (
    <div className="mainDiv">
      <h1 className="head">My skills </h1>
      <div className="details">
        <span>NAME: {props.name}</span>
        <br />
        <span>OCCUPATION: {props.occupation}</span>
        <p>java,javascript,reactjs,mysql,mongodb</p>
      </div>
    </div>
  );
};
