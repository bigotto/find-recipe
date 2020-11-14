# Find Recipes

## Execução do projeto 
 - Clonar o repositório
 - Criar um arquivo .env na raiz com a variável API_KEY do serviço do Giphy
 - Para usar a aplicação com o docker:
  `` docker-compose up --build``

## Rota

* /recipes?i={ingredient_1},{ingredient_2},{ingredient_3}: Consome o serviço de [Recipe Puppy](http://www.recipepuppy.com/about/api/) e exibe uma lista de receitas e consome juntamente o serviço [Giphy](https://developers.giphy.com/docs/sdk) usando o título da receita.

### Observações
* É necessário ao menos um e no máximo três ingredientes na consulta.