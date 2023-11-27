import "./heroPage.css";

export const HeroPage = () => {

    const selfie = "/noraSelfie.png"
    const cakePic = "/cakePic.png"
    return (
        <div>
            <div className="heroPage-container">
            <div className= "heroPage-one">
                <div>
                <img src={selfie} alt="nora selfie" />
                </div>
                <div>
                <blockquote> "Tasty delights has never <br />had a better handler" </blockquote>
                </div>
                
            </div>
            <div className= "heroPage-two">
                <div>
                    <span>Trust us with your</span>
                    <ul>
                        <li>Wedding Cakes</li>
                        <li>Birthday Cakes</li>
                        <li>Anniversary Cakes</li>
                        <li>Chops & Pastries</li>
                        <li>Suprise Package(s)</li>
                    </ul>
                </div>
                <div>
                    <img src={cakePic} alt="cake pic" />
                </div>
            </div>
            <div className="heroPage-three">
                <h3>Reviews</h3>
            </div>
        </div>
        </div>
        
    )
}