import React, { Component, useEffect, useState } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import slideImg1 from '../../asset/img/slideImg.jpg';


const SlideShow = () => {
	const [SlideShow, SetSlideShow] = useState({
		img: slideImg1,
		title: "Projectando um Futuro Melhor e saudavel",
		subTitle: "Para Ti e a Sua Familia"
	});

	return (
		<div className="">
			<ul className="slides filter_img">
				<li>
					<img src= {SlideShow.img} />
					<div className="caption right-align">
						<h3 className="light grey-text text-lighten-3 slide-text">
							{SlideShow.title}
						</h3>
						<h5 class="light grey-text text-lighten-3 slide-text">
							{SlideShow.subTitle}
						</h5>
					</div>
				</li>
			</ul>
		</div>
	);
};

export default SlideShow;
