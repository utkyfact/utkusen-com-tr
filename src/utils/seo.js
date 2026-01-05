import { useEffect } from 'react';

/**
 * SEO Component - Manages structured data and meta tags
 */
export const useStructuredData = (profile) => {
  useEffect(() => {
    // Create structured data for Person schema
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": profile.name || "Utku Şen",
      "jobTitle": profile.title || "Full Stack Developer",
      "description": profile.bio || "",
      "url": "https://utkusen.com.tr",
      "email": profile.email || "iletisim@utkusen.com.tr",
      "sameAs": [
        profile.github || "https://github.com/utkusen",
        profile.linkedin || "https://linkedin.com/in/utkusen",
        profile.twitter || "https://twitter.com/utkusen"
      ],
      "knowsAbout": [
        "Python",
        "Node.js",
        "PHP",
        "React",
        "JavaScript",
        "Full Stack Development",
        "Web Development",
        "Frontend Development",
        "Backend Development"
      ],
      "alumniOf": {
        "@type": "Organization",
        "name": "Web Development"
      }
    };

    // Add or update structured data script tag
    let script = document.getElementById('structured-data');
    if (!script) {
      script = document.createElement('script');
      script.id = 'structured-data';
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(structuredData);

    return () => {
      // Cleanup if needed
    };
  }, [profile]);
};

/**
 * Update page title and meta description
 */
export const updatePageMeta = (title, description) => {
  // Update title
  document.title = title;
  
  // Update meta description
  let metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) {
    metaDescription.setAttribute('content', description);
  }
  
  // Update OG tags
  let ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle) {
    ogTitle.setAttribute('content', title);
  }
  
  let ogDescription = document.querySelector('meta[property="og:description"]');
  if (ogDescription) {
    ogDescription.setAttribute('content', description);
  }
  
  // Update Twitter tags
  let twitterTitle = document.querySelector('meta[property="twitter:title"]');
  if (twitterTitle) {
    twitterTitle.setAttribute('content', title);
  }
  
  let twitterDescription = document.querySelector('meta[property="twitter:description"]');
  if (twitterDescription) {
    twitterDescription.setAttribute('content', description);
  }
};

export default { useStructuredData, updatePageMeta };
