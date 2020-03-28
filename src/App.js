import React, { Component } from 'react';
import './App.css';
import UserAccount from './UserAccount';

class App extends Component {
  constructor() {
    super();
    this.handleLogin = this.handleLogin.bind(this);
    this.state = {
      username:'',
      password: '',
      isLoggedIn: false,
      users: ''
    };
  };
  
  componentDidMount() {
    this.setState({
      users: this.props.users
    })
  }
  
  handleLogin() {
    this.state.users.map((user, i) => {
      if(this.state.username===this.state.users[i].username)
        {
          if(this.state.password==this.state.users[i].password)
            {
              this.setState({isLoggedIn:true})
            }
          else
            alert("Either username or password is wrong!")
        }
    })
  }

  render(){
    const { username, password, isLoggedIn, users } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          {!isLoggedIn ? <>
            <h1>Welcome to Cash Bank</h1>
            <input
              name='username'
              value={username}
              placeholder='Username'
              onChange={(event)=> {this.setState({username:event.target.value})}}
              />
            <input
              name='password'
              type='password'
              value={password}
              placeholder='Password'
              onChange={(event)=> {this.setState({password:event.target.value})}}
              />
            <button onClick={this.handleLogin}>Submit</button>
          </>
          : <UserAccount username={username} users={users}/>}
        </header>
      </div>
    );
  };
}

export default App;
