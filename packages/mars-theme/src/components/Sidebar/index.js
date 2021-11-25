import React from "react";
import { Global, css } from "frontity";
import {
  ProSidebar,
  SidebarHeader,
  SidebarContent,
  Menu,
  MenuItem,
  SubMenu,
} from "react-pro-sidebar";
import externalCss from "./style.css";
import SidebarStyling from "react-pro-sidebar/dist/css/styles.css";
import homeIcon from "../../assets/images/Home.png";

const Index = () => {
  return (
    <div>
      <Global styles={css(SidebarStyling)} />
      <Global styles={css(externalCss)} />
      <ProSidebar>
        <div className="navbar-header">
          <img src={homeIcon} alt="" />

          <p>Home</p>
        </div>
        <SidebarContent>
          <h5>Quick Links</h5>
          <Menu iconShape="square">
            <SubMenu title="Set up, configure, and run curriki studio">
              <MenuItem>Component 1</MenuItem>
              <MenuItem>Component 2</MenuItem>
            </SubMenu>

            <SubMenu title="How to contribute">
              <MenuItem>Curriki support</MenuItem>
              <MenuItem>Curriki partners</MenuItem>
              <MenuItem>Curriki Architecture</MenuItem>
            </SubMenu>

            <SubMenu title="System Overview">
              <MenuItem>Component 1</MenuItem>
              <MenuItem>COmponent 2</MenuItem>
              <MenuItem>Component 3</MenuItem>
            </SubMenu>

            <SubMenu title="APIs">
              <MenuItem>Curriki Apis</MenuItem>
              <MenuItem>Curriki Architecture</MenuItem>
              <MenuItem>Curriki database schema</MenuItem>
            </SubMenu>

            <SubMenu title="Web Application">
              <MenuItem>Open LearnX</MenuItem>
              <MenuItem>Vivenesity</MenuItem>
              <MenuItem>third one</MenuItem>
            </SubMenu>

            <SubMenu title="Mobile App">
              <MenuItem>Component 1</MenuItem>
              <MenuItem>Compnent 2</MenuItem>
              <MenuItem>COmponent 3</MenuItem>
            </SubMenu>

            <hr />
            <h5>Developer Tools</h5>

            <SubMenu title="Github Repository">
              <MenuItem>Component 1</MenuItem>
              <MenuItem>Component 2</MenuItem>
            </SubMenu>

            <SubMenu title="References Implementation Storybook">
              <MenuItem>Curriki support</MenuItem>
              <MenuItem>Curriki partners</MenuItem>
              <MenuItem>Curriki Architecture</MenuItem>
            </SubMenu>

            <SubMenu title="Docker Repository">
              <MenuItem>Component 1</MenuItem>
              <MenuItem>COmponent 2</MenuItem>
              <MenuItem>Component 3</MenuItem>
            </SubMenu>

            <SubMenu title="Cookbooks">
              <MenuItem>Curriki Apis</MenuItem>
              <MenuItem>Curriki Architecture</MenuItem>
              <MenuItem>Curriki database schema</MenuItem>
            </SubMenu>

            <SubMenu title="API Documentation">
              <MenuItem>Open LearnX</MenuItem>
              <MenuItem>Vivenesity</MenuItem>
              <MenuItem>third one</MenuItem>
            </SubMenu>

            <SubMenu title="Developer Forums">
              <MenuItem>Component 1</MenuItem>
              <MenuItem>Compnent 2</MenuItem>
              <MenuItem>COmponent 3</MenuItem>
            </SubMenu>
            <hr />
          </Menu>
        </SidebarContent>
      </ProSidebar>
    </div>
  );
};

export default Index;
