import "./heroPage.css";

export const HeroPage = () => {

    const selfie = "/noraSelfie.png"
    const cakePic = "/cakePic.png"
    return (
        <div>
            <div className="heroPage-container">
            <div className= "heroPage-one">
                <img src={selfie} alt="nora selfie" />
                <blockquote> "Tasty delights has never had a better handler" </blockquote>
                <img src={cakePic} alt="cake pic" />
            </div>
            
        </div>
        </div>
        
    )
}