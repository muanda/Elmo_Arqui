import React, { Fragment } from "react";
import NavBar from "../NavBar/NavBar";
import SlideShow from "../SlideShow/SlideShow";
import FloatButtom from "../FloatButtom/FloatButtom";
import HomeCardList1 from "../HomeCard/";
import HomeCardList2 from "../HomeCard/HomeCardList2";
import ImageGallery from "../ImageGallery/ImageGallery";
import Footer from "../Footer/Footer";

const Home = () => {
	return (
		<Fragment>
			<NavBar />
			<div className="container">
				<SlideShow />
				<HomeCardList1 />
				<ImageGallery />
				<HomeCardList2 />
			</div>
			<FloatButtom />
			<Footer />
		</Fragment>
	);
};

export default Home;
