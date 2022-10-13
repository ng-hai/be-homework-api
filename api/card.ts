import type { VercelRequest, VercelResponse } from "@vercel/node"

export default function cardHandler(request: VercelRequest, response: VercelResponse) {
  if (request.method === "OPTIONS") {
    return response.status(200).end()
  }

  if (request.method !== "POST") {
    return response.status(405).end()
  }

  if (isNaN(request.body?.amount)) {
    return response.status(400).end("Invalid `amount`")
  }

  const mightError = getRandomInt(-1, 1) < 0

  if (mightError) {
    return response.status(500).json({
      success: false,
      message: `Random error`
    })
  }

  return response.status(200).json({
    success: true,
    amount: parseInt(request.body.amount, 10),
  })
}

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random#getting_a_random_integer_between_two_values
function getRandomInt(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);

  // The maximum is exclusive and the minimum is inclusive
  return Math.floor(Math.random() * (max - min) + min);
}