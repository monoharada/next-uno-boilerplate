---
name: 'atomic'
message: 'Enter Title of your component (no space)'
root: '.'
output: './components/atomic'
ignore: ['.']
questions:
  name: "基礎的なコンポーネントを作成します。コンポーネントの名前を入力してください。（例: awesome-button）"
---

# {{ inputs.name | pascal }}.tsx

```markdown

type Props = {}

const {{ inputs.name | pascal }} = ({}: Props) => {
  return (
    <div>
      {{ inputs.name }}
    </div>
  )
}

export default {{ inputs.name | pascal}}
```

# `index.ts`

```javascript
{{ read output.abs }}
export { default as {{ inputs.name | pascal }} } from './{{ inputs.name | pascal }}'
```