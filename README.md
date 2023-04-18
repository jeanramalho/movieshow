# movieshow

Aplicativo desenvolvido para realização do desafio para vaga de Desenvolvedor Mobile.

O objetivo desse app é consumir uma API de filmes e realizar uma listagem dos cards dos filmes na tela, também é possível realizar buscas de filmes, e salvar filmes com favoritos.

Ao clicar no card do filme acontecerá um redirecionamento para a screen de detalhes, onde serão exibidos os detalhes do filme escolhido, nessa tela será possível salvar o filme como favorito.

A feature favoritos salva os dados em um armazenamento local, tornando possível a visualização dos filmes favoritos quando o dispositivo estives offline.


## Execução do App

* Para execução local do app para o fins de testes é necessário ter o Expo instalado.
https://docs.expo.dev/

* Após a instalação do Expo, realize o clone do repositório do github em sua máquina.

```s
git clone https://github.com/jeanramalho/movieshow.git
```

* Dentro da pasta do repositório que foi criada execute instale as dependências.

```s
npm install
```

* Após a instalação das dependências execute o servidor expo para rodar o aplicativo, leia o QR code gerado, ou execute em simuladores através das opções que serão geradas em tela.

```s
expo start
```

## Gerando o APK

* As configurações para construção do arquivo APK para instalação em dispositivos físicos foram setadas no arquivo EAS.json.

```s
eas build -p android --profile preview
```



