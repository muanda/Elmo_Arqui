import React, { Fragment } from "react";
import "./HomeCard.scss";
const HomeCard2 = ({ img, title, description }) => {
	return (
		<Fragment>
			<div>
				<img src={img} className="card" alt='card img' />
				<h3 className="text">{title}</h3>
				<p>{description}</p>
				<Link to={`/projectolist/${title}`}>
					Learn More <i className=" material-icons">chevron_right</i>
				</Link>
			</div>
		</Fragment>
	);
};

export default HomeCard2;