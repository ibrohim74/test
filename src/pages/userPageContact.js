import React, {useEffect, useState} from "react";
import "../assets/css/Contact.css";
import {useParams} from "react-router-dom";
import {$host} from "../http";

const themes = {
    whiteBlack: {
        main: { red: 255, green: 255, blue: 255 },
        secondary: { red: 0, green: 0, blue: 0 },
    },
    blackWhite: {
        main: { red: 0, green: 0, blue: 0 },
        secondary: { red: 255, green: 255, blue: 255 },
    },
    greenBlack: {
        main: { red: 125, green: 186, blue: 40 },
        secondary: { red: 0, green: 0, blue: 0 },
    },
};


const UserPageContact = () => {
    const {username} = useParams()
    const [data, setData] = useState([])
    const getUser = async () => {
        try {
            const res = await $host.get('api/v1/contact/' + username)
            setData(res.data)
        } catch (e) {
            return window.location.assign('/')
        }
    }
    useEffect(() => {
        getUser()
    }, [])
    const contactVCF = async ()=>{
        try {
            const res = await $host.get('api/v1/vcard/' + username)
            const blob = new Blob([res.data],{type:'text/vcard'})
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `${data.username}.vcf`;
            a.click();
            URL.revokeObjectURL(url);
            console.log(res)
        } catch (e) {
            console.log(e)
        }
    }
    console.log(data)
    const [activeNav, setActiveNav] = useState("1");
    const handleNavBtnClick = (key) => {
        setActiveNav(key);
    };
    const fName = data.first_name;
    const lName = data.last_name;

// END MY CODE

    const MAIN_COLOR = themes.greenBlack.main; /* rgb(125, 186, 40) */
    const SECONDARY_COLOR = themes.greenBlack.secondary; /* rgb(255, 255, 255) */
    const TEXT_MAIN_COLOR =
        MAIN_COLOR.red * 0.299 +
        MAIN_COLOR.green * 0.587 +
        MAIN_COLOR.blue * 0.114 >
        186
            ? "#000000"
            : "#ffffff";
    const TEXT_SECONDARY_COLOR =
        SECONDARY_COLOR.red * 0.299 +
        SECONDARY_COLOR.green * 0.587 +
        SECONDARY_COLOR.blue * 0.114 >
        186
            ? "#000000"
            : "#ffffff";
    const LINK_COLOR =
        TEXT_SECONDARY_COLOR == "#000000"
            ? { red: 100, green: 149, blue: 237 }
            : {
                red: SECONDARY_COLOR.red + 120,
                green: SECONDARY_COLOR.green + 120,
                blue: SECONDARY_COLOR.blue + 120,
            };
    const BUTTON_COLOR =
        MAIN_COLOR.red * 0.299 +
        MAIN_COLOR.green * 0.587 +
        MAIN_COLOR.blue * 0.114 >
        100
            ? "#000000"
            : "#ffffff";

    document.documentElement.style.cssText = `--contact-main-color: rgb(${
        MAIN_COLOR.red
    }, ${MAIN_COLOR.green}, ${MAIN_COLOR.blue});
  --contact-secondary-color: rgb(${SECONDARY_COLOR.red}, ${
        SECONDARY_COLOR.green
    }, ${SECONDARY_COLOR.blue});
  --contact-text-main-color: ${TEXT_MAIN_COLOR};
  --contact-text-secondary-color: ${TEXT_SECONDARY_COLOR};
  --contact-link-color: rgb(${LINK_COLOR.red}, ${LINK_COLOR.green}, ${
        LINK_COLOR.blue
    });
  --contact-button-color: ${BUTTON_COLOR};
  --contact-button-inverted-color: ${
        BUTTON_COLOR == "#000000" ? "#ffffff" : "#000000"
    }
  `;






    // PUBLICK
    const contactContent = (
        <>
            <div className="contact-info-item">
                <svg
                    width="24"
                    height="24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M14.98 7.023v-4a1 1 0 1 1 2 0v2.611C17.61 5 21.681.908 22.273.316a1 1 0 1 1 1.414 1.414c-.592.592-4.642 4.665-5.268 5.293h2.561a1 1 0 1 1 0 2h-4a2 2 0 0 1-2-2Zm8.095 9.739a3.1 3.1 0 0 1 0 4.378l-.912 1.05c-8.19 7.838-28.119-12.084-20.4-20.3l1.15-1A3.081 3.081 0 0 1 7.24.929c.031.03 1.883 2.438 1.883 2.438a3.109 3.109 0 0 1-.006 4.282L7.96 9.105a12.783 12.783 0 0 0 6.931 6.945l1.465-1.165a3.1 3.1 0 0 1 4.28-.006s2.41 1.853 2.44 1.883ZM21.7 18.216s-2.393-1.842-2.424-1.872a1.1 1.1 0 0 0-1.549 0c-.027.026-2.044 1.634-2.044 1.634a1 1 0 0 1-.979.152A15.008 15.008 0 0 1 5.88 9.319a1 1 0 0 1 .145-1s1.608-2.014 1.635-2.04a1.1 1.1 0 0 0 0-1.549c-.03-.03-1.872-2.425-1.872-2.425a1.1 1.1 0 0 0-1.51.039l-1.15 1c-5.642 6.783 11.63 23.097 17.573 17.483l.912-1.051a1.12 1.12 0 0 0 .088-1.56Z"
                        fill="var(--incoming-call-icon-color, currentColor)"
                    ></path>
                </svg>
                <div className="item-text">
                    <span className="info-label">Mobile Phone</span>
                    <a href={"tel:+" + data.phone}>
                        <span>{data.phone}</span>
                    </a>
                </div>
            </div>

            {data.email ? (
                <div className="contact-info-item">
                    <svg
                        width="24"
                        height="24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <g clip-path="url(#id1)">
                            <path
                                d="M19 1H5a5 5 0 0 0-5 5v12a5 5 0 0 0 5 5h14a5 5 0 0 0 5-5V6a5 5 0 0 0-5-5ZM5 3h14a3 3 0 0 1 2.78 1.89l-7.66 7.66a3 3 0 0 1-4.24 0L2.22 4.89A3 3 0 0 1 5 3Zm14 18H5a3 3 0 0 1-3-3V7.5l6.46 6.46a5 5 0 0 0 7.08 0L22 7.5V18a3 3 0 0 1-3 3Z"
                                fill="var(--envelope-icon-color, currentColor)"
                            ></path>
                        </g>
                        <defs>
                            <clipPath id="id1">
                                <path fill="#fff" d="M0 0h24v24H0z"></path>
                            </clipPath>
                        </defs>
                    </svg>
                    <div className="item-text">
                        <span className="info-label">Email</span>
                        <a>
                            <span>{data.email}</span>
                        </a>
                    </div>
                </div>
            ) : (
                <></>
            )}
            {data.address ? (
                <div className="contact-info-item">
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <g
                            clip-path="url(#id2)"
                            fill="var(--map-marker-icon-color, currentColor)"
                        >
                            <path d="M12 6a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm0 6a2 2 0 1 1 0-4 2 2 0 0 1 0 4Z"></path>
                            <path d="M12 24a5.27 5.27 0 0 1-4.31-2.2c-3.812-5.257-5.745-9.209-5.745-11.747a10.055 10.055 0 0 1 20.11 0c0 2.538-1.933 6.49-5.744 11.747a5.271 5.271 0 0 1-4.31 2.2Zm0-21.819a7.883 7.883 0 0 0-7.874 7.874c0 2.01 1.893 5.727 5.33 10.466a3.145 3.145 0 0 0 5.09 0c3.435-4.739 5.328-8.456 5.328-10.466A7.883 7.883 0 0 0 12 2.181Z"></path>
                        </g>
                        <defs>
                            <clipPath id="id2">
                                <path fill="#fff" d="M0 0h24v24H0z"></path>
                            </clipPath>
                        </defs>
                    </svg>
                    <div className="item-text">
                        <span className="info-label">Location</span>
                        <a>
              <span>
                {data.address.country +
                " " +
                data.address.city +
                " " +
                data.address.region +
                " " +
                data.address.street}
              </span>
                        </a>
                    </div>
                </div>
            ) : (
                <></>
            )}
        </>
    );
    const companyContent = (
        <>
            <div className="contact-info-item">
                <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <g clip-path="url(#id3)">
                        <path
                            d="M7 14a1 1 0 0 1-1 1H5a1 1 0 0 1 0-2h1a1 1 0 0 1 1 1Zm4-1h-1a1 1 0 0 0 0 2h1a1 1 0 0 0 0-2Zm-5 4H5a1 1 0 0 0 0 2h1a1 1 0 0 0 0-2Zm5 0h-1a1 1 0 0 0 0 2h1a1 1 0 0 0 0-2ZM6 5H5a1 1 0 0 0 0 2h1a1 1 0 0 0 0-2Zm5 0h-1a1 1 0 0 0 0 2h1a1 1 0 1 0 0-2ZM6 9H5a1 1 0 0 0 0 2h1a1 1 0 0 0 0-2Zm5 0h-1a1 1 0 0 0 0 2h1a1 1 0 0 0 0-2Zm13 1v9a5.006 5.006 0 0 1-5 5H5a5.006 5.006 0 0 1-5-5V5a5.006 5.006 0 0 1 5-5h6a5.006 5.006 0 0 1 5 5h3a5.006 5.006 0 0 1 5 5ZM5 22h9V5a3 3 0 0 0-3-3H5a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3Zm17-12a3 3 0 0 0-3-3h-3v15h3a3 3 0 0 0 3-3v-9Zm-3 3a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm0 4a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm0-8a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z"
                            fill="var(--building-icon-color, currentColor)"
                        ></path>
                    </g>
                    <defs>
                        <clipPath id="id3">
                            <path fill="#fff" d="M0 0h24v24H0z"></path>
                        </clipPath>
                    </defs>
                </svg>
                <div className="item-text">
                    <span className="info-label">Company</span>
                    <span>{data.work_info && data.work_info.org}</span>
                </div>
            </div>
            <div className="contact-info-item">
                <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M19 4h-4V3a3 3 0 0 0-6 0v1H5a5 5 0 0 0-5 5v10a5 5 0 0 0 5 5h14a5 5 0 0 0 5-5V9a5 5 0 0 0-5-5Zm-8-1a1 1 0 0 1 2 0v2a1 1 0 0 1-2 0V3Zm11 16a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V9a3 3 0 0 1 3-3h4.18a2.98 2.98 0 0 0 5.64 0H19a3 3 0 0 1 3 3v10Zm-12-9H5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1Zm-1 8H6v-6h3v6Zm11-3a1 1 0 0 1-1 1h-5a1 1 0 0 1 0-2h5a1 1 0 0 1 1 1Zm0-4a1 1 0 0 1-1 1h-5a1 1 0 0 1 0-2h5a1 1 0 0 1 1 1Zm-2 8a1 1 0 0 1-1 1h-3a1 1 0 0 1 0-2h3a1 1 0 0 1 1 1Z"
                        fill="var(--id-badge-icon-color, currentColor)"
                    ></path>
                </svg>
                <div className="item-text">
                    <span className="info-label">Profession</span>
                    <span>{data.work_info && data.work_info.role}</span>
                </div>
            </div>
        </>
    );
    const socialsContent = (
        <>
            {/*{props.telegram ?  <div className="contact-info-item">*/}
            {/*  <svg*/}
            {/*      width="32"*/}
            {/*      height="32"*/}
            {/*      viewBox="0 0 40 40"*/}
            {/*      fill="none"*/}
            {/*      xmlns="http://www.w3.org/2000/svg"*/}
            {/*  >*/}
            {/*    <path*/}
            {/*        d="M20 3.33a16.67 16.67 0 1 0 0 33.34 16.67 16.67 0 0 0 0-33.34Z"*/}
            {/*        fill="#29B6F6"*/}
            {/*    ></path>*/}
            {/*    <path*/}
            {/*        d="m27.96 12.75-2.8 14.34s-.13.66-.94.66c-.43 0-.66-.2-.66-.2l-6.08-5.06L14.5 21l-3.82-1.01s-.68-.2-.68-.76c0-.47.7-.7.7-.7l15.99-6.34s.48-.18.84-.18c.22 0 .47.1.47.38 0 .18-.04.37-.04.37Z"*/}
            {/*        fill="#fff"*/}
            {/*    ></path>*/}
            {/*    <path*/}
            {/*        d="m19.75 24.38-2.57 2.53s-.11.09-.26.09c-.05 0-.1 0-.16-.03l.72-4.48 2.27 1.89Z"*/}
            {/*        fill="#B0BEC5"*/}
            {/*    ></path>*/}
            {/*    <path*/}
            {/*        d="M24.92 15.15a.38.38 0 0 0-.52-.07L14.5 21s1.58 4.42 1.82 5.18c.24.77.44.79.44.79l.72-4.48 7.37-6.82c.17-.12.2-.36.07-.52Z"*/}
            {/*        fill="#CFD8DC"*/}
            {/*    ></path>*/}
            {/*  </svg>*/}
            {/*  <div className="item-text">*/}
            {/*    <span className="info-label">Telegram</span>*/}
            {/*    <a href={props.telegram}>*/}
            {/*      <span>*/}
            {/*        {props.name} {props.name2}*/}
            {/*      </span>*/}
            {/*    </a>*/}
            {/*  </div>*/}
            {/*</div>: <></>}*/}
            {/*{props.instagram ? <div className="contact-info-item">*/}
            {/*  <img*/}
            {/*      srcSet="https://img.icons8.com/?size=512&amp;id=Xy10Jcu1L2Su&amp;format=png 2x, https://img.icons8.com/?size=512&amp;id=Xy10Jcu1L2Su&amp;format=png 1x"*/}
            {/*      src="https://img.icons8.com/?size=512&amp;id=Xy10Jcu1L2Su&amp;format=png 2x"*/}
            {/*      alt="Instagram icon"*/}
            {/*      width="256"*/}
            {/*      height="256"*/}
            {/*      style={{width: "32px", height: "32px"}}*/}
            {/*  />*/}
            {/*  <div className="item-text">*/}
            {/*    <span className="info-label">Instagram</span>*/}
            {/*    <a href={props.instagram}>*/}
            {/*      <span>*/}
            {/*        {props.name} {props.name2}*/}
            {/*      </span>*/}
            {/*    </a>*/}
            {/*  </div>*/}
            {/*</div>: <></>}*/}
            {/*{props.linkedin ? <div className="contact-info-item">*/}
            {/*  <img*/}
            {/*      srcSet="https://img.icons8.com/?size=512&amp;id=xuvGCOXi8Wyg&amp;format=png 2x, https://img.icons8.com/?size=512&amp;id=xuvGCOXi8Wyg&amp;format=png 1x"*/}
            {/*      src="https://img.icons8.com/?size=512&amp;id=xuvGCOXi8Wyg&amp;format=png 2x"*/}
            {/*      alt="LinkedIn icon"*/}
            {/*      width="256"*/}
            {/*      height="256"*/}
            {/*      style={{width: "32px", height: "32px"}}*/}
            {/*  ></img>*/}
            {/*  <div className="item-text">*/}
            {/*    <span className="info-label">LinkedIn</span>*/}
            {/*    <a href={props.linkedin}>*/}
            {/*      <span>*/}
            {/*        {props.name} {props.name2}*/}
            {/*      </span>*/}
            {/*    </a>*/}
            {/*  </div>*/}
            {/*</div>: <></>}*/}


        </>
    );

    return (
        <div className="contact">
            <div className="contact-box">
                <div className="container">
                    <div className="contact-top">
                        <div className="contact-header">
                            {/*<img className="contact-img" src={"props.avatar"}/>*/}
                            <div className="contact-initials">
                                <div>
                                    {data.first_name && fName.substring(0,1)}
                                    {data.first_name && lName.substring(0,1)}

                                </div>
                            </div>
                            <div className="contact-name">{data.first_name} {data.last_name}</div>
                        </div>
                        <div className="button-box">
                            <button className="contact-button" onClick={contactVCF}>
                <span className="contact-icon">
                  <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M12 4c.6 0 1 .4 1 1v14a1 1 0 1 1-2 0V5c0-.6.4-1 1-1Z"
                        fill="var(--plus-icon-color, currentColor)"
                    ></path>
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M4 12c0-.6.4-1 1-1h14a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1Z"
                        fill="var(--plus-icon-color, currentColor)"
                    ></path>
                  </svg>
                </span>
                                <span>Add to contacts</span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="contact-navbar">
                        <div
                            key="1"
                            onClick={() => handleNavBtnClick("1")}
                            className={`${
                                activeNav === "1" ? "active-nav" : ""
                            } navbar-button`}
                        >
                            <span>Contact</span>
                        </div>
                        <div
                            key="1"
                            onClick={() => handleNavBtnClick("2")}
                            className={`${
                                activeNav === "2" ? "active-nav" : ""
                            } navbar-button`}
                        >
                            <span>Company</span>
                        </div>
                        {/*<div*/}
                        {/*    key="1"*/}
                        {/*    onClick={() => handleNavBtnClick("3")}*/}
                        {/*    className={`${*/}
                        {/*        activeNav === "3" ? "active-nav" : ""*/}
                        {/*    } navbar-button`}*/}
                        {/*>*/}
                        {/*    <span>Socials</span>*/}
                        {/*</div>*/}
                    </div>
                </div>

                <div className="container">
                    <div className="contact-info">
                        {activeNav === "1" && contactContent}
                        {activeNav === "2" && companyContent}
                        {/*{activeNav === "3" && socialsContent}*/}
                    </div>
                </div>
                <div></div>
            </div>
        </div>
    );
};

export default UserPageContact;
