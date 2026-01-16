/**
 * Header Component
 * Displays the blog's main title
 * 
 * @param {string} name - The blog's name/title
 */
export default function Header({ name }) {
    return (
        <header>
            {/* Main blog title */}
            <h1>{name}</h1>
        </header>
    );
}