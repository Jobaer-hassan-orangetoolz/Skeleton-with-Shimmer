import React from 'react'
import SkeletonElements from './skeletonElements.js'
import Shimmer from './Shimmer.js'
const SkeletonArticle = ()=>{
    return (
        <div className="skeleton-wrapper">
            <div className="skeleton-article">
                <SkeletonElements type = "title"/>
                <SkeletonElements type = "text"/>
                <SkeletonElements type = "text"/>
                <SkeletonElements type = "text"/>
            </div>
            <Shimmer/>
        </div>
    )
}

export default SkeletonArticle;