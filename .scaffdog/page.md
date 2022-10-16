---
name: 'page'
message: 'Enter Title of your component (no space)'
root: '.'
output: '.'
ignore: []
questions:
  dir: 
    message: "サブディレクトリが必要な場合は入力してください.末尾ははスラッシュを付けてください。（例:path/to/page/）サブディレクトリが不要な場合はenterで次へ進みます。"
    initial: ' '
  name: 
    message: "page名を入力してください。インデックスページの場合はenterをクリックして下さい (例:about)"
    initial: 'index'
---

# pages/{{ inputs.dir | trim  }}{{ inputs.name }}.tsx

```markdown

import type { ReactElement } from 'react'
import App from '@/app/{{ inputs.dir | trim }}{{ inputs.name }}'
import { Layout } from '@/components/layout/Layout'

import type { NextPageWithLayout } from '@/pages/_app';

const Page: NextPageWithLayout = () => {
  return (<App />)
}

Page.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}

export default Page
```

# app/{{ inputs.dir | trim }}{{ inputs.name }}.tsx

```markdown
import {Model} from './model
type Props = {}

const App = ({}: Props) => {
  return (
    <div>
      {{ inputs.name }}
    </div>
  )
}

export default App

```

# app/{{ inputs.dir | trim }}model/{{ inputs.name }}.ts

```markdown

type Props = {}

export const Model:Props =  {
  
}



```
