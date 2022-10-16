---
name: 'common'
message: 'Enter Title of your component (no space)'
root: '.'
output: './components/common'
ignore: ['.']
questions:
  name: "サイトで共用するコンポーネントを作成します。コンポート名を入力してください。（例:header,nav-bar）"
---

# {{ inputs.name | pascal }}/{{ inputs.name | pascal }}.tsx

```markdown

type Props = {}

const {{ inputs.name | pascal }} = ({}: Props) => {
  return (
    <div>
      {{ inputs.name }}
    </div>
  )
}

export default {{ inputs.name | pascal }}
```

# {{ inputs.name | pascal }}/index.ts

```markdown

export { default as {{ inputs.name | pascal }} } from './{{ inputs.name | pascal }}'

```

# `index.ts`

```javascript
{{ read output.abs }}
export { {{ inputs.name | pascal }} } from './{{ inputs.name | pascal }}'
```
