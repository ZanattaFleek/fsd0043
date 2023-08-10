import { readFile } from 'fs/promises';

try {

    readFile('c:\\tmp\\dados.txt').then( conteudoArquivo => {
        console.log(conteudoArquivo)
    });

  
} catch (err) {
  // When a request is aborted - err is an AbortError
  console.error(err);
}