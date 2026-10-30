# Brownie das Leticia’s

Site institucional e cardápio digital da Brownie das Leticia’s, com identidade marrom e rosa, ilustrações locais dos produtos e pedidos direcionados ao WhatsApp.

## Como abrir

1. Extraia a pasta `brownie-das-leticias` do arquivo ZIP.
2. Abra a pasta no Visual Studio Code.
3. Abra o arquivo `index.html` no navegador.

Para uma experiência melhor durante o desenvolvimento, você pode usar a extensão **Live Server** do VS Code e clicar em **Go Live**.

## Produtos

- Brownie tradicional — R$ 6,00
- Brownie recheado com brigadeiro — R$ 8,00

## WhatsApp

O número de atendimento está configurado em `script.js`:

```js
const WHATSAPP_NUMBER = "5535991442169";
```

Os botões gerais abrem uma mensagem de apresentação e cada produto abre uma mensagem com o nome e o preço correspondentes.

## Personalização

- Substitua `assets/images/logo-brownie-das-leticias.png` para trocar a logo.
- As ilustrações dos produtos ficam em `assets/images/`.
- Ajuste cores, fontes e espaçamentos no início de `style.css`.
- O Instagram não foi incluído porque o endereço oficial ainda não foi informado.

## Observação

As imagens dos brownies incluídas são ilustrações vetoriais locais, criadas para manter o site visualmente completo sem depender de imagens hospedadas em serviços externos. As fontes do Google Fonts precisam de internet; o site mantém fontes alternativas caso elas não carreguem.
