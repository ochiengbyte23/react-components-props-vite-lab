/**
 * Article Component
 * Displays an individual blog article with title, date, and preview
 * 
 * @param {string} title - Article title
 * @param {string} date - Publication date (defaults to "January 1, 1970")
 * @param {string} preview - Article preview/excerpt text
 */
export default function Article({ title, date = "January 1, 1970", preview }) {
    return (
        <article>
            {/* Article title */}
            <h3>{title}</h3>

            {/* Publication date in small text */}
            <small>{date}</small>

            {/* Article preview/excerpt */}
            <p>{preview}</p>
        </article>
    );
}