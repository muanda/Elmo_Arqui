import React, { Fragment } from "react";
import NavBar from '../NavBar/NavBar'
import FlootB from '../FloatButtom/FloatButtom'
const Casa = () => {
	return (
		<Fragment>
            <NavBar/>
            <div className='container'></div>
			<div className="casa-text">
				<p>
					I here by assume total responsibility for the expenses of school,
					house and food of my brother, name Jose Nzola Meso Pedro Nimi date of
					birth 20/10/1993 passport number N2429367 issued at 17 of january 2019
					expiry at 17 january 2024.
				</p>
			</div>

            <FlootB/>
		</Fragment>
	);
};

export default Casa;
