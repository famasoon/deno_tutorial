import { serve } from "https://deno.land/std@0.94.0/http/server.ts";

const server = serve({ hostname: "0.0.0.0", port: 8000 });
console.log("http://localhost:8000/");

for await (const req of server) {
  let bodyContent = "Your user-agent is:\n\n";
  bodyContent += req.headers.get("user-agent") || "Unknown";

  req.respond({ status: 200, body: bodyContent });
}