import React , {useState} from 'react'
import SpeedDial from '@material-ui/lab/SpeedDial';
import SpeedDialIcon from '@material-ui/lab/SpeedDialIcon';
import SpeedDialAction from '@material-ui/lab/SpeedDialAction';
// import {SpeedDial , SpeedDialAction , SpeedDialIcon} from '@material-ui/lab'
import FileCopyIcon from '@material-ui/icons/FileCopyOutlined';
import SaveIcon from '@material-ui/icons/Save';
import PrintIcon from '@material-ui/icons/Print';
import ShareIcon from '@material-ui/icons/Share';
import FavoriteIcon from '@material-ui/icons/Favorite';
import EditIcon from '@material-ui/icons/Edit';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import CodeIcon from '@material-ui/icons/Code';
import InstagramIcon from '@material-ui/icons/Instagram';

const Connect = () => {
    // const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [hidden, setHidden] = useState(false);
  
    const handleVisibility = () => {
      setHidden((prevHidden) => !prevHidden);
    };
  
    const handleOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };


    const actions = [
        { icon: <GitHubIcon />, name: 'Github' , link: 'https://github.com/hajra40' },
        { icon: <LinkedInIcon />, name: 'LinkedIn' , link: 'https://www.linkedin.com/in/hajra-m-1b7b731ab/'},
        { icon: <CodeIcon />, name: 'Codeforces' , link: 'https://codeforces.com/profile/Hajra' },
        { icon: <InstagramIcon />, name: 'Instagram' , link: 'https://www.instagram.com/webdeveloper20/' },
      ];

    return (
        <div className="connect__btn">
            <SpeedDial
                ariaLabel="SpeedDial openIcon example"
                hidden={hidden}
                icon={<SpeedDialIcon openIcon={<EditIcon />} />}
                onClose={handleClose}
                onOpen={handleOpen}
                tooltipTitle={'Connect'}
                open={open}
            >
                {actions.map((action) => (
                    <SpeedDialAction
                        href={action.link}
                        key={action.name}
                        icon={action.icon}
                        tooltipTitle={action.name}
                        onClick={handleClose}
                    />
                ))}
            </SpeedDial>
        </div>
    )
}

export default Connect
