interface Author {
  fullName: string;
}

interface Article {
  authors: Author[];
  fullTitle: { en: string };
  copyrightHolder?: { en: string };
  datePublished: string;
  pages?: string;
  urlPublished?: string;
  volume?: string;
  issue?: string;
  doi?: string;
}

function formatAuthors(
  authors: Author[],
  style: "APA" | "MLA" | "Chicago",
): string {
  if (!authors || authors.length === 0) return "Unknown Author";

  switch (style) {
    case "APA":
      if (authors.length === 1) return authors[0].fullName;
      if (authors.length === 2)
        return `${authors[0].fullName} & ${authors[1].fullName}`;
      return (
        authors
          .slice(0, -1)
          .map((a) => a.fullName)
          .join(", ") + `, & ${authors[authors.length - 1].fullName}`
      );
    case "MLA":
      if (authors.length === 1) return authors[0].fullName;
      if (authors.length === 2)
        return `${authors[0].fullName}, and ${authors[1].fullName}`;
      return `${authors[0].fullName}, et al.`;
    case "Chicago":
      if (authors.length === 1) return authors[0].fullName;
      if (authors.length === 2)
        return `${authors[0].fullName} and ${authors[1].fullName}`;
      return (
        authors
          .slice(0, -1)
          .map((a) => a.fullName)
          .join(", ") + `, and ${authors[authors.length - 1].fullName}`
      );
    default:
      return "";
  }
}

export function generateCitation(
  article: Article,
  style: "APA" | "MLA" | "Chicago" = "APA",
): string {
  if (!article) throw new Error("Article data is missing");

  const authorsStr = formatAuthors(article.authors, style);
  const year = new Date(article.datePublished).getFullYear();
  const title = article.fullTitle?.en || "Untitled";
  const journal = article.copyrightHolder?.en || "Unknown Journal";
  const pages = article.pages ? article.pages.replace("-", "–") : ""; // En dash
  const volume = article.volume || "";
  const issueStr = article.issue ? article.issue : "";
  const doi = article.doi
    ? `https://doi.org/${article.doi}`
    : article.urlPublished || "";

  switch (style) {
    case "APA":
      return `${authorsStr} (${year}). ${title}. *${journal}, ${volume}${issueStr ? `(${issueStr})` : ""}*, ${pages}. ${doi}`;
    case "MLA":
      return `${authorsStr}. "${title}." *${journal}*${volume ? `, vol. ${volume}` : ""}${issueStr ? `, no. ${issueStr}` : ""}, ${year}, pp. ${pages}. ${doi}`;
    case "Chicago":
      return `${authorsStr}. "${title}." *${journal}* ${volume}${issueStr ? `(${issueStr})` : ""} (${year}): ${pages}. ${doi}`;
    default:
      throw new Error("Invalid citation style");
  }
}
