import React, { Component } from 'react';
import './App.css';

class TitleComponent extends Component {
  state = {
    title: 'Hello',
  };
  render() {
    return <h2>{this.state.title}</h2>;
  }
}
const LoggedInComponent = () => (
  <div>
    <h3>Selamat Datang di website kami</h3>
  </div>
);
const LoginComponent = () => (
  <div>
    <h4>Jangan lupa login dulu sebelum mengunjungi website kami</h4>
  </div>
);
const AuthComponent = ({ isLoggedIn }) => (
  isLoggedIn ? <LoggedInComponent /> : <LoginComponent />
);
const ChildrenComponent = ({ children }) => (
  <ul>
    {React.Children.map(children, (child, index) => (
      <li key={index}>{child}</li>
    ))}
  </ul>
);
const App = () => (
  <div>
    <TitleComponent />
    <AuthComponent isLoggedIn={false} />
    <ChildrenComponent>
      <p>Item 1</p>
      <p>Item 2</p>
    </ChildrenComponent>
  </div>
);

export default App;