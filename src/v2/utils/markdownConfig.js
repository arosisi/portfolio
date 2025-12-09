import React from "react";
import { useNavigate } from "react-router-dom";
import remarkGfm from "remark-gfm";

/**
 * Custom Link component for markdown anchor tags
 * Handles both internal navigation and external links
 */
const LinkComponent = ({ href, children, ...props }) => {
  const navigate = useNavigate();

  // Check if link is external (starts with http:// or https://)
  const isExternal = href && (href.startsWith("http://") || href.startsWith("https://"));

  if (isExternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className="text-blue-700 hover:underline"
        {...props}
      >
        {children}
      </a>
    );
  }

  // Internal link - use React Router navigation
  return (
    <span
      onClick={() => navigate(href)}
      className="cursor-pointer text-blue-700 hover:underline"
      {...props}
    >
      {children}
    </span>
  );
};

/**
 * Custom Image component with path resolution
 * Handles both local images (from /public/images) and external URLs
 */
const ImageComponent = ({ src, alt, ...props }) => {
  // Check if image is external URL
  const isExternal = src && (src.startsWith("http://") || src.startsWith("https://"));

  // Resolve local image paths relative to public directory
  const resolvedSrc = isExternal ? src : `${process.env.PUBLIC_URL}/${src}`;

  // Return img directly to avoid div-in-p nesting issues
  // The prose class handles spacing
  return <img src={resolvedSrc} alt={alt || ""} className="max-w-72" {...props} />;
};

/**
 * Custom Code component for inline and block code styling
 * In react-markdown v9, inline code doesn't have className, block code does
 */
const CodeComponent = ({ className, children, ...props }) => {
  // Check if it's inline code (no className means inline)
  const isInline = !className;
  
  if (isInline) {
    // Inline code styling
    return (
      <code className="bg-gray-100 px-1 py-0.5 rounded text-sm font-mono" {...props}>
        {children}
      </code>
    );
  }

  // Block code styling
  return (
    <pre className="bg-gray-100 p-4 rounded overflow-x-auto mb-4">
      <code className={className} {...props}>
        {children}
      </code>
    </pre>
  );
};

/**
 * Custom component mappings for react-markdown
 * Maps markdown elements to custom React components
 */
export const customComponents = {
  // Links - handle internal vs external
  a: LinkComponent,
  
  // Images - resolve paths
  img: ImageComponent,
  
  // Code - inline and block styling
  code: CodeComponent,
};

/**
 * Remark plugins for extended markdown support
 * - remarkGfm: GitHub Flavored Markdown (tables, strikethrough, task lists, etc.)
 */
export const remarkPlugins = [remarkGfm];
