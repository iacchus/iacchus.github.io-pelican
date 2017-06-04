title: test tabular js

```tabular
C  D  E
   2  4
```

```
$('code.tabular').each(function(){
text = $(this).text()
lines=text.split('\n')

table=[]
for(i=0;lines[i];i++) table[i] = lines[i].split('  ');
console.log(table)
})
```
