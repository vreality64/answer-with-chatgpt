import { ChatGPTAPI } from 'chatgpt'
import dotenv from 'dotenv'
import { requestPrompt } from './prompt'
import { createProblemSet, generateQuestion } from './request'

dotenv.config()

const api = new ChatGPTAPI({
  apiKey: process.env.OPENAI_API_KEY,
})

async function main() {
  const prompt = await requestPrompt()
  const $problemSet = createProblemSet(prompt.$document)

  const answers = await Promise.all(
    $problemSet.map(async ($problem) => {
      const question = generateQuestion($problem)
      const response = await api.sendMessage(question)
      const value = response.text.match(/(\d+)번/)

      return {
        question: $problem.question,
        answer: response.text,
        selectOption: value == null ? null : value[1],
      }
    })
  )

  console.log(answers)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
