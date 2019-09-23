import ReactDOM from 'react-dom'
import React, { Component } from 'react'
import axios from 'axios'
import Header from '@/layouts/HeaderComponent'
import Footer from '../layouts/FooterComponent'
import Input from './InputComponent'
import SignUpBottom from './SignUpBottom'
import Action from './ActionComponent'

class LoginComponent extends React.Component {
	constructor (props) {
	    super(props);
	    this.state = {
	    	isSignIn: true
	    };

	    this.handleSignUpClick = this.handleSignUpClick.bind(this);
	    this.handleSignInClick = this.handleSignInClick.bind(this);
	}

	handleSignUpClick() {
		this.setState(state => ({
			isSignIn: false
		}));
	}

	handleSignInClick() {
		this.setState(state => ({
			isSignIn: true
		}));
	}

	render() {
		const isSignIn = this.state.isSignIn;
		return(
			<div>
				<Header/>
				<div className="component-page page-grey mg-top-header">
					<div className="component-container">
						<div className="access-wrap login-wrap">
							<div className="access-toggle">
								<div className={!isSignIn ? ' toggle-option option-active' : 'toggle-option'} onClick={this.handleSignUpClick}>
									Sign Up
								</div>
								<div className={isSignIn ? ' toggle-option option-active' : 'toggle-option'} onClick={this.handleSignInClick}>
									Login
								</div>
							</div>

							<div className="social signup">
								<div className="signup-header">
									
									{isSignIn ? 
										<h3>Welcome back</h3>
									: 
										<h3>Let's get started and create your account</h3>
									}

								</div>
								<a className="btn btn-facebook">
									<i className="fa fa-facebook"></i>
									{isSignIn ? 
										"Connect with Facebook"
									: 
										"Sign Up with Facebook"
									}
								</a>
								<a className="btn btn-twitter">
									<i className="fa fa-twitter"></i>
									{isSignIn ? 
										"Connect with Twitter"
									: 
										"Sign Up with Twitter"
									}
								</a>
							</div>

							<div id = "register">
								<div className = "account-create">
									<div className="hr-with-logo email-option">
										<div className="bottom-border email-border"></div>
										<div className="center-text">Or with Email</div>
										<div className="bottom-border email-border"></div>
									</div>

									<form action={isSignIn?"/log-in":"/signup"} method="post" id="form-register">
										<div className="form-field-master">
											<div className ="form-container">
												<div className = "form-view signup-form">
													{!isSignIn &&
														<Input name="firstname" type="text" placeholder="First Name"/>
													}
													{!isSignIn &&
														<Input name="lastname" type="text" placeholder="Last Name"/>
													}
													<Input name="email" type="email" placeholder="Email Address"/>
													<Input name="password" type="password" placeholder="Password" signin = {isSignIn}/>
	
												</div>
												{!isSignIn && 
													<SignUpBottom />
												}
											</div>
										</div>
										<Action signin={isSignIn}/>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
				
			</div>
		);
	}
}

export default LoginComponent;