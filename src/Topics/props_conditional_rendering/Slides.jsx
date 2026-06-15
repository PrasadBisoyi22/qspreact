import './Slides.css';
const Slides = ({ slideData }) => {
    const { type, url, label, heading, description, buttonText, buttonLink } = slideData;
    
    return (
        <section className="spacex-section">
            <div className="media-background">
                {type === 'video' ? (
                    <video src={url} autoPlay loop muted playsInline />
                ) : (
                    <img src={url} alt={heading} />
                )}
            </div>

            <div className="section-content" style={{ left: type==='image' && '50%'}}>
                {label && <span className="section-label">{label}</span>}
                <h2 className="section-heading">{heading}</h2>
                {description && <p className="section-description">{description}</p>}
                
                <a href={buttonLink} className="spacex-btn">
                    {buttonText || 'LEARN MORE'}
                    <span className="arrow"> →</span>
                </a>
            </div>
        </section>
    );
};

export default Slides;