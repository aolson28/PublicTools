# Power BI Query Tools
## Use Case
This tool is used for queries using GraphQl API's for use in Power BI. It creates a properly escaped query string in a JSON object and a boilerplate query.

> [!NOTE]
> **Please replace the {{placeholder}} values with your own**

```
let
    Query = Web.Contents(
	"{{your_api_url}}",
	[
	  Headers=[
	    #"Method"="POST",
	    #"Content-Type"="application/json",
	    #"Authorization"="{{your_api_token}}"
		],
		Content=Text.ToBinary(${outputText.innerHTML})
	]
    ),
    #"DATA" = Json.Document(Query)
in
    #"DATA"`
```
