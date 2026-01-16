/**
 * About Component
 * Displays blog information including logo and description
 * 
 * @param {string} image - URL for blog logo (defaults to placeholder if not provided)
 * @param {string} about - Description text for the blog
 */
export default function About({ image = "https://via.placeholder.com/215", about }) {
    return (
        <aside>
            {/* Blog logo with alt text for accessibility */}
            <img src={image} alt="blog logo" />

            {/* Blog description paragraph */}
            <p>{about}</p>
        </aside>
    );
}