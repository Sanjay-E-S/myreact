const Tilelist = ({ blogs, title, handledelete }) => {
    return (
        <div className="tilelist">
            <h2>{title}</h2>
            <div className="tileouter">
                {blogs.map((blog) => (
                    <div className="blog-tile" key={blog.id}>
                        <h3>{blog.title}</h3>
                        <p>{blog.body}</p>
                        <p>{blog.owner}</p>
                        {blog.delete &&
                            <button onClick={() => handledelete(blog.id)}>Delete</button>
                        }
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Tilelist;