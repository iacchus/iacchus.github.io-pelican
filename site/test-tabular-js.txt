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

ttext = "<table border='1'>\n";
for(i=0;lines[i];i++)
{
	if(i==0) ttext += "\t<thead>\n";
	else ttext += "\t<tbody>\n";

	ttext += "\t\t<tr>\n"
	table[i] = lines[i].split('  ');
	for(x=0; table[i][x]; x++) ttext += "\t\t\t<td>"+ table[i][x] +"</td>\n";
	ttext += "\t\t</tr>\n"

	if(i==0) ttext += "\t</thead>\n";
	else ttext += "\t</tbody>\n";
}
ttext += "</table>\n";
console.log(ttext)

$(this).parent().insertAfter(ttext)
})
```
