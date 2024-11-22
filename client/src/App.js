import React, { useContext , useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import { ThemeProvider, ThemeContext } from './ThemeContext';
import SimpleComponent from './SimpleComponent';
import ParentComponent from './ParentComponent';
import FetchDataComponent from './FetchDataComponent';
import Login from './Login';
import TodoList from './TodoList';
import FormWithValidation from './FormWithValidation';
import WeatherApp from './WeatherApp';
import CounterAppRedux from './CounterAppRedux';
import CounterUsingClass from "./CounterUsingClass";
import FormComponent from "./FormComponent";
import './App.css';

function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav>
      <div className="menu-icon" onClick={toggleMenu}>
        ☰
      </div>
      <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/parent-child">Parent-Child</Link></li>
        <li><Link to="/form">Form</Link></li>
        <li><Link to="/fetch-data">Fetch Data</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/todo-list">Todo List</Link></li>
        <li><Link to="/form-with-validation">Form with Validation</Link></li>
        <li><Link to="/weather">Weather</Link></li>
        <li><Link to="/counter-redux">Counter with Redux</Link></li>
        <li><Link to="/counter-class">Counter using class</Link></li>
      </ul>
    </nav>
  );
}

function App() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className={`app ${theme}`}>
      <button className="toggle-button" onClick={toggleTheme}>Toggle Theme</button>
      <Router>
        <Navigation />
        <div className="container">
          <Routes>
            <Route path="/" element={<SimpleComponent />} />
            <Route path="/parent-child" element={<ParentComponent />} />
            <Route path="/form" element={<FormComponent />} />
            <Route path="/fetch-data" element={<FetchDataComponent />} />
            <Route path="/login" element={<Login />} />
            <Route path="/todo-list" element={<TodoList />} />
            <Route path="/form-with-validation" element={<FormWithValidation />} />
            <Route path="/weather" element={<WeatherApp />} />
            <Route path="/counter-redux" element={<CounterAppRedux />} />
            <Route path="/counter-class" element={<CounterUsingClass />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}
export default function AppWrapper() {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </Provider>
  );
}
 