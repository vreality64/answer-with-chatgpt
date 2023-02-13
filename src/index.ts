import { ChatGPTAPI } from 'chatgpt'
import dotenv from 'dotenv'
import { oraPromise } from 'ora'
import { copyToClipboard } from './clipboard'
import { delay } from './delay'
import { requestPrompt } from './prompt'
import { createProblemSet, generateQuestion } from './request'

dotenv.config()

const api = new ChatGPTAPI({
  apiKey: process.env.OPENAI_API_KEY,
  debug: false,
})

async function main() {
  const prompt = await requestPrompt()
  const $problemSet = createProblemSet(prompt.$document)
  const pending = Promise.all(
    $problemSet.map(async ($problem) => {
      const question = generateQuestion($problem)
      const response = await api.sendMessage(question)
      const value = response.text.match(/(\d+)/)

      return {
        question: $problem.question,
        answer: response.text,
        selectOption: value == null ? null : value[1],
      }
    })
  )
  const [answers] = await oraPromise(Promise.all([pending, delay(5000)]))

  console.log(`[Log] ChatGPT 가 정답을 알려줬어요!`, answers);

  if (prompt.saveToClipboard) {
    await copyToClipboard(answers.map(answer => answer.selectOption));
  }
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
