import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";
export const PrivateRoute = ({
  isAuthenticated,
  component: Component,
}) => {
	// console.log(isAuthenticated);
const token = window.localStorage.getItem("accesstoken");
	return (
		<Route exact={true}
			component={(props) =>
				(isAuthenticated || token) ? 
						<div>
							<Component {...props} />
						</div>
				 : (
					<Redirect to="/" />
				)
			}
		/>
	);
};

const mapStateToProps = (state) => ({
	isAuthenticated: state.user.isAuthenticated
});

export default connect(mapStateToProps)(PrivateRoute);