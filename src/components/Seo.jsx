import { useEffect } from "react";

function upsertMeta({ key, keyName = "name", content }) {
  if (!content) return;

  let tag = document.head.querySelector(`meta[${keyName}="${key}"]`);
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute(keyName, key);
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", content);
}

function upsertCanonical(url) {
  if (!url) return;

  let link = document.head.querySelector('link[rel="canonical"]');
  if (!link) {
    link = document.createElement("link");
    link.setAttribute("rel", "canonical");
    document.head.appendChild(link);
  }
  link.setAttribute("href", url);
}

function removeExistingStructuredData() {
  const tags = document.querySelectorAll("script[data-seo-schema]");
  tags.forEach((tag) => tag.remove());
}

function addStructuredData(structuredData) {
  if (!Array.isArray(structuredData) || structuredData.length === 0) return;

  structuredData.forEach((item) => {
    if (!item) return;
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.dataset.seoSchema = "true";
    script.textContent = JSON.stringify(item);
    document.head.appendChild(script);
  });
}

export default function Seo({
  title,
  description,
  path = "/",
  image = "/images/admin-login.png",
  type = "website",
  structuredData = [],
}) {
  useEffect(() => {
    const origin = window.location.origin;
    const url = new URL(path, origin).toString();
    const imageUrl = new URL(image, origin).toString();

    document.title = title;

    upsertMeta({ key: "description", content: description });
    upsertMeta({ key: "robots", content: "index,follow,max-image-preview:large" });

    upsertMeta({ key: "og:type", keyName: "property", content: type });
    upsertMeta({ key: "og:title", keyName: "property", content: title });
    upsertMeta({ key: "og:description", keyName: "property", content: description });
    upsertMeta({ key: "og:url", keyName: "property", content: url });
    upsertMeta({ key: "og:image", keyName: "property", content: imageUrl });

    upsertMeta({ key: "twitter:card", content: "summary_large_image" });
    upsertMeta({ key: "twitter:title", content: title });
    upsertMeta({ key: "twitter:description", content: description });
    upsertMeta({ key: "twitter:image", content: imageUrl });

    upsertCanonical(url);

    removeExistingStructuredData();
    addStructuredData(structuredData);
  }, [description, image, path, structuredData, title, type]);

  return null;
}
