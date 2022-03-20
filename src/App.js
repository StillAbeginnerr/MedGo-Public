import React from 'react';
import image from "./ASSETS/abc.png";
import imag2 from "./ASSETS/bcd.png";

function App() {
    return ( < div className = "App" >
        <
        div className = "flex items-center justify-center  h-screen" >
        <
        div className = 'fixed bottom-1 right-2 h-120 w-152' >
        <
        img src = { image }
        id = "bgim"
        alt = "" >
        <
        /img> <
        /div> <
        div className = 'fixed top-2 h-120 w-152' >
        <
        img src = { imag2 }
        alt = "" >
        <
        /img> <
        /div> <
        div >
        <
        div className = "text-4xl font-extralight text-teal-100 text-center" >
        <
        h5 className = "p-4" > MedGo < /h5> </div >
        <
        form >
        <
        label className = "block" >
        <
        span className = "block text-sm text-teal-400" > < /span> <input type = { 'search' }
        placeholder = "Type here"
        size = "60"
        className = "p-3 rounded-3xl" >
        <
        /input> <div > <
        button class = "px-6 py-2 mt-4 text-white rounded-3xl bg-teal-600 hover:bg-blue-100" > Submit < /button> </div >


        <
        /label> </form > < /div> </div > < /div>
    );
}

export default App;