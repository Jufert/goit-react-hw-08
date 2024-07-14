import clsx from 'clsx';
import React from 'react'
import { NavLink } from 'react-router-dom';
import css from "./AuthNav.module.css"

const AuthNav = () => {
    const getNavLinkClassName = ({ isActive }) =>
  clsx(css.navLink, {
    [css.active]: isActive,
  });
  return (
    <>
        <NavLink className={getNavLinkClassName} to="/register">register</NavLink>
        <NavLink className={getNavLinkClassName} to="/login">login</NavLink>
    </>
  )
}

export default AuthNav