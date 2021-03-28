import React from "react";
import "../../styles/index.scss";

export function Jumbotron() {
	return (
		<div className="jumbotron jumbotron-fluid">
			<div className="container">
				<h1 className="display-4">Costa Rica... Pura vida!!!</h1>
				<p className="lead">
					Bienvenido al mundo de las aves exoticas de Costa Rica.
				</p>

				<p className="lead">
					<a
						className="btn btn-primary btn-lg"
						href="#"
						role="button">
						Call to Action!
					</a>
				</p>
			</div>
		</div>
	);
}
