// Cloudflare Worker entry point.
// Static files (index.html, css, js) are served via the ASSETS binding
// configured in wrangler.jsonc — this file just routes requests to them.
// Keeping a separate worker.js (instead of inlining the HTML as a string)
// avoids escaping headaches, since the page's own <script> blocks use
// backticks and ${...} template literals extensively.

export default {
  async fetch(request, env, ctx) {
    // Pass every request straight through to the static assets.
    // (This is also the place to add custom routes later, e.g. an
    // /api/reports endpoint backed by KV or D1 for a real shared
    // dashboard instead of the browser-only localStorage version.)
    return env.ASSETS.fetch(request);
  },
};
