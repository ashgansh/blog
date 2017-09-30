import React from 'react';
import { Link as RouterLink } from "react-router";

const Link = ({ to, children }) =>
  <RouterLink
    style={{ textDecoration: 'none', color: 'black' }}
    to={to}
  >
    { children }
  </RouterLink>

export default Link;
