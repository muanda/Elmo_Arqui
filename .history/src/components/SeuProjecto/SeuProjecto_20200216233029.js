import React, { Fragment, useEffect } from "react";
import NavBar from "../NavBar/NavBar";
import M from "materialize-css/dist/js/materialize.min.js";
import FloatB from "../FloatButtom/FloatButtom";
import Footer from "../Footer/Footer";
import "./SeuProjecto.scss";
const SeuProjecto = () => {
	let val = 0;

	useEffect(() => {
		M.AutoInit();
	}, []);

	const selectValue = (e) => {
		val = e.target.value;
	};

	return (
		<Fragment>
			<NavBar />
			<div class="container">
				<div className="selector">
					<form class="col s12" id="form_projecto ">
						<div class="row">
							<div className="row">
								<div class="input-field col s12">
									<select onChange={selectValue}>
										<option value="" disabled selected>
											Escolhe o seu Projecto
										</option>
										<option value="1">Casa</option>
										<option value="2">Condomino</option>
										<option value="3">Escritorio</option>
									</select>
									<label>Seu Projecto</label>
								</div>
							</div>
						</div>

						<div class="row">
							<form class="col s12">
								<div class="row">
									<div class="input-field col s6">
										<input
										
											id="first_name"
											type="text"
											class="validate"
										/>
										<label for="first_name">First Name</label>
									</div>
									<div class="input-field col s6">
										<input id="last_name" type="text" class="validate" />
										<label for="last_name">Last Name</label>
									</div>
								</div>
								<div class="row">
									<div class="input-field col s12">
										<input
											disabled
											value="I am not editable"
											id="disabled"
											type="text"
											class="validate"
										/>
										<label for="disabled">Disabled</label>
									</div>
								</div>
								<div class="row">
									<div class="input-field col s12">
										<input id="password" type="password" class="validate" />
										<label for="password">Password</label>
									</div>
								</div>
								<div class="row">
									<div class="input-field col s12">
										<input id="email" type="email" class="validate" />
										<label for="email">Email</label>
									</div>
								</div>
								<div class="row">
									<div class="col s12">
										This is an inline input field:
										<div class="input-field inline">
											<input id="email" type="email" class="validate" />
											<label
												for="email"
												data-error="wrong"
												data-success="right"
											>
												Email
											</label>
										</div>
									</div>
								</div>
							</form>
						</div>
					</form>
				</div>
			</div>
			<FloatB />
			<Footer />
		</Fragment>
	);
};

export default SeuProjecto;
