import FeaturedArticles from './FeaturedArticles'
import TopCommentedArticles from './TopCommentedArticles'
import TopVotedArticles from './TopVotedArticles'

const FrontPage = () => {
return (
    <div id="front-page">
        <h2 className="frontpage-headers">Featured </h2>
        <FeaturedArticles />
        <h2 className="frontpage-headers">Top commented</h2>
        <TopCommentedArticles/>
        <h2 className="frontpage-headers">Top voted</h2>
        <TopVotedArticles/>
    </div>
)
}

export default FrontPage