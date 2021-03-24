import './Layout.css'
import React, { useState } from 'react'
import SiderMenu from './SiderMenu'
import HeaderMenu from './HeaderMenu'
import RoutingList from '../router/RoutingList'

export default function MainLayout() {
    const [colorMode, setColorMode] = useState('light')
    const colorChange = () => {
        colorMode === 'light' ? setColorMode('dark') : setColorMode('light')
    }

    const [siderMenuStyle, setSiderMenuStyle] = useState(false)
    const siderMenuStyleChange = (item) => {
        item ? setSiderMenuStyle(false) : setSiderMenuStyle(true)

    }

    return (
        <div className="flex-page">
            <HeaderMenu colorMode={colorMode} siderMenuStyleChange={siderMenuStyleChange} />
            <SiderMenu colorChange={colorChange} colorMode={colorMode} siderMenuStyle={siderMenuStyle} />
            <div className="content">
                <RoutingList />
            </div>
        </div>
    )
}