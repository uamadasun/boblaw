import { defineConfig } from "sanity";

const config = defineConfig({
    projectId: 'p2zi9660',
    dataset: 'production',
    title: "Bob Law Firm",
    apiVersion: '2024-02-02',
    basePath: '/admin',
    plugins: []
})

export default config;