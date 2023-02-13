import { ChatGPTAPI } from 'chatgpt'
import dotenv from 'dotenv'

dotenv.config()

const api = new ChatGPTAPI({
  apiKey: process.env.OPENAI_API_KEY,
})

async function main() {
  const prompt = 'Write a python version of bubble sort. Do not include example usage.'

  const res = await api.sendMessage(prompt)
  console.log(res)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
