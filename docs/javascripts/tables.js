app.document$.subscribe(() => {
  const tables = document.querySelectorAll('article table');
  tables.forEach(table => {
    new Tablesort(table);
  });
});
