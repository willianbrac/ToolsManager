# **API de gerenciamento de ferramentas**

# **Tecnologias Utilizadas**

> **Typescript** - Utilização de tipagem estática</br>
> **TypeORM** - Utilizado por conta das migrations, entities e anotations</br>
> **PostgreSQL** - Fornece suporte nativo a UUID e tipagens como arrays de tamanho variável</br>
> **Express** - Facilidade de utilização e popularidade</br>
> **Swagger** - Utilização de Javascript para documentação</br>
> **Docker** - Conteinerização da aplicação</br>
> **ESlint e Prettier** - Padronização e organização do código


# Como rodar a API

- Para rodar a API, primeiramente, é necessário ter o Docker, Yarn e NODE instalado em sua máquina 
- Após baixar esse repositório, abra seu editor de código e execute o comando **yarn** para baixar as depêndencias
- Com o Docker aberto execute o comando **docker-compose up -d** para criar os containers
- Rode o comando **yarn typeorm migration:run** para criar a tabela no banco de dados
- Com isso no seu docker deve ser criado um container com duas imagens:
>- **database_tool**: Referente ao banco de dados Postgres rodando na Porta **5432**</br>
>- **tools**: Referente aplicação NODE.JS rodando na Porta **3000**


# Documentação SWAGGER

- Após o processo feito acima você pode conferir a documentação e testá-la no seu navegador, basta acessar:
> http://localhost:3000/api-docs/#/


# Como utilizar a API

- Você pode utilizar uma ferramenta como o Postman ou Insomnia para fazer as requisições HTTP

## Rotas da API
## 1) [POST] `http://localhost:3000/tools`

Nessa rota você conseguira realizar o cadastro de uma ferramenta passando no corpo da requisição o objeto no formato JSON. Caso o cadastro seja bem sucedido será retornado um status 201 e o objeto cadastrado. Do contrário será retornado um status 500 caso não atenda as informações passadas ou um status 400 caso title da ferramenta já exista

```jsx
{
    "title": "hotel",
    "link": "https://github.com/typicode/hotel",
    "description": "Local app manager. Start apps within your browser, developer tool with local .localhost domain and https out of the box.",
    "tags":["node", "organizing", "webapps", "domain", "developer", "https", "proxy"]
}
```

## 2) [GET] `http://localhost:3000/tools`

Nessa rota você conseguira buscar todas a ferramentas cadastradas. Ela retorna um array de objetos no formato JSON de acordo com o que você cadastrou e um status 200 *OK*

## 3) [DELETE] `http://localhost:3000/tool/:id`

Nessa rota você conseguira deletar uma ferramenta pelo ID passado nos parâmetro da rota. Para possibilitar uma identificação única para cada objeto foi utilizado UUID. Então o ID passado deve ser um UUID existente na base de dados. Será realizado uma busca pelo ID passado, caso ele encontre o objeto será deletado e retornará um status 200 e a mensagem "*Deleted!*". Caso a ferramenta não seja encontrada será retornado um status 400 e a mensagem de erro "*Tool does't exists!*"

`(http://localhost:3000/tool/f958b905-5405-4d6d-ada7-0e8710bd9713) por exemplo`

## 4) [GET] `http://localhost:3000/tools/:tag`

Nessa rota você pode buscar por uma tag na base de dados dentro do atributo "tags" do(s) objeto(s) se ele conter dentro do array uma tag com o nome que foi passado nos parâmetros da rota. Caso encontre será retornado o(s) objeto(s) correspondente(s) e o status 200 do contrário retornará uma mensagem de erro "*Tag does't exist in tool list!*"`

`(http://localhost:3000/tools/node) por exemplo`


**Feito por Willian Brandão Mendonça**
