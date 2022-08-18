# Aula 1
1. Baixar e instalar o [Visual Studio Code](https://code.visualstudio.com/download)
2. Baixar e instalar o [NodeJS e NPM](https://nodejs.org/en/download)
3. Abrir um terminal, criar o diretório-raiz do projeto e adentrá-lo: `mkdir [PastaProjeto]
cd [PastaProjeto]`
4. Abrir a pasta da aplicação no vscode: `code .`
5. No terminal, executar comando: `npm init` 'respondendo' as questões. Fazer com que o `entry point: ` aponte para o **arquivo de entrada da aplicação/Maexpin file**, exemplo `index.js`.
6. Instalar o **express**: `npm install express` ou 
7. No vscode, criar o **main file** da aplicação: por exemplo, `index.js` e incluir o código de exemplo [Hello World](https://expressjs.com/en/starter/hello-world.html)
8. executar o **main file** no nodejs: `node index.js`
9. teste no navegador: <localhost:3000>

# Aula 2
1. instalar o **nodemon**: `npm install --save-dev nodemon`.
**nodemon** reinicializa aplicação nodejs sempre que seu código fonte altera. 
2. no terminal, executar a aplicação:
1. `npm run dev` reiniciar execução da aplicação nodejs assim que seu código fonte for alterado
2. `npm run dev` (ou `node .\index.js`) execução da aplicação segue, indiferente a alteração no fonte
3. no vscode, utilizando a extensão 'Thunder Client', é possível gerar `requests` **restfull**, para ir testando a aplicação

# Aula 3
1. instalar o **mongodb**: `npm install mongodb`.
2. abrir `mongoDB compass`, criar banco de dados uma coleção e incluir alguns documentos.
3. alterar `index.js` para lidar com o BD
