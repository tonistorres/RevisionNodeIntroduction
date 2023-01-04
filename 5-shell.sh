SLEEP_TIMER(){
  sleep 1
  echo '2s'
  sleep 1
  echo '1s'
  sleep 1
}


CREATE_PACKAGE_JSON_CONFIG(){
echo '-----------------------'
echo '1- Criando Pacote Node '
echo '------------------------'
SLEEP_TIMER
npm init -y
}

GITIGNORE(){
echo '-------------------------------'
echo '2- Criando um arquivo gitignore'
echo 'Adicionando no arquivo a'
echo ' node_modules/'
echo '------------------------------'
SLEEP_TIMER
touch .gitignore
cat << EOF >> .gitignore
node_modules/
EOF
}

MAIN(){
  GITIGNORE
  CREATE_PACKAGE_JSON_CONFIG
}

MAIN
