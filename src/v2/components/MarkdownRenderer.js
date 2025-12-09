import React from "react";
import ReactMarkdown from "react-markdown";
import { customComponents, remarkPlugins } from "../utils/markdownConfig";

/**
 * MarkdownRenderer Component
 * 
 * Renders markdown content with custom styling and component mappings.
 * Integrates Tailwind typography classes for consistent styling.
 * 
 * @param {Object} props
 * @param {string} props.content - Raw markdown content to render
 * @param {string} [props.className] - Additional CSS classes for styling flexibility
 */
const MarkdownRenderer = ({ content, className = "" }) => {
  return (
    <div className={`prose prose-slate max-w-none ${className}`}>
      <ReactMarkdown
        components={customComponents}
        remarkPlugins={remarkPlugins}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
};

export default MarkdownRenderer;
