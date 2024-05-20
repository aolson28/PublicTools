const inputText = document.getElementById("input-text");
let queryText;
const outputText = document.getElementById("output-text");
const fullQueryText = document.getElementById("full-query-output-text");
const formatForPowerBI = () => {
  if (!inputText.value) {
    queryText = inputText.placeholder;
  } else {
    queryText = inputText.value;
  }

  let escapedQueryText = queryText
    .replace(/"/g, '\\""')
    .replace(/(\r\n|\n|\r)/gm, "")
    .replace(/\s+/g, " ");
  outputText.innerHTML = `"{""query"": ""${escapedQueryText}""}"`;
  fullQueryText.innerHTML = `let
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
    #"DATA"`;
};

formatForPowerBI();
