const Articles = ({ post }) => {
    return (
        <article>
            <h3>{post.title}</h3>
            <p>{post.brief}</p>
            <a href={`https://blog.achulslander.com/${post.slug}`} target='_blank' rel='noopener noreferrer'>Read more...</a>
        </article>
    )
}

export default Articles