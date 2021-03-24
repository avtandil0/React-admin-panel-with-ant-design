import './Layout.css'
import React, { Fragment, useState } from 'react'
import 'antd/dist/antd.css'
import {Menu, Avatar} from 'antd'
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
} from '@ant-design/icons'



export default function HeaderMenu(props) {
    let theme,  switcher, headerColor
    
    if (props.colorMode === 'dark') {
        theme = 'dark';  
        switcher = 'white';
        headerColor = '#001529';
    }

    if (props.colorMode === 'light') {
        theme = 'light'; 
        switcher = 'black';
        headerColor = 'white';
    }
    
    const { SubMenu } = Menu

    const [collapsed, setCollapsed] = useState(true)

    function changeCollapse(item) {
        setCollapsed(!collapsed)
        props.siderMenuStyleChange(item)
    }


    const rightContent = [
        <Menu key="user" mode="horizontal" theme={theme} >
            <SubMenu
                title={
                    <Fragment>
                        <span style={{ color: '#999', marginRight: 4 }}>
                            <span>Hi,</span>
                        </span>
                        <span>username</span>
                        <Avatar style={{ marginLeft: 8 }} />
                    </Fragment>
                }
            >
                <Menu.Item key="SignOut">
                    <span>Sign out</span>
                </Menu.Item>
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