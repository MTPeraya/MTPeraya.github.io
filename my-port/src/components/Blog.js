import React from "react";
import "./Blog.css";

const blogPosts = [
  {
    id: 1,
    title: "[BLOG POST 1 TITLE]",
    excerpt: "[BLOG EXCERPT — 1-2 sentences summarizing the post topic and key insights.]",
    category: "Technical",
    date: "TBD",
    readTime: "5 min read",
    slug: "#",
  },
  {
    id: 2,
    title: "[BLOG POST 2 TITLE]",
    excerpt: "[BLOG EXCERPT — 1-2 sentences summarizing the post topic and key insights.]",
    category: "Case Study",
    date: "TBD",
    readTime: "8 min read",
    slug: "#",
  },
  {
    id: 3,
    title: "[BLOG POST 3 TITLE]",
    excerpt: "[BLOG EXCERPT — 1-2 sentences summarizing the post topic and key insights.]",
    category: "Technical",
    date: "TBD",
    readTime: "6 min read",
    slug: "#",
  },
  {
    id: 4,
    title: "[BLOG POST 4 TITLE]",
    excerpt: "[BLOG EXCERPT — 1-2 sentences summarizing the post topic and key insights.]",
    category: "Reflection",
    date: "TBD",
    readTime: "5 min read",
    slug: "#",
  },
];

export const Blog = () => {
  const categories = ["All", ...new Set(blogPosts.map((post) => post.category))];
  const [selectedCategory, setSelectedCategory] = React.useState("All");

  const filteredPosts =
    selectedCategory === "All" ? blogPosts : blogPosts.filter((post) => post.category === selectedCategory);

  return (
    <section className="blog">
      <div className="section-header">
        <h1>Articles & Case Studies</h1>
        <p>Technical writeups, project reflections, and lessons learned</p>
      </div>

      <div className="blog-filters">
        {categories.map((category) => (
          <button
            key={category}
            className={`filter-btn ${selectedCategory === category ? "active" : ""}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="blog-grid">
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post) => (
            <article key={post.id} className="blog-card">
              <div className="blog-card-header">
                <span className="blog-category">{post.category}</span>
                <span className="blog-date">{post.date}</span>
              </div>

              <h2 className="blog-title">{post.title}</h2>
              <p className="blog-excerpt">{post.excerpt}</p>

              <div className="blog-footer">
                <span className="read-time">📖 {post.readTime}</span>
                <a href={post.slug} className="read-more">
                  Read More →
                </a>
              </div>
            </article>
          ))
        ) : (
          <p className="no-posts">No posts in this category yet.</p>
        )}
      </div>

      <div className="blog-cta">
        <h2>Interested in my thoughts?</h2>
        <p>Subscribe to stay updated on new articles, technical insights, and project updates.</p>
        <div className="newsletter-form">
          <input type="email" placeholder="your@email.com" className="email-input" />
          <button className="btn btn-primary">Subscribe</button>
        </div>
      </div>
    </section>
  );
};
