import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import BlohList from '../components/BlohList';
import Fetch from '../components/Fetch';
import Pagination from '../components/Pagination';
import bloh1 from '../images/bloh-1.png';
import bloh2 from '../images/bloh-2.png';
import { Category, Posts } from '../components/types';

const Bloh = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [categories, setCategories] = useState<Category[]>()
    const [posts, setPosts] = useState<Posts>();

    let page = searchParams.get('page')
    let currentCategory = searchParams.get('category')

    useEffect(() => {
        Fetch("/api/v1/bloh-categories", setCategories)
    }, [])

    useEffect( () => {
        if (currentCategory === null){
            Fetch(`/api/v1/blohs?page=${page}`, setPosts)
        } else {
            Fetch(`/api/v1/blohs?category=${currentCategory}&page=${page}`, setPosts)
        }
    },[currentCategory, page])

    const selectCategory = (newCategory:Category) => {
        setSearchParams({page: '1'});
        let categoryId = newCategory.id.toString()
        if (currentCategory !== categoryId){
            setSearchParams({category: categoryId});
            currentCategory = categoryId;
        } else {
            searchParams.delete('category')
        }
    }

    return(

	<div className="container">

		<section className="last-news--bloh">
			<div className="bloh__heading-wrapper">
				<div className="bloh__heading">

					<h3>Блох</h3>
				</div>
			</div>

			<div className="bloh__categories" id="top">
				<h4 className="categories__heading">Категории:</h4>
				<ul className="categories__items">
                    {categories && categories.map((c) => {
                        if (c.id.toString() === currentCategory) {
                            return(<li key={c.id} onClick={() =>selectCategory(c)} className="active-category" style={{backgroundColor: c.color}}>{c.name}</li>)
                        }
                        return(
                            <li key={c.id} onClick={() =>selectCategory(c)} style={{backgroundColor: c.color}}>{c.name}</li>
                        )
                    })}
				</ul>
        {!categories && (
            <div className="bloh__al"><h5>Грузим категории...</h5></div>
        )}
			</div>

            {posts && <BlohList blohs={posts.blohs}/>}
            {!posts && (
                <div className="bloh__alert"><h3>Ловим блохов...</h3></div>
            )}

            <Pagination pagination={posts?.pagination} extraClass='bloh__pagination--bottom'/>
        </section>
        </div>
    )
}

export default Bloh;
