import React from 'react'
import SkeletonElements from './skeletonElements'
import Shimmer from './Shimmer';

const SkeletonProfile = ()=>{
    return (
        <div className="skeleton-wrapper">
            <div className="skeleton-profile">
                <div>
                    <SkeletonElements type="avatar"/>
                </div>
                <div>
                    <SkeletonElements type="title"/>
                    <SkeletonElements type="text"/>
                    <SkeletonElements type="text"/>
                </div>
            </div>
            <Shimmer/>
        </div>
    )
}
export default SkeletonProfile;