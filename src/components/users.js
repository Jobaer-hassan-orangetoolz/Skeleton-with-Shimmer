import React, { useEffect, useState } from 'react'
import SkeletonProfile from '../skeletons/SkeletonProfile';

const Users = ()=>{

    const [Profile, setProfile] = useState(null);
    
    useEffect(()=>{
        setTimeout(async ()=>{
            const res = await fetch('https://jsonplaceholder.typicode.com/users/1');
            const data = await res.json();
            setProfile(data);
        },5000)
    })
    const list = () => {
           return(
                <div className="profile">
                    <h3>{Profile.username}</h3>
                    <p>{Profile.email}</p>
                    <a href={Profile.website}>{Profile.website}</a>
                </div>
           )
                
          
    }

    return (
        <div className="user">
            <h2>user Details
            </h2>
            {Profile && list()}
            {!Profile && <SkeletonProfile/>}
        </div>
    )
}
export default Users;