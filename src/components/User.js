import React from 'react';
import { Link } from 'react-router-dom'


const User = ({ data, ...props }) => {

    if (data) {
        return (
            <div>
                <Link to={'/users/' + data.id}>{data.id} - {data.name} (Email:{data.email}) from {data.country}</Link>
            </div>
        );
    } else {
        return (<div>Componente inválido</div>);
    }

}

export default User;