SLEEP_TIMER(){
  sleep 1
  echo '2s'
  sleep 1
  echo '1s'
  sleep 1
}


CREATE_PACKAGE_JSON_CONFIG(){
SLEEP_TIMER
echo 'Arquivo que conterá as configurações de Dependencias do Projeto'
npm init -y
}


GITIGNORE(){
touch .gitignore
cat << EOF >> .gitignore
node_modules/
EOF
}


INSTALL_MODULE_READ_LINE_SYNC(){
SLEEP_TIMER
npm i readline-sync
}

MAIN(){
  GITIGNORE
  CREATE_PACKAGE_JSON_CONFIG
  INSTALL_MODULE_READ_LINE_SYNC
  INSTALL_MODULE_READ_LINE_SYNC
}

MAIN
