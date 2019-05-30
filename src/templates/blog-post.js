import React from 'react'
import PropTypes from 'prop-types'
import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
const HREF = window.location.href;

export const BlogPostTemplate = ({
  content,
  contentComponent,
  description,
  tags,
  title,
  helmet,
}) => {
  const PostContent = contentComponent || Content

  return (
    <section className="section">
      {helmet || ''}
      <div className="container content">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
              {title}
            </h1>
            <p>{description}</p>
            <a href={`${HREF}#disqus_thread`}>Link</a>
            <PostContent content={content} />
            {tags && tags.length ? (
              <div style={{ marginTop: `4rem` }}>
                <h4>Tags</h4>
                <ul className="taglist">
                  {tags.map(tag => (
                    <li key={tag + `tag`}>
                      <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  )
}

BlogPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
}

class BlogPost extends React.Component {
  static propTypes = {
    data: PropTypes.shape({
      markdownRemark: PropTypes.object,
    }),
  };

  componentDidMount () {
    const script = document.createElement("script");

    script.innerHTML = `
      var disqus_config = function () {
        this.page.url = window.location.href;
        this.page.identifier = window.location.pathname;
      };
      (function() { // DON'T EDIT BELOW THIS LINE
        var d = document, s = d.createElement('script');
        s.src = 'https://glitr-io.disqus.com/embed.js';
        s.setAttribute('data-timestamp', +new Date());
        (d.head || d.body).appendChild(s);
      })();
    `;
    script.async = true;

    document.body.appendChild(script);
  }

  render () {
    const {
      data: {
        markdownRemark: post
      }
    } = this.props;

    return (
      <Layout>
        <BlogPostTemplate
          content={post.html}
          contentComponent={HTMLContent}
          description={post.frontmatter.description}
          helmet={
            <Helmet titleTemplate="%s | Blog">
              <title>{`${post.frontmatter.title}`}</title>
              <meta
                name="description"
                content={`${post.frontmatter.description}`}
              />
            </Helmet>
          }
          tags={post.frontmatter.tags}
          title={post.frontmatter.title}
        />

        
        <section className="section">
          <div className="container content">
            <div className="columns">
              <div className="column is-10 is-offset-1">
                <div id="disqus_thread"></div>
                <noscript>Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript">comments powered by Disqus.</a></noscript>
              </div>
            </div>
          </div>
        </section>

        <script id="dsq-count-scr" src="//glitr-io.disqus.com/count.js" async></script>
      </Layout>
    )
  }
}

export default BlogPost

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        tags
      }
    }
  }
`
