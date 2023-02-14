import HTMLParser from 'node-html-parser';

interface Problem {
  question: string
  hint: string;
  select: string
}

export function createProblemSet(documentHtml: string) {
  const $document = HTMLParser.parse(documentHtml, { voidTag: { tags: [] } })
  // selector 을 외부에서 제어할 수 있게 해주어야할까?
  const $list = [...$document.querySelectorAll('#examPanel tr')]
  const $set: Problem[] = []

  for (let idx = 0; idx < $list.length; idx += 2) {
    const $hint = $list[idx].querySelector('.title_desc');
    const hint = $hint.innerText;
    $hint.remove();

    const question = $list[idx].innerText;
    const select = [...$list[idx + 1].querySelectorAll('label')]
      .map(($label, idx) => {
        return `- ${idx + 1}: ${$label.innerText}`
      })
      .join('\n')

    console.log(`[Log] createProblemSet`, { question, hint });
    $set.push({
      question,
      hint,
      select,
    })
  }

  return $set
}

export function generateQuestion(problem: Problem) {
  return `
다음 질문에 맞는 정답 번호를 알려줘. ${problem.question}

힌트:
${problem.hint}

선택지:
${problem.select}
`.trim()
}
