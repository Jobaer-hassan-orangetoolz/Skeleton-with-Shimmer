import React, { useEffect, useState } from 'react'
import SkeletonArticle from '../skeletons/skeletonArticle';


const Articles = ()=>{
    const [articles, setArticles] =useState([]);
    
    useEffect(()=>{
        setTimeout(async () => {
            const res = await fetch('https://jsonplaceholder.typicode.com/posts');
            const data = await res.json();
            setArticles(data);
        }, 5000);
    })

    const list = () => {
        const view = [];
        articles.map(article => {
            return(
            view.push(
                <div className='article' key={article.id}>
                    <h2>{article.title}</h2>
                    <p>{article.body}</p>
                </div>
            )
        )})
        return view;
    }
    const fetchData = list();

    return (
        <div className="articles">
            <h2>Articles</h2>
            {articles && fetchData}
            {console.log(articles)}
            {[1,2,3,4,5].map((n)=>{
                return <SkeletonArticle key={n}/>
            }) }
        </div>
    )
}
export default Articles;