import React from "react";

import { Home, UserCircle, Settings } from "@bigbinary/neeto-icons";
import { Sidebar } from "@bigbinary/neetoui/v2/layouts";
import { Toastr } from "neetoui";
import { withRouter, BrowserRouter } from "react-router-dom";

import authenticationApi from "apis/authentication";
import { resetAuthTokens } from "apis/axios";
import { useAuthDispatch } from "contexts/auth";

// import AccountDropdown from "./AccountDropdown";
// import NavItem from "./NavItem";

const NavBar = () => {
  const authDispatch = useAuthDispatch();
  const handleLogout = async () => {
    try {
      await authenticationApi.logout();
      authDispatch({ type: "LOGOUT" });
      resetAuthTokens();
      window.location.href = "/";
    } catch (error) {
      Toastr.error(error);
    }
  };

  return (
    <BrowserRouter>
      <Sidebar
        appName="neetoUI"
        navLinks={[
          {
            icon: function noRefCheck() {
              return <Home color="#1e1e20" size={24} />;
            },
            label: "Notes",
            to: "/notes"
          },
          {
            icon: function noRefCheck() {
              return <UserCircle color="#1e1e20" size={24} />;
            },
            label: "Contacts",
            to: "/contacts"
          },
          {
            icon: function noRefCheck() {
              return <Settings color="#1e1e20" size={24} />;
            },
            label: "Settings",
            to: "/settings"
          }
        ]}
        onAppSwitcherToggle={function noRefCheck() {}}
        organizationInfo={{
          name: "neetoUI",
          subdomain: "neetoui.netlify.app"
        }}
        profileInfo={{
          dropdownProps: [
            {
              label: "Edit",
              onClick: function noRefCheck() {}
            },
            {
              label: "Logout",
              onClick: function noRefCheck() {
                handleLogout();
              }
            }
          ],
          imageUrl: "https://randomuser.me/api/portraits/women/90.jpg",
          name: "Kieran Miller"
        }}
      />
    </BrowserRouter>
  );
};

export default withRouter(NavBar);
