import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

function IndexPage() {
  return (
    <Layout>
      <SEO
        keywords={[`CodeBytes`]}
        title="Coming Soon"
      />

      <section className="text-center">
        <h1 className="text-2xl mb-2 font-bold">Coming Soon 🏗</h1>
        <p><a className="text-blue-500" href="mailto:tom@codebytes.io">tom@codebytes.io</a></p>
      </section>
    </Layout>
  );
}

export default IndexPage;
