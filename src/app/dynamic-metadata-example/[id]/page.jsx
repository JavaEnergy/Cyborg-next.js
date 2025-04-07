import React from 'react';

// Mock function to simulate fetching product data
async function getProduct(id) {
  // In a real app, this would fetch from an API or database
  return {
    id,
    name: `Product ${id}`,
    description: `This is the detailed description for product ${id}`,
    image: `https://yourdomain.com/products/${id}.jpg`,
  };
}

// Dynamic metadata generation
export async function generateMetadata({ params }) {
  const product = await getProduct(params.id);
  
  return {
    title: `${product.name} | Cyborg`,
    description: product.description,
    openGraph: {
      title: `${product.name} | Cyborg`,
      description: product.description,
      images: [{ url: product.image }],
    },
    // Schema.org / JSON-LD structured data
    other: {
      'application/ld+json': JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Product',
        name: product.name,
        description: product.description,
        image: product.image,
      }),
    },
  };
}

export default async function ProductPage({ params }) {
  const product = await getProduct(params.id);
  
  return (
    <div className="product-page">
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <div className="metadata-explanation">
        <h2>About Dynamic Metadata</h2>
        <p>This page demonstrates Next.js's dynamic metadata generation based on the route parameters.</p>
        <p>The metadata (title, description, OpenGraph, JSON-LD) are all generated server-side based on the product ID: {params.id}</p>
      </div>
    </div>
  );
} 