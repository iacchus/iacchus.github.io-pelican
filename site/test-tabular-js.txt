title: test tabular js

```tabular
C  D  E
   2  4
```

```
$('code.tabular').each(function() {
text = $(this).text()
lines=text.split('\n')

table=[]
ttext = "<table border='1'>";

for(i=0;lines[i];i++)
{
	ttext += (i==0) ? "<thead>" : "<tbody>";

	ttext += "<tr>"
	columns = lines[i].split('  ');
	for(x=0; columns[x] != null; x++) ttext += "<td>"+ columns[x] +"</td>";
	ttext += "</tr>";

	ttext += (i==0) ? "</thead>" : "</tbody>";
}
ttext += "</table>\n";

$(ttext).insertAfter($(this).parent())
$(this).parent().remove()
})
```
