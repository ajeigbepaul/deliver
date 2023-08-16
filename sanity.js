import imageUrlBuilder from "@sanity/image-url";
import { createClient } from "@sanity/client";
export const client = createClient({
  projectId: process.env.SANITY_ID || "al1tyb8v",
  dataset: "production",
  useCdn: true, // set to `false` to bypass the edge cache
  apiVersion: "2023-05-03", // use current date (YYYY-MM-DD) to target the latest API version
  // token: process.env.SANITY_SECRET_TOKEN // Only if you want to update content with the client
});

const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);

export default client;
