import React from 'react'
import '../App.css'
import FavoriteIcon from '@material-ui/icons/Favorite';
import { Chip } from '@material-ui/core';

const Footer = () => {
    return (
        <div className="footer">
                <h4>Made with <FavoriteIcon className="heart"/> by Hajra &copy; 2021 - 2022</h4>
        </div>
    )
}

export default Footer
