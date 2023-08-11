import { useState, useEffect } from 'react';
import Fetch from '../components/Fetch';

type About = {
    id: string;
    title: string;
    body: string;
    href: string;
}

const ObNam = () => {

    const [data, setData] = useState<About[]>()

    useEffect(() => {
        Fetch('/api/v1/about', setData)
    }, [])

    return(
	<div className="container">
		<section className="about-us">
			<h3  id="contents">Оглавление:</h3>
			<ol className="about-us__contetns">
				<li><a href="#">История возрождения</a></li>
				<li><a href="#">Во что мы верим</a></li>
				<li><a href="#">Интересные факты об нас</a></li>
				<li><a href="#">Как <span>докатиться</span> вступить в наши ряды</a></li>
				<li><a href="#">Поддержать проект</a></li>
                {data && data.map((d) => (
                    <li><a href={'#'+d.href}>{d.title}</a></li>
                ))}
			</ol>
		</section>

        {data && data.map(d => (
            <section className="about-us">
                <h3  id={d.href}>{d.title}:</h3>
                <div dangerouslySetInnerHTML={{__html: d.body}}></div>
                <a href="#contents" className="about-us__goto-contents">вернуться к оглавлению</a>
            </section>
        ))}

	</div>	
    )
}

export default ObNam;
