import React from 'react'
import avatar from '../assets/img/billie.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase, faBuilding, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram, faLinkedin, faTelegram } from '@fortawesome/free-brands-svg-icons'
import "../assets/css/Contact.css"
const UserPageContact = (data) => {
    const props = data.data
    return (
        <div className='contact'>

            < div key={props.id} className='contact_box'>

                <div className='contact_box-avatar'>
                    <img src={avatar} width="100%" height="100%" alt="avatar" />
                    <h4>
                        {props.name}
                    </h4>
                    <h5>
                        {props.name2}
                    </h5>
                </div>

                <div className='contact_box-description'>

                    <div>
                        <div className='contact_box-line'>
                            <FontAwesomeIcon icon={faPhone} />
                            <a href={"tel:"+props.tel}>
                                {props.tel}
                            </a>
                        </div>
                        <div className='contact_box-line'>
                            <FontAwesomeIcon icon={faBuilding} />
                            <p>
                                {props.companyName}
                            </p>
                        </div>

                        <div className='contact_box-line'>
                            <FontAwesomeIcon icon={faBriefcase} />
                            <p>
                                {props.jobName}
                            </p>
                        </div>
                    </div>

                </div>

                <div className='contact_box-social'>
                    <a href={props.instagram} target="_blank"><FontAwesomeIcon icon={faInstagram} /></a>
                    <a href={props.telegram} target="_blank"><FontAwesomeIcon icon={faTelegram} /></a>
                    <a href={props.linkedin} target="_blank"><FontAwesomeIcon icon={faLinkedin} /></a>
                    <a href={props.facebook} target="_blank"><FontAwesomeIcon icon={faFacebook} /></a>
                </div>
            </div>
            {/* })} */}
        </div >
    )
}

export default UserPageContact
