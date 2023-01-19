import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import {Route, Routes} from 'react-router-dom';




const App = (props) => {

    return (

            <div className="app-wrapper">
                <Header/>
                <Navbar/>

                <div className="app-wrapper-content">
                    <Routes>

                        <Route exact path='/dialogs'  element={                                                     
                            <Dialogs store = {props.store}/>}                                               
                        />

                        <Route  path='/profile'  element={
                            <Profile 
                                    profilePage={props.state.profilePage} 
                                    dispatch={props.dispatch}
                         />}/>


                        <Route       path='/news'     element={<News/>}/>
                        <Route       path='/music'    element={<Music/>}/>
                        <Route       path='/settings' element={<Settings/>}/>
                    </Routes>
                </div>
                
         


               
                <a target="_blank" href={'https://youtu.be/IUEkRTov_E4'}>
                    <h1>Начинаем урок 42</h1>
                </a>
                                
                <br></br>
                <a target="_blank" href={"https://coursehunter.net/course/react-redux-professionalnaya-razrabotka?lesson"}>
                    Еще один курс
                </a>
                
                
                <ul> Из не понятных моментов:
                    <li>патерн subscribe</li>
                    <li>метод bind();</li>
                </ul>

            </div>

    );
}

export default App;
