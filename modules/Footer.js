export default function Footer(){
    return (
        <>
        <div className="container d-flex d-flex-wrap pt-5">
            <div className="col-xs-12 col-lg-5 mt-5">
                <div className="col-9 d-flex d-flex-wrap ">
                    <img src="logo.png" alt="uxerslab"/>
                    <img src="f1.png" className="col-12 mt-50"/>
                    <h6 className="col-12 f-400 text-grey l-21 mt-5  d-flex">
                        We source, vet & deploy the top marketing & technology professionals India has to offer. Global companies hire from Uplers to make their hiring faster, easier & cost-effective
                    </h6>
                    
                </div>
            </div>
            <div className="col-xs-12 col-lg-5 d-flex d-flex-wrap mt-5">
                <div className="col-xs-6  mt-3">
                    <h5 className="f-700 l-19 mb-2">About Us</h5>
                    <h6 className="f-400 text-grey l-27 ">Our Culture</h6>
                    <h6 className="f-400 text-grey l-27 ">Team</h6>
                    <h6 className="f-400 text-grey l-27 ">Corporate</h6>
                </div>
                <div className="col-xs-6  mb-5 mt-3">
                    <h5 className="f-700 l-19 mb-2">Resources</h5>
                    <h6 className="f-400 text-grey l-27 ">Testimonials</h6>
                    <h6 className="f-400 text-grey l-27 ">Case Studies</h6>
                    <h6 className="f-400 text-grey l-27 ">Blogs</h6>
                </div>
                <div className="col-xs-6 mt-3">
                    <h5 className="f-700 l-19 mb-2">Projects</h5>
                    <h6 className="f-400 l-27 text-grey">Digital Marketing</h6>
                    <ul className="m-0 p-0">
                        <li className="f-400 text-grey l-27 h6">SEO</li>
                        <li className="f-400 text-grey l-27 h6">SEM</li>
                    </ul>
                    <h6 className="f-400 l-27 text-grey">Web Development</h6>
                    <ul className="m-0 p-0">
                        <li className="f-400 text-grey l-27 h6">Frontend Development</li>
                        <li className="f-400 text-grey l-27 h6">Hubspot Development</li>
                    </ul>
                    <h6 className="f-400 l-27 text-grey ">Digital Services</h6>
                </div>
                <div className="col-xs-6 mt-3">
                    <h5 className="f-700 l-19 mb-2">Careers</h5>
                    <h6 className="f-400 text-grey l-27 ">Join Uxerslab</h6>
                </div>
            </div>
            <div className="col-xs-12 col-lg-2 mt-5">
                <h6 className="f-700 l-19 mb-2 mt-3">Privacy Policies</h6>
                <h6 className="f-700 l-19 mb-2">Terms & Conditions</h6>
                <h6 className="f-700 l-19 mb-2">+91 123456789</h6>
                <h6 className="f-700 l-19 mb-2">support@uxerslab.com</h6>
            </div>
        </div>
        <div className="bg-primary p-2 mt-5">
            <div className="container d-flex d-justify-space-between">
                <h5 className="f-500 l-24 text-white">Uxerslab -   © 2023 All Rights Reserved</h5>
                <div className="d-flex d-flex-wrap d-align-center gap-20">
                    <img src="fb.svg" alt="facebook"/>
                    <img src="twitter.svg" alt="twitter"/>
                    <img src="linkedin.svg" alt="linkedin"/>
                    <img src="insta.svg" alt="insta"/>
                </div>
            </div>
        </div>
        </>
    );
}