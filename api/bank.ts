import type { VercelRequest, VercelResponse } from "@vercel/node"

export default function bankHandler(request: VercelRequest, response: VercelResponse) {
  if (request.method !== "GET") {
    return response.status(405).end()
  }

  return response.status(200).json({
    bank: "Ngân hàng TMCP Việt Nam thịnh vượng (VPBank) Hội sở",
    account: "191415477",
    name: "Công ty cổ phần Be Group",
    content: `“Covid19”`
  })
}