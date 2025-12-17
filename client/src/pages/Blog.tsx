import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import SchemaMarkup from "@/components/SchemaMarkup";
import { blogPosts } from "@/data/blogPosts";
import { Calendar, User, ArrowRight, Tag } from "lucide-react";

const blogSchemaData = {
  "@context": "https://schema.org",
  "@type": "Blog",
  "name": "Elevate Growth Solutions Blog",
  "description": "Marketing tips, web design insights, and business growth strategies for small businesses, startups, and entrepreneurs.",
  "url": "https://www.elevategrowth.solutions/blog",
  "publisher": {
    "@type": "Organization",
    "name": "Elevate Growth Solutions",
    "url": "https://www.elevategrowth.solutions"
  }
};

export default function Blog() {
  const sortedPosts = [...blogPosts].sort((a, b) =>
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  const featuredPost = sortedPosts.find(post => post.featured) || sortedPosts[0];
  const otherPosts = sortedPosts.filter(post => post.slug !== featuredPost.slug);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen">
      <SEO
        title="Marketing Blog | Web Design & SEO Tips for Small Business | Elevate Growth Solutions"
        description="Expert marketing insights, web design tips, and SEO strategies for small businesses. Learn how to grow your business online with actionable advice from Elevate Growth Solutions."
        ogTitle="Marketing Blog for Small Businesses | Elevate Growth Solutions"
        ogDescription="Expert marketing tips, web design insights, and SEO strategies to help small businesses grow online."
      />
      <SchemaMarkup type="webpage" data={blogSchemaData} />
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gray-50 pt-32 pb-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-semibold text-gray-900 mb-4">
            Marketing Insights for Growing Businesses
          </h1>
          <p className="font-serif text-xl text-gray-600 max-w-2xl mx-auto">
            Tips, strategies, and insights to help small businesses thrive online.
            From web design to SEO to full-stack marketing.
          </p>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-12 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-sm border border-gray-100">
              <div className="p-8 md:p-12">
                <div className="flex items-center gap-4 mb-4">
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                    Featured
                  </span>
                  <span className="text-gray-500 text-sm font-serif flex items-center gap-1">
                    <Tag className="w-4 h-4" />
                    {featuredPost.category}
                  </span>
                </div>
                <Link href={`/blog/${featuredPost.slug}`}>
                  <h2 className="font-display text-2xl md:text-3xl font-semibold text-gray-900 mb-4 hover:text-primary transition-colors cursor-pointer">
                    {featuredPost.title}
                  </h2>
                </Link>
                <p className="font-serif text-gray-600 text-lg leading-relaxed mb-6">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-sm text-gray-500 font-serif">
                    <span className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      {featuredPost.author}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {formatDate(featuredPost.date)}
                    </span>
                  </div>
                  <Link href={`/blog/${featuredPost.slug}`}>
                    <span className="text-primary font-medium flex items-center gap-1 hover:gap-2 transition-all cursor-pointer">
                      Read more <ArrowRight className="w-4 h-4" />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Other Posts */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="font-display text-2xl font-semibold text-gray-900 mb-8">
            Latest Articles
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherPosts.map((post) => (
              <article key={post.slug} className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-primary text-sm font-medium">
                      {post.category}
                    </span>
                  </div>
                  <Link href={`/blog/${post.slug}`}>
                    <h3 className="font-display text-xl font-semibold text-gray-900 mb-3 hover:text-primary transition-colors cursor-pointer line-clamp-2">
                      {post.title}
                    </h3>
                  </Link>
                  <p className="font-serif text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500 font-serif">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {formatDate(post.date)}
                    </span>
                    <Link href={`/blog/${post.slug}`}>
                      <span className="text-primary font-medium flex items-center gap-1 hover:gap-2 transition-all cursor-pointer">
                        Read <ArrowRight className="w-4 h-4" />
                      </span>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-display text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
            Want These Strategies Implemented for Your Business?
          </h2>
          <p className="font-serif text-lg text-gray-600 mb-8">
            Stop reading about marketing and start seeing results. Let us handle your web design,
            SEO, and full-stack marketing while you focus on running your business.
          </p>
          <Link href="/contact">
            <span className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-lg font-medium hover:bg-primary/90 transition-colors cursor-pointer">
              Get a Free Consultation
              <ArrowRight className="w-5 h-5" />
            </span>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
