import { Button } from 'react-bootstrap';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import React, { useEffect } from 'react';

function NotFound() {
    const svgStyle = { height: "5rem", width: '5rem', fill: "#0066CC" };
    const navigate = useNavigate();

    useEffect(() => {
        var content = document.getElementById('content');
        if (content.offsetHeight < window.innerHeight) {
            var margin = (window.innerHeight - content.offsetHeight) / 2;
            content.style.marginTop = margin + "px";
        }
    });

    return (
        <div className='text-center' id='content'>
            <HelmetProvider>
                <Helmet>
                    <title>404 - Não encontrado</title>
                    <meta name="theme-color" content="#FFFFFF" />
                </Helmet>
            </HelmetProvider>
            <svg style={svgStyle} className="mb-5" xmlns="http://www.w3.org/2000/svg" width="139" height="139" viewBox="0 0 139 139">
                <path d="M69.5 139C107.793 139 139 107.856 139 69.5C139 31.2066 107.856 0 69.5 0C31.1444 0 0 31.2066 0 69.5C0 107.856 31.2066 139 69.5 139ZM69.5 136.576C64.8998 136.576 60.4861 136.14 56.1346 135.208L56.8184 133.343L69.4378 100.955L81.9951 132.97L82.5546 134.462L82.8654 135.208C78.576 136.14 74.1002 136.576 69.5 136.576ZM69.5 2.42441C106.488 2.42441 136.576 32.5121 136.576 69.5C136.576 90.263 127.064 108.912 112.207 121.221L111.585 119.667L69.5 10.195L27.1038 120.413L26.7929 121.221C11.8734 108.912 2.36225 90.263 2.36225 69.5C2.42441 32.5121 32.5121 2.42441 69.5 2.42441Z" />
            </svg>
            <h1 className='mb-1'>Oops!</h1>
            <h2 className='mb-3'>Página não implementada.</h2>
            <Button type="button" className="btn primary-blue-background white" onClick={() => navigate(-1)}>Voltar atrás</Button>
        </div>
    );
}

export default NotFound;