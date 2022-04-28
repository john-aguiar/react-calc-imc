# Calculadora de IMC

Projeto em React + Typescript fazendo uma calculadora de IMC

Projeto desenvolvido durante o curso [B7Web](https://b7web.com.br)

## Instalação
- `npm install`

## Para rodar 
- `npm start`

## React Project was made using:

* Typescript
* Vite
* module.css
* SPA
 
#### PS: This project was made with only one component


### Step 1: Creating the App.module.css
Criar um App.module.css que irá carregar todo o estilo do App
-- Para acessar esse estilo, basta importar dentro do App

 `import styles from './App.module.css `

E para acessar a propriedade, basta usar o styles.property

Ex: 
   ` <div className={styles.container}> `
-> Assim você acessa a classe container que esta no App.module.css

<hr />

### Step 2: Creating the component GridItem

Primeiro criamos uma pasta no nosso src chamada 'components'
Nessa pasta, iremos separar por subpastas com o nome do componente que desejamos criar.
Em cada subpasta, terá 2 arquivos, o arquivo 'tsx' e o 'module.css', do componente.

Ex:

``` src:
        components:
            GridItem:
                GridItem.module.css
                GridItem.tsx
```

PS: Inside the component.tsx you need to import their module.css the same way you import for the App.tsx

### Step 3: Structuring the App.tsx and the GridItem.tsx

Como já foi dito, nossa aplicação vai ser quase que inteiramente construída dentro do return do App, logo criaremos como se fosse um html padrão.
E em seguida, construir o mesmo dentro do componente.

Depois de botar as divs, inputs, buttons, imagens e tudo mais, nosso esqueleto já está pronto, como uma página html e css padrão,
e é aqui que realmente vai começar a ficar diferente.

### Step 4:  Using the props 
Os componentes tem props que podem ser acessadas

Dentro do GridItem.tsx:

```
export const GridItem = ({item}: Props) => {
    return ( 
        codigo aqui
    )
}
```
- Nos parâmetros da função do componente, deverá ser passado um item geralmente chamado de 'props'
Como estamos usando typescript, geralmente desenvolvemnos ainda mais o jeito de usar essa props.

1. Criamos um type para essas props.

``` 
    type Props = {
        item: Level;    // esse tipo Level foi definido em um helper
    }
```

2. Em outro arquivo esse Level deve ter sido definido

``` 
export type Level = {
    title: string,
    color: string,
    icon: 'down' | 'up',
    imc: number[],
    yourImc?: number;
}
```
E além de definir o tipo, declarar o que vai ter esse tipo:

```
    export const levels: Level[] = [
    {title: 'Magreza', color: '#96A3AB', icon: 'down', imc: [0, 18.50]},
    {title: 'Normal', color: '#0EAD69', icon: 'up', imc:[18.51, 24.9] },
    {title: 'Sobrepeso', color: '#E2B039', icon: 'down', imc:[24.91, 30]},
    {title: 'Obesidade', color: '#C3423F', icon: 'down', imc: [30.1, 99]}
];
```

3. Acessamos esse tipo no componente GridItem que recebeu a props item do tipo Level

```
 {item.title}
 {item.icon}
```


#### Extra: como saber se precisamos criar um arquivo .tsx/.jsx ou .ts/.js?
Simples, criamos arquivos .tsx somente quando queremos renderizar a função dentro dele (componente).

Criamos o arquivo .ts quando queremos criar funções, arrays, tipos, objetos, qualquer coisa que não vá ser renderizada diretamente no arquivo, e sim que vai ser exportada dele para ser importada em outro e ser usada.

- Lembrar de usar o export e import para conseguir usar
(geralmente assim como os componentes ficam em uma pasta separada, esses arquivos ajudantes tambem ficam em uma pasta convenientemente chamada de helpers.)