import React from 'react'
import '../App.css'
import FavoriteIcon from '@material-ui/icons/Favorite';
import { Chip } from '@material-ui/core';

const Footer = () => {
    return (
        <div className="footer">
            <div className="tags">
                <h3>Tags : </h3>
                    <Chip className="chip" color="primary" label="React.js" /> 
                    <Chip className="chip" label="API" />
                    <Chip className="chip" color="secondary" label="Material-ui" />
                    <Chip className="chip" label="Material-ui/icons" />
                    <Chip className="chip" label="React - Bootstrap" />
                    <Chip className="chip" color="secondary" label="Functional Components" />
                    <Chip className="chip" color="warning" label="Corona" />
            </div>
            <div className="about">
                <h1>About</h1>
                <p>Hey!! I am Hajra , pursuing Bachelor's Degree in Computer Science from Jamia Hamdard. I'm a Front-end Developer and a coder of intermediate level. Connect with me if you wan to do any project with me.</p>
                <h4>Made with <FavoriteIcon className="heart"/> by Hajra &copy; 2021 - 2022</h4>
            </div>
            
        </div>
    )
}

export default Footer
