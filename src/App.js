import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';

import UsersContainer from './components/Users/UsersContainer';

import DialogsContainer from "./components/Dialogs/DialogsContainer";
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

                        {/* exact добавляет строгое соответсвие без учета / */}
                        <Route  exact path='/dialogs'   element={<DialogsContainer />}/>
                        <Route  path='/profile'         element={<Profile />}/>
                        
                        <Route  path='/users'           element={<UsersContainer />}/>

                        <Route  path='/news'            element={<News/>}/>
                        <Route  path='/music'           element={<Music/>}/>
                        <Route  path='/settings'        element={<Settings/>}/>
                    </Routes>
                </div>
                
                       
                <a target="_blank" href={'https://youtube.com/watch?v=ap8HxJPwJhY&feature=shares'}>
                    <h1>Урок 55: React JS практика - pagination, постраничный вывод пользователей</h1>
                </a>
                                 
                
                <ul> Из не понятных моментов:
                    <li>патерн subscribe</li>
                    <li>метод bind();</li>
                    <li>Потренероваться со Spred операторами</li>
                </ul>

            </div>

    );
}

export default App;
