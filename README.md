# Movie Challenge con Framework

## Índice

- [1. Preâmbulo](#1-preâmbulo)
- [2. Resumo do Projeto](#2-resumo-do-projeto)
- [3. Objetivos de Aprendizagem](#3-objetivos-de-aprendizagem)
- [4. Considerações Gerais](#4-considerações-gerais)
- [5. Considerações Técnicas](#5-considerações-técnicas)
- [6. Critérios mínimos de aceitação do projeto](#6-critérios-mínimos-de-aceitação-do-projeto)
- [7. Deploy](#7-deploy)
- [9. Considerações para solicitar seu feedback do projeto](#9-considerações-para-solicitar-seu-feedback-do-projeto)
- [10. Dicas, guias e leituras complementares](#10-dicas-guias-e-leituras-complementares)

---

## 1. Preâmbulo

A forma como assistimos à filmes mudou radicalmente nos últimos anos devido,
em parte, ao surgimento dos serviços de
[_streaming_](https://pt.wikipedia.org/wiki/Streaming)
que nos permitem fazê-lo de onde estivermos e a qualquer momento. O melhor
reflexo desse fenômeno é o sucesso da Netflix, HBO, Disney+ e outros.

Acreditamos que há uma grande oportunidade de propor produtos/experiências
inovadoras de todos os tipos usando dados de filmes
(diretores, atores, sagas, sequências, datas, etc.). Podemos pensar em jogos,
comunidades, catálogos, recomendações com base em preferências pessoais, etc.
(apenas para citar algumas ideias óbvias).

![Filmes](https://live.staticflickr.com/117/257368762_38bf6fcf9f_h.jpg)

## 2. Resumo do projeto

Neste projeto, você criará uma página da web destinada a visualizar, filtrar e
ordenar o catálogo de filmes da
[_The Movie Database API V3_](https://developer.themoviedb.org/docs).
Esta página pode servir como um catálogo de filmes geral, mas também, se você
quiser, pode considerar a possibilidade de projetá-la para um público específico
com preferências como "filmes western" ou "filmes dos anos 80", por exemplo.

Para implementar este projeto, você deve escolher um framework entre
[React](https://pt-br.reactjs.org/) e [Angular](https://angular.io/).
Ao escolher um framework ou biblioteca para nossa interface, baseamo-nos em
uma série de convenções e implementações comprovadas e documentadas para
resolver um problema comum a todas as interfaces da web:
[manter a interface sincronizada com o estado](https://medium.com/dailyjs/the-deepest-reason-why-modern-javascript-frameworks-exist-933b86ebc445).
Isso nos permite nos concentrar melhor (dedicar mais tempo) nas características
específicas de nossa aplicação.

Quando escolhemos uma dessas tecnologias, não estamos apenas importando um
pedaço de código para reutilizá-lo (o que por si só é um grande valor),
mas também adotando uma **arquitetura**, uma série de **princípios de design**,
um **paradigma**, **abstrações**, um **vocabulário**, uma **comunidade**, etc...

Como desenvolvedora Front-end, esses kits de desenvolvimento podem ser de
grande ajuda para implementar rapidamente características nos projetos em
que você trabalha.

## 3. Objetivos de Aprendizagem

Reflita e depois enumere os objetivos que quer alcançar e aplique no seu projeto. Pense nisso para decidir sua estratégia de trabalho.

### HTML

- [ ] **Uso de HTML semântico**

  <details><summary>Links</summary><p>

  * [HTML semântico](https://curriculum.laboratoria.la/pt/topics/html/html5/semantic-html)
  * [Semantics in HTML - MDN](https://developer.mozilla.org/en-US/docs/Glossary/Semantics#Semantics_in_HTML)
</p></details>

### CSS

- [ ] **Uso de seletores de CSS**

  <details><summary>Links</summary><p>

  * [Intro a CSS](https://curriculum.laboratoria.la/pt/topics/css/css/intro-css)
  * [CSS Selectors - MDN](https://developer.mozilla.org/pt_BR/docs/Web/CSS/CSS_Selectors)
</p></details>

- [ ] **Modelo de caixa (box model): borda, margem, preenchimento**

  <details><summary>Links</summary><p>

  * [Modelo de Caixa e Display](https://curriculum.laboratoria.la/pt/topics/css/css/boxmodel-and-display)
  * [The box model - MDN](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model)
  * [Introduction to the CSS box model - MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model)
  * [CSS display - MDN](https://developer.mozilla.org/pt-BR/docs/Web/CSS/display)
  * [display - CSS Tricks](https://css-tricks.com/almanac/properties/d/display/)
</p></details>

- [ ] **Uso de flexbox em CSS**

  <details><summary>Links</summary><p>

  * [A Complete Guide to Flexbox - CSS Tricks](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
  * [Flexbox Froggy](https://flexboxfroggy.com/#pt-br)
  * [Flexbox - MDN](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox)
</p></details>

- [ ] **Uso de CSS Grid Layout**

  <details><summary>Links</summary><p>

  * [A Complete Guide to Grid - CSS Tricks](https://css-tricks.com/snippets/css/complete-guide-grid/)
  * [Grids - MDN](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Grids)
</p></details>

- [ ] **Uso de media queries**

  <details><summary>Links</summary><p>

  * [CSS media queries - MDN](https://developer.mozilla.org/pt-BR/docs/Web/CSS/Media_Queries/Using_media_queries)
</p></details>

### JavaScript

- [ ] **Uso de linter (ESLINT)**

- [ ] **Uso de identificadores descritivos (Nomenclatura e Semântica)**

#### Testing em Javascript

- [ ] **Testes unitários (unit tests)**

  <details><summary>Links</summary><p>

  * [Introdução ao Jest - Documentação oficial](https://jestjs.io/docs/pt-BR/getting-started)
</p></details>

- [ ] **Testes assíncronos**

  <details><summary>Links</summary><p>

  * [Testando Código Assíncrono - Documentação oficial](https://jestjs.io/docs/pt-BR/asynchronous)
</p></details>

- [ ] **Uso de mocks e espiões**

  <details><summary>Links</summary><p>

  * [Simulações Manuais - Documentação oficial](https://jestjs.io/docs/pt-BR/manual-mocks)
</p></details>

#### Módulos

- [ ] **Módulos de ECMAScript (ES modules)**

  <details><summary>Links</summary><p>

  * [import - MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/import)
  * [export - MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/export)
</p></details>

### Controle de Versões (Git e GitHub)

#### Git

- [ ] **Git: Instalação e configuração**

- [ ] **Git: Controle de versão com git (init, clone, add, commit, status, push, pull, remote)**

- [ ] **Git: Integração de mudanças entre ramos (branch, checkout, fetch, merge, reset, rebase, tag)**

#### GitHub

- [ ] **GitHub: Criação de contas e repositórios, configuração de chave SSH**

- [ ] **GitHub: Implantação com GitHub Pages**

  <details><summary>Links</summary><p>

  * [Site oficial do GitHub Pages](https://pages.github.com/)
</p></details>

- [ ] **GitHub: Colaboração pelo Github (branches | forks | pull requests | code review | tags)**

- [ ] **GitHub: Organização pelo Github (projects | issues | labels | milestones | releases)**

### HTTP

- [ ] **Consulta ou solicitação (request) e resposta (response).**

  <details><summary>Links</summary><p>

  * [Visão geral do protocolo HTTP - MDN](https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Overview)
  * [Mensagens HTTP - MDN](https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Messages)
</p></details>

- [ ] **Cabeçalhos (headers)**

  <details><summary>Links</summary><p>

  * [Cabeçalhos HTTP - MDN](https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Headers)
</p></details>

- [ ] **Corpo (body)**

  <details><summary>Links</summary><p>

  * [Mensagens HTTP / Corpo - MDN](https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Messages#corpo)
</p></details>

- [ ] **Verbos HTTP**

  <details><summary>Links</summary><p>

  * [Métodos de requisição HTTP - MDN](https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Methods)
</p></details>

- [ ] **Códigos de status de HTTP**

  <details><summary>Links</summary><p>

  * [Códigos de status de respostas HTTP - MDN](https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status)
  * [The Complete Guide to Status Codes for Meaningful ReST APIs - dev.to](https://dev.to/khaosdoctor/the-complete-guide-to-status-codes-for-meaningful-rest-apis-1-5c5)
</p></details>

- [ ] **Encodings e JSON**

  <details><summary>Links</summary><p>

  * [Introdução ao JSON - Documentação oficial](https://www.json.org/json-pt.html)
</p></details>

- [ ] **CORS (Cross-Origin Resource Sharing)**

  <details><summary>Links</summary><p>

  * [Cross-Origin Resource Sharing (CORS) - MDN](https://developer.mozilla.org/pt-BR/docs/Web/HTTP/CORS)
</p></details>

### Angular

- [ ] **Components & templates**

  <details><summary>Links</summary><p>

  * [Angular Components Overview - Documentação oficial (em inglês)](https://angular.io/guide/component-overview)
  * [Introduction to components and templates - Documentação oficial (em inglês)](https://angular.io/guide/architecture-components#introduction-to-components)
</p></details>

- [ ] **Diretivas estruturais (ngIf / ngFor)**

  <details><summary>Links</summary><p>

  * [Writing structural directives - Documentação oficial (em inglês)](https://angular.io/guide/structural-directives)
</p></details>

- [ ] **@Input | @Output**

  <details><summary>Links</summary><p>

  * [Component interaction - Documentação oficial (em inglês)](https://angular.io/guide/component-interaction#component-interaction)
</p></details>

- [ ] **Criação e uso de serviços**

  <details><summary>Links</summary><p>

  * [Providing services - Documentação oficial (em inglês)](https://angular.io/guide/architecture-services#providing-services)
</p></details>

- [ ] **Gerenciamento de rotas**

  <details><summary>Links</summary><p>

  * [In-app navigation: routing to views - Documentação oficial (em inglês)](https://angular.io/guide/router)
</p></details>

- [ ] **Criação e uso de Observables**

  <details><summary>Links</summary><p>

  * [Observables in Angular - Documentação oficial (em inglês)](https://angular.io/guide/observables-in-angular)
</p></details>

- [ ] **Uso de HttpClient**

  <details><summary>Links</summary><p>

  * [Communicating with backend services using HTTP - Documentação oficial (em inglês)](https://angular.io/guide/http)
</p></details>

- [ ] **Estilos de componentes (ngStyle / ngClass)**

  <details><summary>Links</summary><p>

  * [Template syntax - Documentação oficial (em inglês)](https://angular.io/guide/template-syntax#built-in-directives)
</p></details>

### React

- [ ] **JSX**

  <details><summary>Links</summary><p>

  * [Introduzindo JSX - Documentação oficial](https://pt-br.react.dev/learn/writing-markup-with-jsx)
</p></details>

- [ ] **Componentes e propriedades (props)**

  <details><summary>Links</summary><p>

  * [Componentes e propriedades - Documentação oficial](https://pt-br.react.dev/learn/passing-props-to-a-component)
</p></details>

- [ ] **Manipulação de eventos**

  <details><summary>Links</summary><p>

  * [Manipulando eventos - Documentação oficial](https://pt-br.react.dev/learn/responding-to-events)
</p></details>

- [ ] **Listas e keys**

  <details><summary>Links</summary><p>

  * [Listas e chaves - Documentação oficial](https://pt-br.react.dev/learn/rendering-lists)
</p></details>

- [ ] **Renderização condicional**

  <details><summary>Links</summary><p>

  * [Renderização condicional - Documentação oficial](https://pt-br.react.dev/learn/conditional-rendering)
</p></details>

- [ ] **Elevação de estado**

  <details><summary>Links</summary><p>

  * [Elevação de estado - Documentação oficial](https://pt-br.react.dev/learn/sharing-state-between-components)
</p></details>

- [ ] **Hooks**

  <details><summary>Links</summary><p>

  * [Introduzindo Hooks - Documentação oficial](https://pt-br.react.dev/reference/react)
</p></details>

- [ ] **CSS modules**

  <details><summary>Links</summary><p>

  * [Adding a CSS Modules Stylesheet - Documentação de Create React App (em inglês)](https://vitejs.dev/guide/features.html#css-modules)
</p></details>

- [ ] **React Router**

  <details><summary>Links</summary><p>

  * [Quick Start - Documentação oficial (em inglês)](https://reactrouter.com/en/main/start/tutorial)
</p></details>

### Vue

- [ ] **Instância de Vue.js**

  <details><summary>Links</summary><p>

  * [A Instância Vue - Documentação oficial](https://br.vuejs.org/v2/guide/instance.html)
</p></details>

- [ ] **Dados e métodos**

  <details><summary>Links</summary><p>

  * [Dados e métodos - Documentação oficial](https://br.vuejs.org/v2/guide/instance.html#Dados-e-Metodos)
</p></details>

- [ ] **Uso e criação de componentes**

  <details><summary>Links</summary><p>

  * [Conceitos Básicos de Componentes - Documentação oficial](https://br.vuejs.org/v2/guide/components.html)
</p></details>

- [ ] **Props**

  <details><summary>Links</summary><p>

  * [Passando dados aos componentes filhos com Props - Documentação oficial](https://br.vuejs.org/v2/guide/components.html#Passando-Dados-aos-Filhos-com-Props)
</p></details>

- [ ] **Diretivas (v-bind | v-model)**

  <details><summary>Links</summary><p>

  * [v-bind - Documentação oficial](https://br.vuejs.org/v2/api/#v-bind)
  * [Binding/Interligações em Formulários - Documentação oficial](https://br.vuejs.org/v2/guide/forms.html)
</p></details>

- [ ] **Iteração (v-for)**

  <details><summary>Links</summary><p>

  * [Array em elementos com v-for - Documentação oficial](https://br.vuejs.org/v2/guide/list.html#Array-em-Elementos-com-v-for)
</p></details>

- [ ] **Eventos (v-on)**

  <details><summary>Links</summary><p>

  * [Manipulação de eventos - Documentação oficial](https://br.vuejs.org/v2/guide/events.html)
</p></details>

- [ ] **Dados Computados e Observadores**

  <details><summary>Links</summary><p>

  * [Dados Computados e Observadores](https://br.vuejs.org/v2/guide/computed.html)
</p></details>

- [ ] **Routing**

  <details><summary>Links</summary><p>

  * [Getting Started - Documentação oficial de Vue Router](https://router.vuejs.org/guide/#html)
</p></details>

- [ ] **Classes e Estilos**

  <details><summary>Links</summary><p>

  * [Interligações de Classe e Estilo - Documentação oficial](https://br.vuejs.org/v2/guide/class-and-style.html)
</p></details>

### Typescript

- [ ] **Narrowing**

  <details><summary>Links</summary><p>

  * [Documentação oficial do Typescript](https://www.typescriptlang.org/docs/handbook/2/narrowing.html)
</p></details>

- [ ] **Decoradores**

  <details><summary>Links</summary><p>

  * [Documentação oficial do Typescript](https://www.typescriptlang.org/docs/handbook/decorators.html)
</p></details>

#### Tipos básicos

- [ ] **Verificação estática de tipos**

  <details><summary>Links</summary><p>

  * [Documentação oficial do Typescript](https://www.typescriptlang.org/docs/handbook/2/basic-types.html#static-type-checking)
</p></details>

- [ ] **Rigor**

  <details><summary>Links</summary><p>

  * [Documentação oficial do Typescript 1](https://www.typescriptlang.org/docs/handbook/2/basic-types.html#strictness)
  * [Documentação oficial do Typescript 2](https://www.typescriptlang.org/tsconfig#Type_Checking_6248)
</p></details>

- [ ] **Tipos primitivos**

  <details><summary>Links</summary><p>

  * [Documentação oficial do Typescript](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#the-primitives-string-number-and-boolean)
</p></details>

- [ ] **Arrays**

  <details><summary>Links</summary><p>

  * [Documentação oficial do Typescript](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#arrays)
</p></details>

- [ ] **Tipo `any`**

  <details><summary>Links</summary><p>

  * [Documentação oficial do Typescript](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#any)
</p></details>

- [ ] **Funções**

  <details><summary>Links</summary><p>

  * [Documentação oficial do Typescript](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#functions)
  * [Documentação oficial do Typescript](https://www.typescriptlang.org/docs/handbook/2/functions.html)
</p></details>

- [ ] **Tipos de união**

  <details><summary>Links</summary><p>

  * [Documentação oficial do Typescript](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#union-types)
</p></details>

- [ ] **Alias de tipos**

  <details><summary>Links</summary><p>

  * [Documentação oficial do Typescript](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#type-aliases)
</p></details>

- [ ] **Interfaces**

  <details><summary>Links</summary><p>

  * [Documentação oficial do Typescript](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#interfaces)
</p></details>

- [ ] **Type assertions**

  <details><summary>Links</summary><p>

  * [Documentação oficial do Typescript](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#type-assertions)
</p></details>

- [ ] **Tipos literais**

  <details><summary>Links</summary><p>

  * [Documentação oficial do Typescript](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#literal-types)
</p></details>

- [ ] **null e undefined**

  <details><summary>Links</summary><p>

  * [Documentação oficial do Typescript](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#null-and-undefined)
</p></details>

- [ ] **Enums**

  <details><summary>Links</summary><p>

  * [Documentação oficial do Typescript](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#enums)
</p></details>

##### Tipos Objecto _(Tipos básicos)_

- [ ] **Propriedades opcionais**

  <details><summary>Links</summary><p>

  * [Documentação oficial do Typescript](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#optional-properties)
</p></details>

#### Classes

- [ ] **Visibilidade dos membros da classe (public, private, protected)**

  <details><summary>Links</summary><p>

  * [Documentação oficial do Typescript](https://www.typescriptlang.org/docs/handbook/2/classes.html#member-visibility)
</p></details>

- [ ] **Membros estáticos da classe**

  <details><summary>Links</summary><p>

  * [Documentação oficial do Typescript](https://www.typescriptlang.org/docs/handbook/2/classes.html#static-members)
</p></details>

- [ ] **this**

  <details><summary>Links</summary><p>

  * [Documentação oficial do Typescript](https://www.typescriptlang.org/docs/handbook/2/classes.html#this-at-runtime-in-classes)
</p></details>

- [ ] **Classes abstratas**

  <details><summary>Links</summary><p>

  * [Documentação oficial do Typescript](https://www.typescriptlang.org/docs/handbook/2/classes.html#abstract-classes-and-members)
</p></details>

##### Membros da classe _(Classes)_

- [ ] **Campos**

  <details><summary>Links</summary><p>

  * [Documentação oficial do Typescript](https://www.typescriptlang.org/docs/handbook/2/classes.html#fields)
</p></details>

- [ ] **Constructors**

  <details><summary>Links</summary><p>

  * [Documentação oficial do Typescript](https://www.typescriptlang.org/docs/handbook/2/classes.htmll#constructors)
</p></details>

- [ ] **Métodos**

  <details><summary>Links</summary><p>

  * [Documentação oficial do Typescript](https://www.typescriptlang.org/docs/handbook/2/classes.html#methods)
</p></details>

- [ ] **Getters e Setters**

  <details><summary>Links</summary><p>

  * [Documentação oficial do Typescript](https://www.typescriptlang.org/docs/handbook/2/classes.html#getters--setters)
</p></details>

##### Herança de classe _(Classes)_

- [ ] **implements Cláusulas**

  <details><summary>Links</summary><p>

  * [Documentação oficial do Typescript](https://www.typescriptlang.org/docs/handbook/2/classes.html#implements-clauses)
</p></details>

- [ ] **extends Cláusulas**

  <details><summary>Links</summary><p>

  * [Documentação oficial do Typescript](https://www.typescriptlang.org/docs/handbook/2/classes.html#extends-clauses)
</p></details>

### Design de produto

- [ ] **Criar protótipos para obter feedback e iterar**

- [ ] **Aplicar os princípios de desenho visual (contraste, alinhamento, hierarquia)**

## 4. Considerações Gerais

Este projeto deve ser resolvido individualmente.

O prazo estimado para concluir o projeto é de 3 a 4 Sprints.

Os testes unitários devem cobrir no mínimo 70% de _statements_,
_functions_, _lines_ e _branches_.

Para implementar este projeto, recomendamos usar o planejamento sugerido encontrado
no repositório [movie-challenge-planner](https://github.com/laboratoria/movie-challenge-planner),
que fornece um CLI para fazer fork do presente repositório e criar um GitHub Project com
o _milestone_ e _issues_ de cada história de usuário.

## 5. Considerações Técnicas

A aplicação deve ser uma _Single Page App_.

A aplicação não precisa ser _responsiva_.

Para poder usar a API da
[_The Movie Database API V3_](https://developer.themoviedb.org/docs),
você deve criar uma conta e, em seguida, uma chave de acesso (_key_)
e usá-la em cada solicitação que fizer ao servidor. Lembre-se de que
você tem um limite máximo de 1.000 solicitações diárias à API por cada
[IP](https://pt.wikipedia.org/wiki/Endere%C3%A7o_IP), portanto, aconselhamos
a fazer um uso responsável desse recurso gratuito.

Um dos principais objetivos deste projeto é aprender a usar uma biblioteca
ou framework popular para desenvolver um aplicativo da web. Você deve escolher
entre [React](https://pt-br.reactjs.org/) ou [Angular](https://angular.io/).

Lembre-se de que, se escolher o Angular, é obrigatório usar o
[TypeScript](https://www.typescriptlang.org/). O TypeScript é uma linguagem
de programação fortemente tipada baseada em JavaScript.

Se você estiver usando Angular ou React, é obrigatório usar
[TypeScript](https://www.typescriptlang.org/). O TypeScript é uma
linguagem de programação fortemente tipada baseada em JavaScript.

A aplicação deve usar `npm-scripts` e deve incluir scripts `start`, `test`,
`build` e `deploy` para iniciar, executar testes, empacotar e implantar a
aplicação, respectivamente.

## 6. Critérios mínimos de aceitação do projeto

### Protótipo de Baixa Fidelidade

O [_Product Owner_](https://www.youtube.com/watch?v=r2hU7MVIzxs&t=202s)
nos fornece uma primeira iteração do protótipo de baixa fidelidade da
aplicação nesta [imagem](./docs/movie-list.png) e nesta
[outra](./docs/movie-detail.png).

### Definição do Produto

O
[_Product Owner_](https://www.youtube.com/watch?v=r2hU7MVIzxs&t=202s)
nos apresenta
este _backlog_ que é o resultado de seu trabalho com o cliente até
o momento.

---

#### [História técnica 1] Configuração do projeto

Ao iniciar um projeto, sempre há uma série de tarefas às quais devemos dedicar tempo.

##### Definição de pronto

- [ ] É possível executar o projeto e visualizar a aplicação padrão em nosso navegador.

- [ ] É possível executar o linter e os testes unitários.

- [ ] Não é possível fazer um push direto para o branch principal.

- [ ] Existe um Figma com os designs de alta fidelidade.

- [ ] A aplicação está implantada corretamente e uma URL pública é fornecida.

---

#### [História de usuário 2] Lista de filmes

Como usuário, quero visualizar o catálogo de filmes em linhas e colunas.

##### Definição de pronto

- [ ] Ao visitar a aplicação implantada, deve-se visualizar em uma tabela (linhas e colunas) o catálogo de filmes do [_The Movie Database API V3_](https://developer.themoviedb.org/docs).

---

#### [História de usuário 3] Lista de filmes paginada

Como usuário, quero navegar pelo catálogo de filmes dividido em páginas.

##### Definição de pronto

- [ ] Ao visitar nossa aplicação implantada, deve-se visualizar o catálogo de filmes e navegar entre páginas.

---

#### [História de usuário 4] Filtrar e ordenar

Como usuário, quero poder filtrar os filmes por gênero e ordená-los por ano em ordem ascendente e descendente.

##### Definição de pronto

- [ ] O usuário deve poder filtrar o catálogo por gênero.

- [ ] O usuário deve poder remover o filtro para ver filmes não filtrados.

- [ ] O usuário deve poder ordenar o catálogo de forma ascendente por ano.

- [ ] O usuário deve poder ordenar o catálogo de forma descendente por ano.

- [ ] O usuário deve poder remover a ordenação para ver os filmes não ordenados.

---

#### [História de usuário 5] Detalhes do filme

Como usuário, quero poder ver informações detalhadas sobre um filme, para poder tomar decisões informadas sobre assisti-lo ou não.

##### Definição de pronto

- [ ] Os usuários podem navegar até a página de detalhes do filme a partir da lista de filmes ou de qualquer seção relevante.

- [ ] Os detalhes do filme são exibidos de forma proeminente, fornecendo informações completas sobre o filme selecionado.

- [ ] Os usuários podem voltar facilmente para a página anterior.

## 7. Deploy

Você pode escolher o provedor (ou provedores) que preferir, juntamente com
o mecanismo de deploy e estratégia de hospedagem. Recomendamos explorar
as seguintes opções:

- [Vercel](https://vercel.com/) é uma plataforma que permite
fazer deploy da nossa aplicação web estática (HTML, CSS e JavaScript) e também
permite fazer deploy de aplicativos da web que são executados no servidor (Node.js).
- [Netlify](https://www.netlify.com/) é semelhante ao Vercel, sendo uma
plataforma que permite fazer deploy da nossa aplicação web estática
(HTML, CSS e JavaScript) e também permite fazer deploy de aplicativos
da web que são executados no servidor (Node.js).

## 8. Planejamento

Para implementar este projeto, recomendamos usar o planejamento sugerido encontrado no repositório [movie-challenge-planner](https://github.com/laboratoria/movie-challenge-planner), que fornece um CLI que o ajudará a _forkar_ o presente repositório e criar um GitHub Project com o _milestone_ e _issues_ de cada [história de usuário](#6-critérios-mínimos-de-aceitação-do-projeto).

O intervalo de tempo estimado para completar o projeto é de 3 a 4 Sprints. Sugerimos que você se organize da seguinte maneira:

- Sprint 1: completar a [História técnica 1](####[História-técnica-1]-Configuração-do-projeto) e [História de usuário 2](####-[História-de-usuário-2]-Lista-de-filmes)
- Sprint 2: completar a [História de usuário 3](####[História-de-usuário-3]-Lista-de-filmes-paginada) e iniciar a [História de usuário 4](####[historia-de-usuario-4]-filtrar-y-ordenar)
- Sprint 3: completar a [História de usuário 4](####[História-de-usuário-4]-Filtrar-e-ordenar)
- Sprint 4: completar a [História de usuário 5](####[História-de-usuário-5]-Detalhes-do-filme)

## 9. Considerações para solicitar seu feedback do projeto

Antes de agendar seu feedback do projeto com um coach, certifique-se de que seu projeto:

- [ ] Tenha protótipo de alta fidelidade no Figma
- [ ] Atende a todos os [critérios mínimos de aceitação](#6-criterios-minimos-de-aceitacao-do-projeto)
- [ ] Está hospedado no GitHub
- [ ] Está com o [deploy](#7-Deploy) realizado
- [ ] Possui um README com a definição do produto

Lembre-se de fazer uma autoavaliação dos objetivos de aprendizagem e habilidades
pessoais em seu painel de estudante.

Se você não concluiu todos os itens acima, não consideramos que você está pronto
para sua sessão de feedback do projeto.

## 10. Dicas, guias e leituras complementares

Junte-se ao canal do Slack
[#project-movie-challenge-fw](https://claseslaboratoria.slack.com/archives/C04A0GS1WJX)
para conversar e pedir ajuda sobre o projeto.

### Protótipo de Alta Fidelidade

Com base no protótipo de baixa fidelidade fornecido, crie um protótipo de alta
fidelidade no Figma. Defina uma paleta de cores e um design gráfico. Tente concluir
isso em 1 ou 2 dias.

### Explore e consuma a API do The Movie Database

Explore a [documentação](https://developer.themoviedb.org/docs) da API do
The Movie Database. Comece lendo a seção
[Getting Started](https://developer.themoviedb.org/docs/getting-started),
depois
[AUTHENTICATION --> Application](https://developer.themoviedb.org/docs/authentication-application)
e, finalmente, as referências dos endpoints
[/discover/movie](https://developer.themoviedb.org/reference/discover-movie)
e
[/movie/{movie_id}](https://developer.themoviedb.org/reference/movie-details).

Em seguida, crie uma conta e gere uma chave (key) de acesso para consumir a API.

Finalmente, faça solicitações HTTP de teste à API usando ferramentas como
[Postman](https://www.postman.com/) ou
[REST Client](https://marketplace.visualstudio.com/items?itemName=humao.rest-client).
Identifique os cabeçalhos, corpo, verbos, códigos de resposta
e codificações das solicitações.

### Explore a documentação do framework escolhido

A comunidade de desenvolvedores de cada framework se esforçou muito para
criar documentações amigáveis para aqueles que estão começando com cada
tecnologia. Portanto, dê a si mesma a oportunidade de explorar a documentação
e experimentar seus exemplos e tutoriais.

### Planeje a implementação da primeira história de usuário

Pegue a primeira história de usuário e divida-a em tarefas menores. Identifique
a ordem e a prioridade de cada tarefa. Documente seu planejamento no Trello ou
Github Project.

### Implemente seu primeiro componente

Pegue a primeira visualização do protótipo de alta fidelidade e a implemente.
Sugerimos seguir os seguintes passos, independentemente do framework que você
estiver usando:

- Passo 1: Separe a interface do usuário em uma hierarquia de componentes.
- Passo 2: Crie uma versão estática da interface do usuário sem adicionar
nenhuma interatividade ainda.
- Passo 3: Encontre a representação mínima, mas completa, do estado da interface
do usuário. Pense no estado como o conjunto mínimo de dados em constante mudança
que a aplicação precisa lembrar.
- Passo 4: Depois de identificar os dados mínimos de estado de sua aplicação,
identifique qual componente é responsável por alterar esse estado ou possui o estado.
- Passo 5: Identifique o fluxo de comunicação entre cada componente: de pai
para filho ou de filho para pai. Implemente a estratégia identificada conforme
sugerido pelo framework.

### Frameworks / bibliotecas

- [React](https://pt-br.reactjs.org/)
- [Angular](https://angular.io/)
- [ViteJs](https://vitejs.dev/)
