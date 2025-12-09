/**
 * Content loader utility for fetching and parsing markdown files
 * with frontmatter metadata
 */

/**
 * Gets content by URL path by mapping it to the corresponding markdown file
 * @param {string} filePath - Path to the content file (e.g., "/content/pages/about.md")
 * @returns {Promise<{frontmatter: Object, content: string} | null>} Parsed content or null if not found
 */
export async function getContentByPath(filePath) {
  try {
    // Load and return the content
    return await loadContent(filePath);
  } catch (error) {
    console.error(`Error getting content by path ${filePath}:`, error);
    return null;
  }
}

/**
 * Loads and parses a markdown file with frontmatter
 * @param {string} filePath - Path to the markdown file (relative to public directory)
 * @returns {Promise<{frontmatter: Object, content: string}>} Parsed content with frontmatter
 * @throws {Error} If file cannot be loaded or parsed
 */
async function loadContent(filePath) {
  try {
    // Fetch the markdown file from the public directory
    // Use PUBLIC_URL to handle base path (e.g., /portfolio)
    const fullPath = `${process.env.PUBLIC_URL}${filePath}`;
    const response = await fetch(fullPath);

    if (!response.ok) {
      throw new Error(`Failed to load content: ${filePath} (${response.status})`);
    }

    const markdownText = await response.text();

    // Parse frontmatter and content
    const { data: frontmatter, content } = parseFrontmatter(markdownText);

    // Validate that frontmatter exists
    if (!frontmatter || typeof frontmatter !== "object") {
      throw new Error(`Invalid frontmatter in file: ${filePath}`);
    }

    return {
      frontmatter,
      content: content.trim(),
    };
  } catch (error) {
    console.error(`Error loading content from ${filePath}:`, error);
    throw error;
  }
}

/**
 * Simple frontmatter parser that works in the browser
 * Parses YAML frontmatter from markdown content
 * @param {string} text - Markdown text with frontmatter
 * @returns {{data: Object, content: string}} Parsed frontmatter and content
 */
function parseFrontmatter(text) {
  const frontmatterRegex = /^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/;
  const match = text.match(frontmatterRegex);

  if (!match) {
    // No frontmatter found, return empty data and full content
    return { data: {}, content: text };
  }

  const [, frontmatterText, content] = match;
  const data = {};

  // Parse simple YAML key-value pairs
  const lines = frontmatterText.split("\n");
  for (const line of lines) {
    const colonIndex = line.indexOf(":");
    if (colonIndex > 0) {
      const key = line.substring(0, colonIndex).trim();
      let value = line.substring(colonIndex + 1).trim();

      // Remove quotes if present
      if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
        value = value.slice(1, -1);
      }

      data[key] = value;
    }
  }

  return { data, content };
}
