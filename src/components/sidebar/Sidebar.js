import React from 'react';
import './Sidebar.scss';
import chef from '../../chef.svg';

const Sidebar = () =>{
    return(
    <div className="sidebar">
        <div className='icon-container'>

            <img src={chef} alt="chef" />

            <div className="bar-div">
                <div className="div1"></div>
                    <div className="bar-container">   
                        <div className="div2"> </div>
                        <div className="div3"></div>
                    </div>
                    <div className="div4"></div>
            </div>
       </div>
        <div className="page-links">
             <ul>
                <li>Page 1</li>
                <li>Page 2</li>
                <li>Page 3</li>
                <li>Page 4</li>

             </ul>

        </div>
        
    </div>
       
    )
}

export default Sidebar;