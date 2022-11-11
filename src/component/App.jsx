import React from 'react';
import Footer from './Footer';
import Header from './Header';
import Note from './Note';
import Notes from "../Notes";
function App(){
    return <div>
    
    <Header />
    
    <Footer />
    {Notes.map(function(props){
        return <Note key = {props.key} title = {props.title} content = {props.content}/>
    })}

    </div>
}

export default App;