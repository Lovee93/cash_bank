import React, { Component } from 'react';
import App from './App';

class UserAccount extends Component {
	constructor(props){
		super(props);
		this.depositMoney = this.depositMoney.bind(this);
		this.withdrawMoney = this.withdrawMoney.bind(this);
		this.handleLogOut = this.handleLogOut.bind(this);
		this.state = {
			isLoggedIn: true,
			users: '',
			amount: 0,
			myIndex: 0,
		}
	}

	componentWillMount(){
		this.setState({
			users: this.props.users,
		})
	}

	componentDidMount() {
		this.setState({
			users:  {...this.state.users},
			myIndex: this.state.users.findIndex(x => x.username == this.props.username),
			bank_balance: this.state.users.reduce((prev,curr)=>{return prev + curr.user_balance}, 0)
		})
	}

	depositMoney(state,props) {
		this.state.users[this.state.myIndex].user_balance = parseInt(this.state.users[this.state.myIndex].user_balance) + parseInt(this.state.amount)
		this.forceUpdate()
		this.setState({
			bank_balance: parseInt(this.state.bank_balance) + parseInt(this.state.amount),
	});
		console.log(this.state.users[0].user_balance);
	};

	withdrawMoney(state,props) {
		if(parseInt(this.state.users[this.state.myIndex].user_balance) - parseInt(this.state.amount) >= 0){
			this.state.users[this.state.myIndex].user_balance = parseInt(this.state.users[this.state.myIndex].user_balance) - parseInt(this.state.amount)
		 	this.forceUpdate()
		 	this.setState({
		 		bank_balance: parseInt(this.state.bank_balance) - parseInt(this.state.amount),
		 	});
		}
	 	else {
	 		alert("You do not have enough credit!")
	 	}
	};

	handleLogOut(props){
		console.log(this.state.isLoggedIn)
		this.setState({
			isLoggedIn: false
		})
	};

	render() {
		const { amount, user_balance, bank_balance, isLoggedIn, users, myIndex } = this.state;
		return(
			<>
				{
					isLoggedIn ? 
						<>
							<h3>Greetings {this.props.username}!</h3>
							<div>
								<div>
									<h5>Your Balance: ${users[myIndex].user_balance}</h5>
								</div>
								<div>
									<h5>Bank Balance: ${bank_balance}</h5>
								</div>
							</div>
							<h4>What would you like to do? </h4>
							<input
								name='amount'
								placeholder='Enter amount'
								onChange={(event)=>{this.setState({amount:event.target.value})}}
							/>
							<br/>
							<button name="Deposit" onClick={this.depositMoney}>Deposit</button>
							<button name="Withdraw" onClick={this.withdrawMoney}>Withdraw</button><br/>
							<button name="Logout" onClick={this.handleLogOut}>Logout</button>
						</>
					: 
						<App users={Object.values(this.state.users)} bank_balance={bank_balance}/>
					}
				</>
			);
	}
} 

export default UserAccount;