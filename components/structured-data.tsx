"use client";

import { useEffect } from "react";

export function StructuredData() {
  useEffect(() => {
    const organizationSchema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Ottic",
      "url": "https://ottic.ai",
      "logo": "https://ottic.ai/og-image.png",
      "description": "GTM infrastructure for AI-native companies. AI agents that plan and execute your entire go-to-market.",
      "sameAs": [
        "https://www.linkedin.com/company/ottic_app/",
        "https://ottic.ai/blog/"
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "email": "rafael@ottic.ai",
        "contactType": "customer support"
      }
    };

    const websiteSchema = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "Ottic",
      "url": "https://ottic.ai",
      "description": "GTM infrastructure for AI-native companies",
      "potentialAction": {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": "https://ottic.ai/blog?q={search_term_string}"
        },
        "query-input": "required name=search_term_string"
      }
    };

    const softwareSchema = {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "Ottic",
      "applicationCategory": "BusinessApplication",
      "operatingSystem": "Web",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD",
        "description": "Free forever if self-hosted (open source, MIT license)"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "ratingCount": "24"
      },
      "description": "AI-powered GTM infrastructure that runs your entire go-to-market through chat commands. Agents coordinate content, ads, analytics, and distribution across all platforms."
    };

    // Add scripts to head
    const addSchema = (schema: object, id: string) => {
      const existing = document.getElementById(id);
      if (existing) {
        existing.remove();
      }

      const script = document.createElement("script");
      script.id = id;
      script.type = "application/ld+json";
      script.text = JSON.stringify(schema);
      document.head.appendChild(script);
    };

    addSchema(organizationSchema, "organization-schema");
    addSchema(websiteSchema, "website-schema");
    addSchema(softwareSchema, "software-schema");

    return () => {
      document.getElementById("organization-schema")?.remove();
      document.getElementById("website-schema")?.remove();
      document.getElementById("software-schema")?.remove();
    };
  }, []);

  return null;
}
