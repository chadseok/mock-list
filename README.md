# mock-list

![main-image](https://cdn.discordapp.com/attachments/1016940382061346880/1164126127103692860/screely-1697619684327.png?ex=654213f1&is=652f9ef1&hm=517da9a19401530c5e6a97bdd6f2f8e4f076d9aa82089b5c77c792d291539fed&)

## 🧤 프로젝트 소개

이 프로젝트는 간단한 **게시글 리스트를 보여주는 기능**을 구현해보기 위해 시작하였으며 [JSONPlaceholder](https://jsonplaceholder.typicode.com)사이트로 부터 필요한 목데이터를 받아와 활용하였습니다

<br/>

- **링크**: [배포사이트](https://loquacious-starlight-9d25bf.netlify.app)
- **사용스택**: `create-react-app`, `react-router-dom`, `typescript`, `axios`, `tailwindcss`

<br/>

## 🔎 기능

### PostList 페이지

- 게시물 리스트를 볼 수 있습니다
- 게시물들은 10개단위로 나누어져있으며 페이지네이션 기능을 통해 선택할 수 있습니다
- List 페이지에서 게시물을 클릭했을 때 특정 Post페이지로 이동할 수 있습니다

![postlist-page-img](https://cdn.discordapp.com/attachments/1016940382061346880/1164119441806725200/ezgif.com-gif-maker.gif?ex=65420db7&is=652f98b7&hm=1929d591d80d9d14d2f81b2376fafe7f6bd4dec1eb08c976e6655af2882c7a25&)

### Post 페이지

- 개별 Post를 볼 수 있습니다
- 게시물의 제목, 글쓴이, 본문, 댓글에 대한 내용을 확인할 수 있습니다

![post-page-img](https://cdn.discordapp.com/attachments/1016940382061346880/1164121494075478046/ezgif.com-video-to-gif.gif?ex=65420fa0&is=652f9aa0&hm=4bc02c633a08140a5e585494796559e45d0ffbc5a99fea1cb0d8d32776bf131f&)

### About 페이지

- 특정 글쓴이의 상세정보와 어떤 게시물을 작성했는지를 확인할 수 있습니다
- List나 Post페이지에서 `written by ~`를 클릭했을 때 이동할 수 있습니다

![about-page-img](https://cdn.discordapp.com/attachments/1016940382061346880/1164125197255852113/ezgif.com-gif-maker.gif?ex=65421313&is=652f9e13&hm=37f3e3fe2b5260dfa34a87b7fd6f03170d96296a58fe06e7da789e2ea6c22641&)

### AlbumList 페이지

- 앨범의 제목으로 된 리스트들을 확인 할 수 있습니다
- 클릭시 개별 앨범 페이지로 이동합니다

![albumlist-page-img](https://cdn.discordapp.com/attachments/1016940382061346880/1164122940430888980/ezgif.com-gif-maker_1.gif?ex=654210f9&is=652f9bf9&hm=ee00c6213d8b476249e4e105742c775b01d89c37e8162ffdacb1b0878429d93a&)

### Album 페이지

- Album안에 들어있는 사진을 확인 할 수 있습니다
- 사진을 클릭 시 더 크게 볼 수 있는 모달화면이 나타납니다
- 모달 화면 안에서 화살표로 이동하면서 이전, 다음 사진을 확인 할 수 있습니다

![album-page-img-1](https://cdn.discordapp.com/attachments/1016940382061346880/1164123438831644722/ezgif.com-gif-maker_2.gif?ex=65421170&is=652f9c70&hm=8c0cd106c690bd8e4fef5b8418d8be51702acb32564347769c29f98175e357ab&)
![album-page-img-2](https://cdn.discordapp.com/attachments/1016940382061346880/1164124413889876038/ezgif.com-gif-maker_3.gif?ex=65421258&is=652f9d58&hm=7f21f0a80fbe86573291231fefe436c0491cbaed5a17325d38dfaf8f8ec5f813&)

<br/>

## 🎯 기술적 구현사항

### react-router의 loader를 활용한 데이터 페칭

- react-router v6.4부터 추가된 데이터 라우터 기능 중 loader기능을 활용하였습니다
- loader는 컴포넌트 렌더링전에 데이터 페칭을 하여 컴포넌트에게 전달합니다
- 이 기능을 사용한 이유는 컴포넌트 렌더링 전에 컴포넌트에게 데이터를 전달하기 때문에 **데이터가 없을 때의 잠깐의 공백의 상황을 위해 로딩화면을 사용하지 않아도 되어서 입니다**

<br/>

### query string을 활용한 PostList 페이지 상태 유지

- List 페이지에서 **새로고침시** 특정 페이지에 대한 상태가 없어져 다시 1페이지부터 봐야하는 불편함이 있었습니다
- query string을 활용해 url에 페이지 상태에 대한 정보를 넣어 새로고침을 해도 같은 페이지를 유지할 수 있도록 하였습니다

<br/>

### tailwindcss를 활용한 직관적인 css코드 구성

- 이번 프로젝트에서 기본 css, css-in-js를 사용하지않고 tailwindcss를 사용하여 빠르고 직관적인 css코드를 구성하였습니다
- 기본 css를 사용하지 않은 이유는 따로 파일을 만들어 관리해야한다는 불편함이 있었습니다
- css-in-js를 사용하지 않은 이유는 스타일링을 위해 따로 컴포넌트를 만들어 사용해야 한다는 점이었습니다. 스타일링을 위한 컴포넌트가 많아질 수록 주요기능을 하는 컴포넌트들과 헷갈리는 경험이 많아 이번 프로젝트에서는 사용하지 않는 쪽으로 시도해보았습니다
- tailwindcss는 스타일링을 위한 classname을 어느정도 외웠다는 가정하에 아주 빠르게 css를 구성할 수 있고 기본 css를 사용했을 때 의미 없는 classname를 짓는 것을 하지 않아도 된다는 장점이 있다고 생각합니다
