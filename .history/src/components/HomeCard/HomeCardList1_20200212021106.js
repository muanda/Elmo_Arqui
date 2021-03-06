import React, { useState, Fragment } from "react";
import HomeCard1 from "./HomeCard1";
import imgCasa from "../../asset/img/Cards/House1.jpg";
import imgCasa from "../../asset/img/Cards/escritorio.PNG";
import imgCasa from "../../asset/img/Cards/House1.jpg";
const HomeCardList1 = () => {
	const [card] = useState([
		{
			id: "1A",
			img: imgCasa,
			title: " Casas",
			description: ""
		},
		{
			id: "2B",
			img: slideImg1,
			title: "Escritório",
			description: ""
		},
		{
			id: "3C",
			img: slideImg1,
			title: "Decoração",
			description: ""
		}
	]);

	return (
		<Fragment>
			<div className="home-cards">
				{card.map((card) => (
					<HomeCard1
						key={card.id}
						img={card.img}
						title={card.title}
						description={card.description}
					/>
				))}
			</div>
		</Fragment>
	);
};

export default HomeCardList1;
