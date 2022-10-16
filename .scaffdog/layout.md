---
name: 'layout'
message: 'Enter Title of your component (no space)'
root: '.'
output: './components/layout'
ignore: ['.']
questions:
  name: "レイアウトコンポーネントの名前を入力してください。"
---

# {{ inputs.name | pascal }}Layout.tsx

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

