import React from 'react'
import './Header.css'

type HeaderProps = {
    hideMenu: boolean,
    name: string

}
export const Header: React.FC<HeaderProps> = (props: HeaderProps) => {
    const { hideMenu, name } = props;    
    return (
        <header>
            {hideMenu ? null : (
                 <div className='header'>
                    {name}
                 <ul>
                     <li><a href="/">Home</a></li>
                     <li><a href="/about">Sobre</a></li>
                 </ul>
             </div>
            )}           
        </header>
    )
}