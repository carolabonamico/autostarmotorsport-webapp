# Cartella Downloads

Questa cartella contiene i file PDF scaricabili dal sito web.

## File attualmente supportati:

1. **guida-manutenzione-elettriche.pdf** - Guida Manutenzione Auto Elettriche
   - Manuale completo per la manutenzione dei veicoli elettrici

2. **certificazioni-elettriche.pdf** - Certificazioni e Attestati  
   - Documentazione ufficiale delle certificazioni PEI e PES/PAV

## Come aggiungere nuovi PDF:

1. Inserire il file PDF in questa cartella
2. Aggiornare l'array `downloads` nel servizio corrispondente in `src/pages/Preparazioni.jsx`
3. Il file sarà automaticamente disponibile per il download

## Formato dell'oggetto download:

```javascript
{
  title: 'Titolo del documento',
  description: 'Descrizione del contenuto',
  filename: 'nome-file.pdf'
}
```

I file devono essere accessibili tramite `/downloads/nome-file.pdf`
