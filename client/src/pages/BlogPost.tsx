import { useParams, Link, Redirect } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import SchemaMarkup from "@/components/SchemaMarkup";
import { getBlogPost, blogPosts, type BlogPost as BlogPostType } from "@/data/blogPosts";
import { Calendar, User, ArrowLeft, ArrowRight, Tag } from "lucide-react";

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getBlogPost(slug) : undefined;

  if (!post) {
    return <Redirect to="/blog" />;
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  // Get related posts (same category, excluding current)
  const relatedPosts = blogPosts
    .filter(p => p.slug !== post.slug && p.category === post.category)
    .slice(0, 2);

  // If not enough related posts, add from other categories
  if (relatedPosts.length < 2) {
    const otherPosts = blogPosts
      .filter(p => p.slug !== post.slug && !relatedPosts.includes(p))
      .slice(0, 2 - relatedPosts.length);
    relatedPosts.push(...otherPosts);
  }

  const articleSchemaData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "description": post.excerpt,
    "author": {
      "@type": "Person",
      "name": post.author
    },
    "publisher": {
      "@type": "Organization",
      "name": "Elevate Growth Solutions",
      "url": "https://www.elevategrowth.solutions"
    },
    "datePublished": post.date,
    "dateModified": post.date,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://www.elevategrowth.solutions/blog/${post.slug}`
    }
  };

  const breadcrumbSchemaData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.elevategrowth.solutions"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Blog",
        "item": "https://www.elevategrowth.solutions/blog"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": post.title,
        "item": `https://www.elevategrowth.solutions/blog/${post.slug}`
      }
    ]
  };

  // Simple markdown-like rendering for content
  const renderContent = (content: string) => {
    const lines = content.trim().split('\n');
    const elements: JSX.Element[] = [];
    let currentList: string[] = [];
    let listType: 'ul' | 'ol' | null = null;

    const flushList = () => {
      if (currentList.length > 0 && listType) {
        const ListTag = listType;
        elements.push(
          <ListTag key={`list-${elements.length}`} className={`${listType === 'ul' ? 'list-disc' : 'list-decimal'} pl-6 mb-6 space-y-2`}>
            {currentList.map((item, i) => (
              <li key={i} className="font-serif text-gray-700">{item}</li>
            ))}
          </ListTag>
        );
        currentList = [];
        listType = null;
      }
    };

    lines.forEach((line, index) => {
      const trimmedLine = line.trim();

      // Headers
      if (trimmedLine.startsWith('## ')) {
        flushList();
        elements.push(
          <h2 key={index} className="font-display text-2xl font-semibold text-gray-900 mt-8 mb-4">
            {trimmedLine.slice(3)}
          </h2>
        );
      } else if (trimmedLine.startsWith('### ')) {
        flushList();
        elements.push(
          <h3 key={index} className="font-display text-xl font-semibold text-gray-900 mt-6 mb-3">
            {trimmedLine.slice(4)}
          </h3>
        );
      }
      // Bold text lines
      else if (trimmedLine.startsWith('**') && trimmedLine.endsWith('**')) {
        flushList();
        elements.push(
          <p key={index} className="font-serif text-gray-900 font-semibold mb-2">
            {trimmedLine.slice(2, -2)}
          </p>
        );
      }
      // Unordered list items
      else if (trimmedLine.startsWith('- ')) {
        if (listType !== 'ul') {
          flushList();
          listType = 'ul';
        }
        currentList.push(trimmedLine.slice(2));
      }
      // Regular paragraphs
      else if (trimmedLine.length > 0) {
        flushList();
        // Handle inline links and formatting
        let processedText = trimmedLine;
        // Convert markdown links to JSX
        const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
        const parts: (string | JSX.Element)[] = [];
        let lastIndex = 0;
        let match;

        while ((match = linkRegex.exec(processedText)) !== null) {
          if (match.index > lastIndex) {
            parts.push(processedText.slice(lastIndex, match.index));
          }
          parts.push(
            <Link key={`link-${match.index}`} href={match[2]}>
              <span className="text-primary hover:underline cursor-pointer">{match[1]}</span>
            </Link>
          );
          lastIndex = match.index + match[0].length;
        }
        if (lastIndex < processedText.length) {
          parts.push(processedText.slice(lastIndex));
        }

        elements.push(
          <p key={index} className="font-serif text-gray-700 leading-relaxed mb-4">
            {parts.length > 0 ? parts : processedText}
          </p>
        );
      }
    });

    flushList();
    return elements;
  };

  return (
    <div className="min-h-screen">
      <SEO
        title={post.metaTitle}
        description={post.metaDescription}
        ogTitle={post.title}
        ogDescription={post.excerpt}
      />
      <SchemaMarkup type="webpage" data={articleSchemaData} />
      <SchemaMarkup type="breadcrumb" data={breadcrumbSchemaData} />
      <Navbar />

      {/* Breadcrumb */}
      <div className="bg-gray-50 pt-28 pb-4">
        <div className="max-w-3xl mx-auto px-4">
          <nav className="flex items-center gap-2 text-sm font-serif text-gray-500">
            <Link href="/">
              <span className="hover:text-primary cursor-pointer">Home</span>
            </Link>
            <span>/</span>
            <Link href="/blog">
              <span className="hover:text-primary cursor-pointer">Blog</span>
            </Link>
            <span>/</span>
            <span className="text-gray-700 truncate max-w-[200px]">{post.title}</span>
          </nav>
        </div>
      </div>

      {/* Article Header */}
      <article className="bg-white">
        <header className="py-8 bg-gray-50">
          <div className="max-w-3xl mx-auto px-4">
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                <Tag className="w-3 h-3" />
                {post.category}
              </span>
            </div>
            <h1 className="font-display text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
              {post.title}
            </h1>
            <p className="font-serif text-xl text-gray-600 mb-6">
              {post.excerpt}
            </p>
            <div className="flex items-center gap-4 text-sm text-gray-500 font-serif">
              <span className="flex items-center gap-1">
                <User className="w-4 h-4" />
                {post.author}
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {formatDate(post.date)}
              </span>
            </div>
          </div>
        </header>

        {/* Article Content */}
        <div className="py-12">
          <div className="max-w-3xl mx-auto px-4">
            <div className="prose prose-lg max-w-none">
              {renderContent(post.content)}
            </div>

            {/* Tags */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span key={tag} className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm font-serif">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-12 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="font-display text-2xl font-semibold text-gray-900 mb-8">
              Related Articles
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {relatedPosts.map((relatedPost) => (
                <article key={relatedPost.slug} className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="p-6">
                    <span className="text-primary text-sm font-medium">
                      {relatedPost.category}
                    </span>
                    <Link href={`/blog/${relatedPost.slug}`}>
                      <h3 className="font-display text-xl font-semibold text-gray-900 mt-2 mb-3 hover:text-primary transition-colors cursor-pointer">
                        {relatedPost.title}
                      </h3>
                    </Link>
                    <p className="font-serif text-gray-600 text-sm leading-relaxed mb-4 line-clamp-2">
                      {relatedPost.excerpt}
                    </p>
                    <Link href={`/blog/${relatedPost.slug}`}>
                      <span className="text-primary font-medium flex items-center gap-1 hover:gap-2 transition-all cursor-pointer text-sm">
                        Read article <ArrowRight className="w-4 h-4" />
                      </span>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-display text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
            Ready to Grow Your Business?
          </h2>
          <p className="font-serif text-lg text-gray-600 mb-8">
            Let us implement these strategies for your business. Schedule a free consultation
            to discuss your web design and marketing needs.
          </p>
          <Link href="/contact">
            <span className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-lg font-medium hover:bg-primary/90 transition-colors cursor-pointer">
              Get Started Today
              <ArrowRight className="w-5 h-5" />
            </span>
          </Link>
        </div>
      </section>

      {/* Back to Blog */}
      <div className="py-8 bg-gray-50 border-t border-gray-200">
        <div className="max-w-3xl mx-auto px-4">
          <Link href="/blog">
            <span className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all cursor-pointer">
              <ArrowLeft className="w-4 h-4" />
              Back to all articles
            </span>
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}
