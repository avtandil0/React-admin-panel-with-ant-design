import './Layout.css'
import React, { Fragment, useState } from 'react'
import 'antd/dist/antd.css'
import { Menu, Avatar, Dropdown } from 'antd'
import { DownOutlined } from '@ant-design/icons';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
} from '@ant-design/icons'



export default function HeaderMenu(props) {
    let theme, switcher, headerColor

    if (props.colorMode === 'dark') {
        theme = 'dark';
        switcher = 'white';
        headerColor = '#001529';
    }

    if (props.colorMode === 'light') {
        theme = 'light';
        switcher = 'white';
        headerColor = '#1E88E5';
    }

    const { SubMenu } = Menu

    const [collapsed, setCollapsed] = useState(true)

    function changeCollapse(item) {
        setCollapsed(!collapsed)
        props.siderMenuStyleChange(item)
    }

    const menu = (
        <Menu>
            <Menu.Item>
                <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                    sign out
            </a>
            </Menu.Item>

        </Menu>
    );

    const rightContent = [
        <Menu key="user" style={{ backgroundColor: headerColor, color: 'white' }} >
            <SubMenu
                title={
                    <Dropdown overlay={menu}>
                        <a style={{ color: 'white' }}>
                            Hover me <DownOutlined />
                        </a>
                    </Dropdown>
                }
            >
            </SubMenu>
        </Menu>
    ]

    return (
        <div style={{ position: 'fixed', width: '99.1%', display: 'inline-block', zIndex: 1, backgroundColor: headerColor }}>

            <div style={{ float: 'left' }} >
                {!collapsed ? (
                    <MenuUnfoldOutlined
                        className="trigger"
                        style={{ color: switcher }}
                        onClick={() => changeCollapse(true)}
                    />
                ) : (
                    <MenuFoldOutlined
                        className="trigger"
                        style={{ color: switcher }}
                        onClick={() => changeCollapse(false)}
                    />
                )}
            </div>

            <div className="logo" />
            <div className="menu" >
                {rightContent}
            </div>

        </div>
    )
}