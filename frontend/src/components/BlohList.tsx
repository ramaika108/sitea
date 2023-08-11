import { FunctionComponent } from "react";
import {Link} from "react-router-dom";
import {BlohType} from "./types";

interface Props {
    blohs: BlohType[]
}

const BlohList:FunctionComponent<Props> = ({blohs}) => {

    return(
			<div className="row justify-content-center">
                {!blohs || blohs.length !== 0 || (
                    <div className="bloh__alert"><h3>Все болхи в этой категории уже пойманны и седенны, зайдите попозже...</h3></div>
                )}

                {blohs && blohs.map((p:BlohType) => {
                    return(
                        <div className="col-xl-4 col-md-6 news-list-item" key={p.id}>
                            <div className="news-list-item__wrapper">
                                <Link to={'/bloh/'+p.id} className="ez-link">
                                    <h3>{p.title}</h3>
                                    <div className="news-list-item__img" style={{backgroundImage:`url(${'/app/photos/' + p.main_img})`}}></div>
                                </Link>
                                <p>{p.description}</p>
                                <div className="news-list-item__footer">
                                    <Link to={'/blohs/?category='+p.category_id} className="ez-link">{p.category}</Link>
                                    <Link to={'/bloh/'+p.id} className="ez-link--underline">Читать дальше &gt;&gt;</Link>
                                </div>
                            </div>
                        </div>)
                })}


				</div>
            )}

export default BlohList;
