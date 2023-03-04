import styles from "./css/banner.module.css"
import Header from "./Header"

export default function Banner() {
    
    return (
        <div className={`${styles["banner_wrapper"]}`} style={{backgroundImage:`url("/banner-bg.svg")`}}>
            <Header/>
            <div className={`container h-100 text-align-center ${styles["banner_content"]}`}>
                <h1 className="col-12 text-align-center l-70 f-600 text-secondary">
                    We Build Your <span className="f-700 text-gradient">Ideas</span><br />to Execute
                </h1>
                <p className="col-12 text-align-center text-primary l-27 f-400">
                    We Sucessfully Deleiverd the Dream Project of Iconic Brand
                </p>
                <h5 role="button" className="col-12 l-29 text-secondary f-700 d-inline-flex d-align-center d-justify-center cursor-pointer">
                    <img src="arrow.svg" alt="Expore Icon" className="op-05" />
                    <img src="arrow.svg" alt="Expore Icon" className="op-05" />
                    <img src="arrow.svg" alt="Expore Icon" className="mr-1" />
                    Explore
                </h5>
                <span className="col-12 text-align-center mt-3 d-flex d-align-center d-justify-center">
                    <img src="scroll.svg" />
                </span>
            </div>
        </div>
    )
}
