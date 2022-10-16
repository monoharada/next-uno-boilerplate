---
name: 'ui'
message: 'Enter Title of your component (no space)'
root: '.'
output: './components/ui'
ignore: ['.']
questions:
  dir: 
    message: "サブディレクトリが必要な場合は入力してください.末尾ははスラッシュを付けてください。（例:path/to/page/）サブディレクトリが不要な場合はenterで次へ進みます。"
    initial: ' '
  name: "atomicを組み合わせたコンポーネントを作成します。コンポーネント名を入力してください。（例: awesome-button）"
---

# {{ inputs.dir | trim  }}{{ inputs.name | pascal }}.tsx

```markdown
import * as UI from '@/components/atomic/';
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

<!-- # {{ inputs.name | pascal }}/index.ts

```markdown

export { default as {{ inputs.name | pascal }} } from './{{ inputs.name | pascal }}'

``` -->

# `index.ts`

```javascript
{{ read output.abs }}
export { default as {{ inputs.name | pascal }} } from './{{ inputs.dir | trim  }}{{ inputs.name | pascal }}'
```