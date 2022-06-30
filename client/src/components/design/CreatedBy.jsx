import React from 'react'
// import { css } from 'emotion'
import '../../styles/Createdby.css'
import Name from '../../static/jdname.png'
import Logo from '../../static/jdlogo.png'

export default function CreatedBy({ setCreatedBy }) {
    return (
        <div onClick={() => setCreatedBy(false)} className='div1'>
            <div className='div2'>
                <h4>CREATED BY</h4>
                <img src={Logo} alt='Logo' className='created-by-logo' />
                <img src={Name} alt='Josh Diamond' className='created-by-name' />
            </div>
        </div>
    )
}
