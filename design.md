# components dir design

```
.
└── components/
    ├── atomic/
    │   ├── heading.tsx
    │   ├── link.tsx
    │   ├── image.tsx
    │   ├── gutter.tsx
    │   ├── text.tsx
    │   └── index.ts
    ├── common/
    │   └── header/
    │       ├── headerLeft/
    │       │   ├── headerLeft.tsx
    │       │   └── index.tsx
    │       ├── hamburgerMenu/
    │       │   ├── hamburgerMenu.tsx
    │       │   └── index.ts
    │       ├── header.tsx
    │       └── index.ts
    ├── layout/
    │   ├── top-layout.tsx
    │   ├── about-layout.tsx
    │   └── index.ts
    └── ui/
        ├── card/
        │   ├── card.tsx
        │   └── index.ts
        └── list/
            ├── listItem.tsx
            ├── list.tsx
            └── index.ts

```


- atomic
  - htmlタグの拡張
  - components配下の全てのファイルを**importできない**
- common
  - header,footer,navBarなど広くページをまたいで使用されるコンポーネント
  - メインファイルのjsxが膨れないように適宜サブコンポーネントを配下に設置する
- layout
  - TBDではあるが、ページ内容に応じて条件分岐させるのファイルベースルーティングの観点から複雑化させたくない
  - 目的としてはpages配下にcommonコンポーネントをimportさせないため
- ui
  - atomicをimportして作成する。atomic以外はimport不可
  - いわゆるmodulesとなる。
  - 自分自身の先祖要素に影響を与えない
  - ファイル内でループ（map）させてはならない

ページ固有のUIは```./app/[page_name].tsx```で作成する
