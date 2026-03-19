# Sistema Clima 

> Uma plataforma unificada para planejamento de viagens que integra previsão meteorológica em tempo real, roteirização, gestão financeira e guia turístico.

O **Sistema Clima** foi desenvolvido com uma visão clara de produto: resolver a fragmentação de ferramentas durante o planejamento de uma viagem. Em vez de usar um app para o clima, outro para gastos e um terceiro para mapas, o usuário encontra tudo em uma única Single Page Application (SPA) rápida e intuitiva.

*Disponível em*: https://climanovo.vercel.app

---

## Visão de Arquitetura

Este projeto não é apenas uma interface bonita; ele foi arquitetado pensando em escalabilidade, resiliência de dados e manutenção a longo prazo, aplicando conceitos reais da engenharia de software:

* **Consumo Resiliente de APIs Externas:** O coração da aplicação é a integração com APIs meteorológicas. Em vez de requisições espalhadas por componentes, o consumo é centralizado, tratado e encapsulado.
* **Anti-Corruption Layer (Validação de Schemas):** Os payloads (dados) recebidos da API externa não são injetados às cegas na aplicação. Utilizando o **Zod**, os dados passam por uma validação estrita de contrato (Schema Validation). Se a API terceira mudar o formato, o sistema intercepta o erro na fronteira, evitando quebras inesperadas na interface do usuário.
* **Service Pattern:** Toda a lógica de comunicação de rede e regras de negócio da API de clima está isolada na classe `WeatherService`. Isso mantém os componentes do React (UI) extremamente "limpos" e focados apenas em renderização.

---

## Funcionalidades Principais

* **Monitoramento Climático (/clima):** Consumo de API REST para dados meteorológicos em tempo real, previsões estendidas, velocidade do vento e probabilidade de chuva.
* **Cálculo de Rotas (/distancia):** Ferramenta integrada para calcular distâncias e facilitar o planejamento logístico da viagem.
* **Gestão de Orçamento (/gastos):** Módulo financeiro para controle de despesas, garantindo que a viagem caiba no bolso.
* **Exploração Local (/locais):** Descoberta de pontos de interesse e atrações turísticas no destino selecionado.

---

## Stack Tecnológica

Ecossistema moderno focado em User interface e User Experience (UX e UI):

* **Front-end:** React 19 + Vite 
* **Roteamento:** React Router v7 
* **Estilização:** Tailwind CSS v4 
* **Integração e Validação:** Zod 

---

## Como Executar Localmente

### 1. Pré-requisitos
Certifique-se de ter o **Node.js v22** instalado em seu ambiente.

### 2. Passo a Passo

Clone o repositório e instale as dependências:
```bash
git clone https://github.com/FelipeCaetanoSS/sistemaClima.git
cd climanovo
npm install