import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

const Channel = ({ data, ...props }) => {

    if (data) {
        return (
            <div>
                <div><Link to={data.url}><img src={data.image}/></Link></div>
                <div>
                    {data.id} - {data.name} - Integrity: {data.integrity} - Language: {data.language}
                    
                    {props.children}
                </div>
            </div>
        );
    } else {
        return (<div>Componente inválido</div>);
    }

}

export default Channel;