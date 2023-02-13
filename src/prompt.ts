const inquirer = require('inquirer');

async function receive<Response>(questions: any[]) {
  return new Promise<Response>((resolve, reject) => {
    inquirer.prompt(questions).then(resolve).catch(reject)
  })
}

export function requestPrompt() {
  console.log(`[Log] 보안교육 AI에 오신걸 환영해요! ChatGPT 가 답안을 알려줄꺼에요!`);

  return receive<{ $document: string; saveToClipboard: boolean; }>([
    {
      type: 'confirm',
      name: 'saveToClipboard',
      message: '결과를 클립보드에도 저장해줄까요?'
    },
    {
      type: 'editor',
      name: '$document',
      message: `시험문제 페이지의 html 을 전부 알려주세요! 잘 모르겠다면 브라우저에 콘솔에 이렇게 입력해주세요!
---
copy(document.querySelector('body').innerHTML)
---
`,
    },
  ])
}
