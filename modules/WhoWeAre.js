import SectionHeading from "./SectionHeading"
import styles from "./css/whoweare.module.css"
export default function WhoWeAre() {
  return (
    <div className="section">
        <div className="d-flex d-flex-wrap container">
            <div className={`col-8 ${styles["left_section"]}`}>
                <SectionHeading title="Talent and Teamwork " highlight="Win Experience" badge="Who We Are"></SectionHeading>
                <p className="text-grey l-27 mb-1">
                    We source, vet & deploy the top marketing & technology professionals India has to offer. Global companies hire from Uplers to make their hiring faster, easier & cost-effective.
                </p>
                <p className="text-grey l-27 mb-5">
                    From expertise-based services to becoming a one-stop-solution for all talent needs, Uplers has indeed come a long way. We make it easy for businesses to find the most talented developers, designers and marketers as per their needs faster and more efficiently.
                </p>

                <div className="mt-5 d-flex d-flex-wrap">
                    <img src="Review.png" alt="Google Reviews" />
                    <img src="Review.png" alt="Google Reviews" />
                </div>
            </div>
            <div className={`col-4 d-flex d-flex-wrap d-content-center ${styles["right_section"]}`}>
                <div className="col-12 text-align-center">
                    <h2 className="text-dark">
                        1+ 
                    </h2>
                    <h5 className="f-700 text-grey">
                        Years Experience
                    </h5>
                </div>
                <div className="col-12 text-align-center">
                    <h2 className="text-dark">
                        250+ 
                    </h2>
                    <h5 className="f-700 text-grey">
                        Happy Clients
                    </h5>
                </div>
                <div className="col-12 text-align-center">
                    <h2 className="text-dark">
                        20+ 
                    </h2>
                    <h5 className="f-700 text-grey">
                        Talented Employees
                    </h5>
                </div>
            </div>
        </div>
    </div>
  )
}
