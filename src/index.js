import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Clock from './Clock';
import ActionLink from './ActionLink';
import Toggle from './Toggle';
import Greeting from './Greeting';
import LoginControl from './LoginControl';
import listItems from './NumberList';
import NameForm from './NameForm';
import EssayForm from './EssayForm';
import FlavorForm from './FlavorForm';
import Calculator from './TemperatureCalculator';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Clock />
    <Clock />
    <Clock />
    <ActionLink />
    <Toggle />
    <br />
    <Greeting isLoggedIn={true} />
    <br />
    <LoginControl />
    <br />
    <ol>{listItems}</ol>
    <NameForm />
    <EssayForm />
    <FlavorForm />
    <Calculator />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
