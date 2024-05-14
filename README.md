## Instalando projeto
-Abrindo Terminal
-"npm create vite@latest"
-Inserir nome do projeto
-Selecionar a versão do projeto "React"
-Escolher a linguagem "Javascript + SWC" (SUPER FAST WEB COMPILER)
-"npm install"
-"npm run dev"

Obs: 
-node_modules = Módulos que serão gerenciados apenas via NPM
-public = arquivos estáticos (fontes, imagens etc)
-src = códigos do projeto

## Arrumando base
-Delete tudo de src
-Crie o arquivo "main.jsx" (jsx tem a capacidade de usar js com html)
-Insira o seguinte código para o inicio da renderização.
"
import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.createRoot(document.querySelector("#root")).render(
    <div>
    
    </div>
)

-Obs: Poderá ser utilizado <React.StrictMode> durante o desenvolvimento da aplicação para retornos mais incisivos de código, ou <> </> para utilizar depois
"

-Crie o arquivo "App.jsx"
-Insira o seguinte código para o inicio do componente.
"
export default function App(){
    return(
        <h1>Olá mundo</h1>
    )
}
"
- O ideal é estarmos colocando "export default App" para que esteja disponivel em todo codigo!

## Detalhes de componentes
- Caso em um mesmo arquivo estejam dois componentes
(ex function TesteA, functionTesteB)
-A exportação destes deverá vir dessa maneira:
"export function TesteA()"
-E a importação deles em outro arquivo deverá ser de:
"import { TesteA , TesteB}"

## React no GitHub Pages
-No terminal adicione
"npm i gh-pages --save-dev"
-No "package.json" dicione esse código em "scripts : {}":
"
"predeploy" : "npm run build",
"deploy" : "gh-pages -d dist"
"
-E adicione esse código acima de "name"
"
"homepage": 'link do githubpages'
"
-Logo após seguindo para "vite.config.js" e adicione:
"
base : "/nomeRepositorio"
"