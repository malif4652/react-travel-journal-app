export default function Content(props) {
  return (
    <div className="content">
      <img src={`assets/blog-img/${props.content.imageUrl}`} alt="" />
      <div className="content--block">
        <div className="content--location">
          <span>
            <img src="assets/icons/location.svg" alt="location" />
            <p>{props.content.location}</p>
          </span>

          <span>
            <a href={props.content.googleMapUrl}>View on Google Maps</a>
          </span>
        </div>

        <h2>{props.content.title}</h2>
        <p>
          {props.content.startDate} - {props.content.endDate}
        </p>
        <p>{props.content.description}</p>
      </div>
    </div>
  );
}
