import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { getContentByPath } from "../utils/contentLoader";
import MarkdownRenderer from "./MarkdownRenderer";

/**
 * ContentPage Component
 * 
 * Generic page component that loads and displays markdown content.
 * Handles loading states, errors, and sets page metadata from frontmatter.
 * 
 * @param {Object} props
 * @param {string} props.contentPath - path to the content (e.g., "/content/pages/about.md" or "/content/pages/webapps.md")
 */
const ContentPage = ({ contentPath }) => {
  const [content, setContent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadPageContent = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const loadedContent = await getContentByPath(contentPath);
        
        if (!loadedContent) {
          throw new Error(`Content not found for path: ${contentPath}`);
        }
        
        setContent(loadedContent);
      } catch (err) {
        console.error("Failed to load content:", err);
        setError(err.message || "Failed to load content");
      } finally {
        setLoading(false);
      }
    };

    loadPageContent();
  }, [contentPath]);

  // Loading state UI
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="animate-pulse text-xl">Loading content...</div>
        </div>
      </div>
    );
  }

  // Error state UI
  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-red-600 mb-4">
            Error Loading Content
          </h2>
          <p className="text-gray-700">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  // Content loaded successfully
  return (
    <>
      {/* Set page metadata from frontmatter */}
      <Helmet>
        <title>{content.frontmatter.title || "Portfolio"}</title>
        {content.frontmatter.description && (
          <meta name="description" content={content.frontmatter.description} />
        )}
      </Helmet>

      {/* Render markdown content */}
      <MarkdownRenderer content={content.content} />
    </>
  );
};

export default ContentPage;
