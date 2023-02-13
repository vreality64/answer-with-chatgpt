import clipboard from 'clipboardy';

export async function copyToClipboard(data: any) {
  try {
    await clipboard.write(JSON.stringify(data));
  } catch (error) {
    console.warn(`[Log] 클립보드에 복사하지는 못했어요. 직접 답을 활용해주세요!`);
  }

}