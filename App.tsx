import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import OrderGraph from './components/line';
import { useDispatch } from 'react-redux';
import Card from 'antd/es/card/Card';
import { store } from './app/store';
import { fetchPosts, fetchslice } from './features/apiFetch/actionslice';
import AppCalendar from './components/calendar';
import Layout from './components/Layout';
import MenuDevelopment from './components/DevMenu';
function App() {

  const dispatch = useDispatch


  useEffect(() => {
    console.log("Loading");
    
    store.dispatch(fetchPosts())
    console.log("Loaded");

  },[])


  return (
  <OrderGraph/>
    
  );
}

export default App;
