# Come aggiungere certificazioni PDF

Questa cartella contiene i file PDF delle certificazioni visualizzabili sul sito tramite la sezione CertCard.

## Istruzioni per aggiungere una nuova certificazione

1. **Aggiungi il PDF**
   - Inserisci il file PDF della certificazione in questa cartella (`public/pdf`).
   - Il nome del file deve essere descrittivo e unico (es: `7908_PESPAV-NOME_COGNOME.pdf`).

2. **Aggiorna l'array dei PDF**
   - Vai nel file `src/components/Team section/CertCard.jsx`.
   - Aggiorna l'array `pdfs` aggiungendo un nuovo oggetto con le seguenti proprietà:

```javascript
{
  title: 'Titolo certificazione',
  desc: 'Descrizione o nome del certificato',
  file: '/pdf/nome-file.pdf'
}
```

3. **Visualizzazione**
   - Il PDF sarà automaticamente visualizzabile nella sezione CertCard del sito.
   - Il download non è consentito: i PDF sono solo visualizzabili.

## Esempio di oggetto per una certificazione

```javascript
{
  title: 'Certificazione PEI',
  desc: 'Certificato ufficiale PEI - Nome Cognome',
  file: '/pdf/7909_PEI-NOME_COGNOME.pdf'
}
```

## Note
- Assicurati che il percorso del file inizi con `/pdf/`.
- Per modifiche grafiche o funzionali, aggiorna il componente `CertCard.jsx`.
