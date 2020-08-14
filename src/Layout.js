import React from 'react';
import { Menu } from "antd";
import SubMenu from "antd/lib/menu/SubMenu";
import Sider from "antd/lib/layout/Sider";




function Layout(){
    return(
        <div className='Layout'>
            <Sider>Sider</Sider>
            <Menu>
                <Menu.Item>
                    Dashboard
                </Menu.Item>
            </Menu>
            <SubMenu>
                <Menu.ItemGroup>
                    <Menu.Item key='1'>option1</Menu.Item>
                    <Menu.Item key='2'>option2</Menu.Item>
                </Menu.ItemGroup>
            </SubMenu>

        </div>
    )
}

export default Layout;