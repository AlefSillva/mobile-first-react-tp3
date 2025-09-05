import "./Card.css";

export default function Card({ imgUrl,title, description }) {
  return (
    <div className="card">
      <img src={imgUrl} alt="" />
      <div className="card-description">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}
