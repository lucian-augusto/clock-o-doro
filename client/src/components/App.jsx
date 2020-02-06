import React from 'react';
import Header from './Header';
import Footer from './Footer';
import PomodoroTimer from './timer/PomodoroTimer';
import TodoList from './todo/TodoList';

function App() {
    return (
        <div>
            <Header />
            <PomodoroTimer />
            <TodoList />
            <Footer />
        </div>
    );
}

export default App;