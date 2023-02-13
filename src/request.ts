import HTMLParser from 'node-html-parser'

interface Problem {
  question: string
  select: string
}

export function createProblemSet(documentHtml: string) {
  const $document = HTMLParser.parse(documentHtml, { voidTag: { tags: [] } })
  // selector 을 외부에서 제어할 수 있게 해주어야할까?
  const $list = [...$document.querySelectorAll('#examPanel tr')]
  const $set: Problem[] = []

  for (let idx = 0; idx < $list.length; idx += 2) {
    const question = $list[idx].innerText.split('\n\n')?.[0]
    const select = [...$list[idx + 1].querySelectorAll('label')]
      .map(($label, idx) => {
        return `- ${idx + 1}: ${$label.innerText}`
      })
      .join('\n')

    $set.push({
      question,
      select,
    })
  }

  return $set
}

export function generateQuestion(problem: Problem) {
  return `
다음 질문에 맞는 정답 번호를 알려줘. ${problem.question}
${problem.select}
`.trim()
}
