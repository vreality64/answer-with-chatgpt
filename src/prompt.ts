import inquirer from 'inquirer'

async function receive(questions: any[]) {
  return new Promise<{ $document: string }>((resolve, reject) => {
    inquirer.prompt(questions).then(resolve).catch(reject)
  })
}

export function requestPrompt() {
  return receive([
    {
      type: 'editor',
      name: '$document',
      message: 'ChatGPT가 보안교육 답안을 알려줄꺼에요! html 전체를 알려주세요!',
    },
  ])
}
