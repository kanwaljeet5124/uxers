import Header from "../modules/Header"
import FeaturedBlogSlider from "../modules/FeaturedBlogSlider"
import SectionHeading from "../modules/SectionHeading"
import Articles from "../modules/Articles"
import LetsTalkBlack from "../modules/LetsTalkBlack"
import Footer from "../modules/Footer"
export default function Blogs() {
  return (
    <>
        <Header/>
        <section className="blog-banner">
            <div className="d-flex d-flex-wrap d-justify-center container">
                <h6 className="col-12 text-primary l-27 m-0 f-500 text-align-center">What We Do</h6>
                <h2 className="col-12 text-align-center f-400">News & Articles</h2>
                <span className="col-12 text-align-center text-grey f-400">#1 Blog on theme marketing by Bodrum</span>
                <form className="blog_form">
                  <input type="text" placeholder="Search by title, etc…" ></input>
                  <button type="submit"><img src="/magnifier.svg" alt="magnifier-icon" /></button>
                </form>
            </div>
            <div className="mt-5 pt-5">
              <FeaturedBlogSlider />
            </div>
        </section>
        <section>
          <SectionHeading classes="text-align-center" title="Recent  " highlight="Articles" />
          <Articles />
          <LetsTalkBlack />
          <Footer />
        </section>
    </>
  )
}
