# Rick and Morty Multiverse App

Aplicativo mobile desenvolvido em **React Native** com **TypeScript** e **Expo** para consumir a API pública do Rick and Morty. O projeto apresenta uma tela de boas-vindas e uma listagem de personagens, com arquitetura organizada e separação clara de responsabilidades (estilos, componentes, telas, serviços e rotas).

---

## Requisitos Funcionais (RF)

Os Requisitos Funcionais descrevem o que o sistema deve fazer. Neste projeto (MVP), temos as seguintes funcionalidades:

1. **RF01 - Tela de Entrada:** O sistema deve exibir uma tela inicial de boas-vindas contendo o branding da aplicação e um call-to-action (botão).
2. **RF02 - Navegação:** O sistema deve permitir que o usuário navegue da tela de boas-vindas para a tela principal ao interagir com o botão de entrada.
3. **RF03 - Consumo de API:** O sistema deve realizar uma requisição HTTP (GET) para o endpoint `/character` da API do Rick and Morty no momento em que a tela principal for carregada.
4. **RF04 - Listagem de Dados:** O sistema deve exibir em tela uma lista vertical contendo a imagem, o nome, a espécie e o status vital de cada personagem retornado pela API.
5. **RF05 - Feedback Visual (Loading):** O sistema deve apresentar um indicador de carregamento (`ActivityIndicator`) na tela enquanto aguarda a resposta da API.

---

## Requisitos Não Funcionais (RNF)

Os Requisitos Não Funcionais definem as restrições e qualidades técnicas do sistema:

1. **RNF01 - Framework e Linguagem:** A aplicação deve ser construída utilizando **React Native** através do ecossistema **Expo**.
2. **RNF02 - Requisições HTTP:** O consumo da API externa deve ser implementado utilizando a biblioteca **Axios**, com configuração de uma `baseURL` centralizada.
3. **RNF03 - Roteamento:** O gerenciamento de navegação e do histórico de telas deve ser feito utilizando a biblioteca **React Navigation** (`@react-navigation/native-stack`).
4. **RNF04 - Performance de Lista:** A renderização da listagem de personagens deve ser feita utilizando o componente `FlatList` para garantir a performance no carregamento de múltiplos itens e rolagem fluida.
5. **RNF05 - Multiplataforma:** O layout e o estilo da interface devem funcionar e se adaptar perfeitamente aos sistemas operacionais **Android** e **iOS**.

---

## Prototipagem & Style Guide

A identidade visual do aplicativo foi pensada para remeter ao universo do desenho animado, equilibrando tons escuros espaciais com o verde marcante dos portais, além de garantir legibilidade na tela de dados.

### Paleta de Cores (Hexadecimal)

| Cor | Hexadecimal | Uso no App |
| :--- | :--- | :--- |
| **Space Dark** | `#202329` | Background da tela de Welcome, Header da navegação e cor do texto do botão. |
| **Portal Green** | `#deff9a` | Títulos de destaque (Welcome), botões principais e tintura do Header. |
| **Off White** | `#f5f5f5` | Background da tela Home (listagem). |
| **Pure White** | `#ffffff` | Background interno dos Cards. |
| **Dark Gray** | `#333333` | Títulos primários dentro dos Cards (Nome do Personagem). |
| **Medium Gray**| `#666666` | Textos secundários dentro dos Cards (Espécie e Status). |

### Tipografia

* **Fonte Padrão:** Utiliza-se a fonte padrão do sistema (San Francisco para iOS, Roboto para Android).
* **Títulos (H1):** `32px` com peso `bold` (Tela Welcome).
* **Títulos Secundários (H2/Nomes):** `18px` com peso `bold`.
* **Corpo de Texto (Subtítulos):** `18px` com peso normal e altura de linha (`lineHeight`) de `24px`.
* **Texto de Detalhes:** `14px` com peso normal.

### Componentes Principais

* **Botões (Action Buttons):**
  * Formato arredondado estilo "pílula" (`borderRadius: 30`).
  * Cor de fundo: **Portal Green** (`#deff9a`).
  * Espaçamento interno espaçoso (`paddingVertical: 15`, `paddingHorizontal: 40`).
  * Sombra/Elevação leve (`elevation: 5`) para indicar área clicável.
  * Texto interno centralizado, em negrito e com contraste em **Space Dark** (`#202329`).

* **Cards de Personagens:**
  * Fundo **Pure White** (`#ffffff`) com bordas levemente arredondadas (`borderRadius: 8`).
  * Layout em formato de linha (`flexDirection: 'row'`).
  * Imagem fixa na esquerda (`100x100px`) cobrindo totalmente sua área designada.
  * Textos empilhados verticalmente à direita com padding interno de `12px`.
  * Sombreamento sutil para separar o card do fundo da tela (`elevation: 3`, `shadowOpacity: 0.1`).
