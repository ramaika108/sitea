import {Link} from "react-router-dom";

type WhiteNoteProps = {
    heading: string
    text: string
    link?: string[]
    additionalClass?: string
}

const WhiteNote = ({heading, text, link, additionalClass}:WhiteNoteProps) => {

    return(
        <div className="container">
            <section className={`white-note ${additionalClass}`}>
                <h3 className="white-note__heading">{heading}</h3>
                <p className="white-note__text"
                    dangerouslySetInnerHTML={{__html: text}} />
                {link && <p><Link to={link[1]} className="ez-link white-note__link">{link[0]}</Link></p>}
            </section>

        </div>
    )
}

export default WhiteNote;
