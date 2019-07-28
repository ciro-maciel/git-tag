## git-tag
https://github.com/ciro-maciel/git-tag

### back-end
[go lang](https://golang.org/)

#### endpoints
- get - http://localhost:8080/repository/user/ciro-maciel
- get - http://localhost:8080/repository/tag/xxxx
- post - http://localhost:8080/tag/10270722
```
{
	"name": "xxxx"
}
```

#### melhorias
 - documentacao 
 - conexao com o banco atraves de repository pattern
 - logica para sync de repositorio 
 - verificar http types 
 - criar dinamicamente a estrutura do banco de dados

### front-end
[react JS](https://reactjs.org/)

#### melhorias
- habilitar PWA

### container
[docker](https://www.docker.com/)

#### melhorias
- usar docker compose