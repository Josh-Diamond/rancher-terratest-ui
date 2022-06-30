import React, { useState } from 'react'
import '../../styles/Nav.css'
import { Link, useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown, faFilePen, faFolderOpen, faGears, faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import rancherBlue from '../../static/rbf.png'
import rancherGrey from '../../static/rgf.png'
import { motion } from 'framer-motion'
import bell from '../../static/tbell.ico'
import whiteBell from '../../static/wbf.png'

export const Nav = ({setAuth, isOpen, setIsOpen}) => {

    const iconVariants = {
        opened: {
            rotate: 180,
        },
        closed: {
            rotate: 0
        }
    }

    const menuVariants = {
        opened: {
            height: "100vh",
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            borderBottomRightRadius: "0px"
        },
        closed: {
            height: "8vh",
            backgroundColor: "rgba(0, 0, 0, 0.2)",
            borderBottomRightRadius: "12px"
        }
    }

    const linkVariants = {
        opened: {
            opacity: 1
        },
        closed: {
            opacity: 0
        }
    }

    const Logout = () => {
        setIsOpen(false)
        setAuth(false)
        const nav = useNavigate()
        localStorage.removeItem("token")
        nav("/")
    }

    return (
        <motion.div initial={false} animate={isOpen ? "opened" : "closed"} variants={menuVariants} className='nav unselectable' transition={{ type: "tween", stiffness: 10 }}>
            <div className="nav-header">
                <Link to="/home">
                    <img src={isOpen ? rancherBlue : rancherGrey } className={isOpen ? 'rancher-blue' : 'rancher-grey'} />
                </Link>
                <motion.div  initial={false} className="animatedd" animate={isOpen ? "opened" : "closed"} variants={iconVariants} transition={{ type: "spring", stiffness: 150 }} onClick={() => setIsOpen(!isOpen)}>
                    <FontAwesomeIcon icon={faCaretDown} className='caret-down' />
                    {/* <img src={whiteBell} className='bell' /> */}
                </motion.div>
            </div>
        
                <motion.div initial={false} animate={isOpen ? "opened" : "closed"} variants={linkVariants} className='links'>
                    <div className='config-nav'>
                        <FontAwesomeIcon icon={faGears} />
                        <Link to="/config" className='config-link'>CONFIG</Link>
                    </div>
                    <div className='create-nav'>
                        <FontAwesomeIcon icon={faFilePen} />
                        <Link to="/create" className='create-link'>CREATE</Link>
                    </div>
                    <div className='manage-nav'>
                    <FontAwesomeIcon icon={faFolderOpen} />
                        <Link to="/manage" className='manage-link'>MANAGE</Link>
                    </div>
                    <div onClick={() => Logout()} className='logout-nav'>
                    <FontAwesomeIcon icon={faRightFromBracket} />
                        <Link to="/" className='logout-link'>LOGOUT</Link>
                    </div>
                {/* </div> */}
                </motion.div>
        </motion.div>


    )
}
