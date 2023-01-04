
TIME(){
echo "In 2s"
sleep 1
echo "In 1s"
sleep 1
}


GITIGNORE(){
touch .gitignore
cat << EOF >> .gitignore
node_modules/
EOF
}


CRIANDO_PROJETO_NODE(){
TIME
  npm init -y
}

INSTALANDO_NODEMON(){
  TIME
  npm install -D nodemon
}

INSTALANDO_READLINESYNC(){
  TIME
  npm i readline-sync
}


MAIN(){
CRIANDO_PROJETO_NODE
INSTALANDO_NODEMON
INSTALANDO_READLINESYNC
GITIGNORE
}



MAIN
