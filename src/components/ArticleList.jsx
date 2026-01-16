import Article from "./Article";

/**
 * ArticleList Component
 * Renders a list of Article components from blog posts data
 * 
 * @param {Array} posts - Array of post objects containing article data
 */
export default function ArticleList({ posts }) {
    return (
        <main>
            {/* Map through posts array and render an Article component for each post */}
            {/* Each Article needs a unique key prop for React's reconciliation */}
            {posts.map((post) => (
                <Article
                    key={post.id}  // Unique identifier for React list rendering
                    title={post.title}
                    date={post.date}
                    preview={post.preview}
                    minutes={post.minutes}
                />
            ))}
        </main>
    );
}