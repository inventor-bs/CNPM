import React from "react";
import "./topbar.css";
import { Link } from "react-router-dom";

export default function TopBar() {
    return (
        <div className="top">
            <div className="top-Left">
                <i className="top-Icon fa-brands fa-square-facebook"></i>
                <i className="top-Icon fa-brands fa-square-twitter"></i>
                <i className="top-Icon fa-brands fa-square-pinterest"></i>
                <i className="top-Icon fa-brands fa-square-instagram"></i>
            </div>

            <div className="top-Center">
                <ul className="top-Center__List">
                    <li className="top-Center__List__Item">
                        <Link to="/">HOME</Link></li>
                    <li className="top-Center__List__Item">
                        <Link to="">ABOUT</Link></li>
                    <li className="top-Center__List__Item">
                        <Link to="">CONTACT</Link></li>
                    <li className="top-Center__List__Item">
                        <Link to="/write">WRITE</Link></li>
                    <li className="top-Center__List__Item">
                        <Link to="">LOG OUT</Link></li>
                </ul>
            </div>

            <div className="top-Right">
                <img className="top-Right__img" src="https://t3.ftcdn.net/jpg/05/01/92/62/360_F_501926236_U0RyVag4vtyFkByzVQCEHNFEoZXBNeXq.jpg" alt="" />
                <i className="top-SearchIcon fa-solid fa-magnifying-glass"></i>
            </div>

        </div>
    )
}