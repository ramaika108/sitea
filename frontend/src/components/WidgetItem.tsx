import { ReactNode } from 'react';
import {Link} from "react-router-dom";

type WidgetItemProps = {
    heading:string
    img?:string
    link?:string
    counter?:number
    children?: ReactNode
}

const WidgetItem = ({heading, img, link='#', counter, children}:WidgetItemProps) => (
    <Link to={link} className="col-md-4 col-sm-6 widget-item">
        <div className="widget-item__wrapper">
            {img ? <img src={img} alt={heading} className="widget-item__img" /> : children}
            <p className="widget-item__counter">{counter}</p>
        </div>
        <h3 className="widget-item__heading">{heading}</h3>
    </Link>
)

export default WidgetItem;
