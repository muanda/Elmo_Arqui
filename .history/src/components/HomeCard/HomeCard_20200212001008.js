import React, { Fragment} from "react";
import "./HomeCard.scss";
const HomeCard = ({ img, title, description }) => {
	return (
		<Fragment >
			<div></div>
			<div className="home-cards">
				<img src={img} className="card" />
				<h3 className="text">{title}</h3>
				<p>{description}</p>
				<a href="#">
					Learn More <i className=" fas fa-chevro-right"></i>
				</a>
			</div>
		</Fragment>
	);
};

export default HomeCard;
