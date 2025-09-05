import { Section } from "./ui";
import Link from "next/link";
import assets from '../assets.json';

export default function BlogNews(){
  return (
    <Section id="blog">
      <h2 className="text-2xl md:text-3xl font-bold text-primary">Blogs</h2>
      <div className="mt-6 grid md:grid-cols-3 gap-6">
        {assets.blogs.map(blog => (
          <article key={blog.id} className="rounded-xl2 border overflow-hidden bg-white shadow-soft">
            <div className="h-40 bg-gradient-to-br from-primary/20 to-secondary/20"></div>
            <div className="p-5">
              <h3 className="font-semibold">{blog.title}</h3>
              <p className="text-gray-600 text-sm mt-1 mb-2">{blog.excerpt}</p>
              <Link href={`/blogs/${blog.id}`} className="text-secondary text-sm">Know More →</Link>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-10 grid md:grid-cols-2 gap-6">
        <div className="rounded-xl2 border p-6 bg-white">
          <div className="text-brown font-semibold uppercase tracking-wide">News & Financials</div>
          <h3 className="text-xl font-bold mt-1">Unaudited Financial Results — 30 Sept 2023</h3>
          <a href="#" className="text-secondary mt-2 inline-block">Know More →</a>
        </div>
        <div className="rounded-xl2 border p-6 bg-white">
          <div className="text-brown font-semibold uppercase tracking-wide">Annual Report</div>
          <h3 className="text-xl font-bold mt-1">FY 2023–24</h3>
          <a href="#" className="text-secondary mt-2 inline-block">Know More →</a>
        </div>
      </div>
    </Section>
  );
}
