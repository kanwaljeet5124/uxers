import ExploreCard from "./ExploreCard"
import SectionHeading from "./SectionHeading"
export default function ExploreBlog() {
  return (
    <div className="explore_blogs">
      <div className="container">
        <SectionHeading classes="text-align-center" badge="All topics Related blog" title="Explore Our " highlight="All Articles"></SectionHeading>
        <div className="explore_blog_grid"> 
          <ExploreCard />
          <ExploreCard />
          <ExploreCard />
          <ExploreCard />
          <ExploreCard />
          <ExploreCard />
        </div>
      </div>
    </div>
  )
}
