import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import schemas from "./sanity/schemas";

const config = defineConfig({
  projectId: "p2zi9660",
  dataset: "production",
  title: "Bob Law Firm",
  apiVersion: '2024-02-02',
  basePath: "/admin",
  plugins: [structureTool()],
  schema: { types: schemas },
  useCdn: false,
});

export default config;
