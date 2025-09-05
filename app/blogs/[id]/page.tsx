import { notFound } from 'next/navigation';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Section } from "@/components/ui";
import assets from '../../../assets.json';
import Image from 'next/image';

interface BlogPageProps {
  params: {
    id: string;
  };
}

export default function BlogPage({ params }: BlogPageProps) {
  const blogId = parseInt(params.id);
  const blog = assets.blogs.find(b => b.id === blogId);

  if (!blog) {
    notFound();
  }

  return (
    <div className="bg-white">
      <Header />
      <Section className="py-20">
        <div className="max-w-4xl mx-auto">
          {/* Blog Header */}
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              {blog.title}
            </h1>
            <div className="flex items-center gap-4 text-gray-600 mb-6">
              <span>By {blog.author}</span>
              <span>•</span>
              <span>{blog.date}</span>
            </div>
            <p className="text-xl text-gray-700 leading-relaxed">
              {blog.excerpt}
            </p>
          </div>

          {/* Blog Image */}
          {blog.image && (
            <div className="relative w-full h-64 md:h-96 mb-8 rounded-2xl overflow-hidden">
              <Image
                src={blog.image}
                alt={blog.title}
                fill
                style={{ objectFit: 'cover' }}
                className="rounded-2xl"
              />
            </div>
          )}

          {/* Blog Content */}
          <div className="prose prose-lg max-w-none">
            <div className="whitespace-pre-line text-gray-800 leading-relaxed">
              {blog.content}
            </div>
          </div>

          {/* Back to Blogs */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <a 
              href="/blogs" 
              className="inline-flex items-center text-secondary hover:text-primary transition-colors"
            >
              ← Back to all blogs
            </a>
          </div>
        </div>
      </Section>
      <Footer />
    </div>
  );
}

// Generate static params for all blog posts
export async function generateStaticParams() {
  return assets.blogs.map((blog) => ({
    id: blog.id.toString(),
  }));
}

// Generate metadata for each blog post
export async function generateMetadata({ params }: BlogPageProps) {
  const blogId = parseInt(params.id);
  const blog = assets.blogs.find(b => b.id === blogId);

  if (!blog) {
    return {
      title: 'Blog Not Found',
    };
  }

  return {
    title: `${blog.title} | Growthally`,
    description: blog.excerpt,
  };
}
