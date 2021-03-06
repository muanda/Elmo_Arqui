import React, { Component, useEffect, useState } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import slideImg1 from "../../asset/img/slideImg.jpg";

const SlideShow = () => {
	useEffect(() => {
		var elems = document.querySelectorAll(".carousel.carousel-slider");
		M.Carousel.init(elems, { fullWidth: true, indicators: true, duration: 10 });

		setInterval(() => {
			M.Carousel.init(elems, "next");
		}, 100);
	}, []);

	const [SlideShow, SetSlideShow] = useState({
		img: slideImg1,
		title: "Projectando um Futuro Melhor e saudavel",
		subTitle: "Para Ti e a Sua Familia"
	});

	return (
		<div className="slider">
			<div className="slide current">
				<div className="content">
					<h1>slide one</h1>
					<p>lorem 2</p>
				</div>
			</div>

      <div className="slide current">
				<div className="content">
					<h1>slide two</h1>
					<p>lorem 2</p>
				</div>
			</div>

      <div className="slider current">
				<div className="content">
					<h1>slide 3</h1>
					<p>lorem 2</p>
				</div>
			</div>
		</div>
	);
};

export default SlideShow;
