INICIALIZAR_PROJETO_NODE(){
  npm init -y
}

INSTALANDO_MODULO_FS_ARQUIVOS(){
  npm i fs
}


GITIGNORE(){
touch .gitignore
cat << EOF >> .gitignore
node_modules/
EOF
}




MAIN(){
  INICIALIZAR_PROJETO_NODE
  GITIGNORE
}



MAIN
