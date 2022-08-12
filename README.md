# Aula 1
1. Baixar e instalar o [Visual Studio Code](https://code.visualstudio.com/download)
2. Baixar e instalar o [NodeJS e NPM](https://nodejs.org/en/download)
3. Abrir um terminal, criar pasta do projeto e adentrá-la: `mkdir [app_name]
cd [app_name]`
4. Abrir a pasta da aplicação no vscode: `code .`
5. No terminal, executar comando: `npm init` 'respondendo' as questões.Fazer com que o `entry point: ` aponte para o **arquivo de entrada da aplicação/Maexpin file**, exemplo `index.js`.
6. Instalar o **express**: `npm install express` ou 
7. No vscode, criar o **main file** da aplicação: por exemplo, `index.js` e incluir o código de exemplo [Hello World](https://expressjs.com/en/starter/hello-world.html)
8. executar o **main file** no nodejs: `node index.js`
9. teste no navegador: <localhost:3000>

# Aula 2

1. De dentro da pasta da aplicação, './backend', instalar o nodemom: `npm install --save-dev nodemon`
2. De dentro da pasta `./backend` executar a aplicação com `npm run dev` (ou `node .\index.js` que não reinicia automaticamente qdo o código fonte é alterado) 
3. no vscode, utilizando a extensão 'Thunder Client', gerar `requests` para ir testando a aplicação