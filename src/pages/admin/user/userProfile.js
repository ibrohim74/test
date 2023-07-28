import React from 'react';

const UserProfile = () => {
    const clearT = ()=>{
        localStorage.clear()
    }
    return (
        <div>
            <button onClick={()=>clearT()}>asdsadasd</button>
        </div>
    );
};

export default UserProfile;
