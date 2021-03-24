import './Layout.css'
import React, { Fragment } from 'react'
import 'antd/dist/antd.css'
import { Layout, Menu, Switch } from 'antd'
import {
    TeamOutlined,
    UserOutlined,
    DesktopOutlined,
    PieChartOutlined,
    FileOutlined
} from '@ant-design/icons'
import { useHistory } from 'react-router-dom';

export default function MainLayout(props) {
    let theme, bColor

    if (props.colorMode === 'dark') {
        theme = 'dark';
        bColor = '#001529';
    }

    if (props.colorMode === 'light') {
        theme = 'light';
        bColor = 'white';
    }

    const { SubMenu } = Menu
    const { Sider } = Layout

    const swithmode = [
        <div className="theamswitch" key='1' style={{marginLeft: props.siderMenuStyle?1:60}}>
            <Switch
                checkedChildren="ნათელი"
                unCheckedChildren="მუქი"
                onChange={() => props.colorChange()} />
        </div>
       
    ]

    const history = useHistory();

    const handleSiderMenuClick = action => {
        console.log('menu:', action);
        switch (action.key) {
          case '1':
            history.push('/');
            break;
          case '2':
            history.push('/simple2');
            break;
          default:
            history.push('/');
        }
      };

    return (
        <Fragment>
            <div className="side-nav" style={{ backgroundColor: bColor }}>
                <Sider collapsed={props.siderMenuStyle}
                    style={{
                        overflow: 'auto'
                    }}
                >
                <Menu theme={theme} defaultSelectedKeys={['1']} mode="inline" onClick={handleSiderMenuClick}>
                    <Menu.Item key="1" icon={<PieChartOutlined />}>
                        Option 1
                    </Menu.Item>
                    <Menu.Item key="2" icon={<DesktopOutlined />}>
                        Option 2
                    </Menu.Item>
                    <SubMenu key="sub1" icon={<UserOutlined />} title="User">
                        <Menu.Item key="3">Tom</Menu.Item>
                        <Menu.Item key="4">Bill</Menu.Item>
                        <Menu.Item key="5">Alex</Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
                        <Menu.Item key="6">Team 1</Menu.Item>
                        <Menu.Item key="8">Team 2</Menu.Item>
                    </SubMenu>
                    <Menu.Item key="9" icon={<FileOutlined />}>
                        Files
                </Menu.Item>
                </Menu>

                </Sider >
                {swithmode}
            </div >
        </Fragment>
    )
}