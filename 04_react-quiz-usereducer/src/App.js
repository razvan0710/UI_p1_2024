import logo from './logo.svg';
import './App.css';
import Header from'./components/Header';
import Loader from './components/Loader';
import Error from './components/Error';
import { useState } from "react";
import MainComponent from './components/MainComponent';

export default function App() {


  return (
    <div className="app">
      <Header />
      <MainComponent/>
    </div>
  );
}

