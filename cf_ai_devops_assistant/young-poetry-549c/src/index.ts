export interface Env {
	AI: any;
  }
  
  export default {
	async fetch(request: Request, env: Env): Promise<Response> {
	  const { searchParams } = new URL(request.url);
	  const userPrompt = searchParams.get("q");
  
	  if (!userPrompt) {
		return new Response("Missing query (?q=)", { status: 400 });
	  }
  
	  const aiResponse = await env.AI.run('@cf/meta/llama-3-8b-instruct', {
		messages: [
		  { role: "system", content: "You are a helpful DevOps assistant." },
		  { role: "user", content: userPrompt }
		],
	  });
  
	  return new Response(JSON.stringify(aiResponse), {
		headers: { "Content-Type": "application/json" },
	  });
	},
  };
  