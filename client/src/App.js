import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import SimpleComponent from './SimpleComponent';
import ParentComponent from './ParentComponent';
import CounterApp from './CounterApp';
import FormComponent from './FormComponent';
import FetchDataComponent from './FetchDataComponent';
import CounterUsingClass from './CounterUsingClass';
import "./App.css";

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/parent">Parent-Child</Link></li>
          <li><Link to="/counter">Counter</Link></li>
          <li><Link to="/form">Form</Link></li>
          <li><Link to="/fetch">Fetch Data</Link></li>
          <li><Link to="/counterApp">Counter Using Class</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<SimpleComponent />} />
        <Route path="/parent" element={<ParentComponent />} />
        <Route path="/counter" element={<CounterApp />} />
        <Route path="/form" element={<FormComponent />} />
        <Route path="/fetch" element={<FetchDataComponent />} />
        <Route path="/counterApp" element={<CounterUsingClass/>}/>
      </Routes>
    </Router>
  );
}

export default App;
