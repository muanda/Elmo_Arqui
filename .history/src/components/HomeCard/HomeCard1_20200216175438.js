import React, { Fragment } from "react";
import "./HomeCard.scss";
import { Link } from "react-router-dom";
const HomeCard1 = ({ img, title, description}) => {
	return (
		<Fragment>
			<div>
				<img src={img} className="card" />
				<h3 className="text">{title}</h3>
				<p>{description}</p>
				<Link to={"/projectolist/"} >
					Learn More <i className=" material-icons">chevron_right</i>
				</Link>
			</div>
		</Fragment>
	);
};

export default HomeCard1;
