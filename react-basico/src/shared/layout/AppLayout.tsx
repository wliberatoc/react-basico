import type React from "react";
import './AppLayout.css';

export const AppLayout = ({ children }: React.PropsWithChildren) => {

    return (
        <div className='layout-base'>
            <div className="layout-header">
                <a href="">Página Inicial</a>
                <a href="">Sobre</a>
            </div>

            <hr className="layout-divider"/>
            {children}
        </div>
    );
}