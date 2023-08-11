interface HeadingProps {
    heading:string
    subheading:string
}

const EzHeading = ({heading, subheading}:HeadingProps) => {
    return(
        <div className="last-news__heading">
            <h3>{heading}</h3>
            <p>{subheading}</p>
        </div>
    )
}

export default EzHeading;
