# answer-with-chatgpt

- ChatGPT 에 집어 삼켜진 나

![good job](https://user-images.githubusercontent.com/886706/218420082-dd569166-a5d6-46f1-ac82-a70606b1728e.gif)


# How to use

```sh
npx answer-with-chatgpt
# CLI 와 소통시작!
```

# Install

## 1. Setup Node
- chatgpt SDK 가 node 18 버전 이상을 요구해요. 해당 버전으로 node 버전을 올려주세요.
- [nvm](https://github.com/nvm-sh/nvm) 을 사용하는걸 추천합니다.

```tsx
# nvm install v18.14.0
nvm use v18.14.0
```

## 2. Inject ChatGPT API Token
​:hand:​ ChatGPT API 를 이용하려면 API KEY가 필요해요!

1. https://platform.openai.com/account/api-keys 에서 API KEY를 새로 생성해주세요
2. 터미널 환경변수에 `OPENAI_API_KEY` 환경변수를 설정해주세요.
```
# .bashrc or .zshrc
export OPENAI_API_KEY=...
```