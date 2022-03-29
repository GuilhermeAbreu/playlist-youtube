Para executar o serviço e nessessario ter NodeJs v16 ou superior.

Para instalar os pacotes rode o comando na raiz do projeto: '''npm i -f'''

No termino do processo, rode o comando '''npx ionic serve'''

Automaticamente será aberto o programa em seu navegador.

---

Para testar no celular android device ou virtual

 * tenha instalado um emulador ou ativado o modo desenvolvedor do dispositovo e conectado via USB.

 * Edito de codigo Android Estudio ou os packs do programa configurado no computador.
 
 * Java SDK 8 v231 ou superior

rode o comando na raiz do projeto: '''npm run add:android'''

em seguinda '''npm run build:android'''

ao final do processo rode '''npm run e:android'''

se todo o ambiente do android estudio estiver bem configurado o mesmo deve instalar automaticamente o apk no dispositivo e ja iniciar automaticamente.
