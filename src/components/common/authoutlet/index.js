import React, { useEffect, useState } from "react";

const AuthOutlet = ({ children, isAuthRequired, defaultReturn }) => {
  const [isAuthorized, setIsAuthorized] = useState(false);
  useEffect(() => {
    if (isAuthRequired) {
      const AUTH_TOKEN = localStorage.getItem("AUTH_TOKEN");
      if (AUTH_TOKEN) {
        setIsAuthorized(true);
      } else {
        setIsAuthorized(false);
      }
    } else {
      setIsAuthorized(true);
    }
  }, [isAuthRequired]);

  return isAuthorized ? <>{children}</> : defaultReturn || null;
};
export default AuthOutlet;
