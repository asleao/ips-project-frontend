#**Bem vindo!** 

Este repositório contém o frontend do sistema IPS que foi implementado como trabalho da disciplina de Programação Orientada a Objetos 2. 

###**Pré-requisitos:**

* Pacote redistribuíveis C++ para visual studio 2015 (Somente no Windows)
* Apache2 >= 2.4
* Qualquer navegador atualizado.

### **Instruções:**

####**Instalação Apache2:**

Para a instalação do Apache2 no windows foi utilizado o Apache Lounge. Entre no site **https://www.apachelounge.com/download/** e faça o download para a versão do seu sistema operacional. É nescessário a instalação dos pacotes redistribuíveis do C++ para visual studio 
2015 que pode ser obtido no link **https://www.microsoft.com/pt-br/download/details.aspx?id=48145**. Após a sua instalação, extraia a pasta "Apache24" na unidade "C" da sua máquina. Abra um "cmd" como administrador, basta digitar "cmd" na busca do windows, clicar com o botão direito e escolher a opção. 

Entre na pasta do Apache com o comando:

`cd C:\Apache24\bin`

Para instalar, digite:

`httpd -k install`

No windows explorer, abra a pasta "Apache24/bin" e em seguida o arquivo "ApacheMonitor.exe". Ele aparecerá no canto inferior direito da sua tela. Abra-o e em seguida clique no serviço "Apache2.4" e em "Start". 

Pronto o seu servidor apache está configurado e por padrão a sua pasta onde os projetos deverão ficar é "C:\Apache24\htdocs".

####**Projeto**

Baixe o projeto clicando em **"Download Zip"** ou, caso possua o git instalado, utilize o comando abaixo na pasta dos projetos do seu servidor apache.

`git clone https://github.com/asleao/ips-project-frontend.git`

### Execução:

Para acessar o sistema, digite:
`localhost/ips-project-frontend/index.html`
