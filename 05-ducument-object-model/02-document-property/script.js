let output

// to get the whole collection
output = document.all

output = document.all.length

output = document.head

output = document.head.children

// get the internet domain
output = document.domain

output = document.URL

output = document.contentType

// Cannot use the forEach for the forms(HTML Collection)
output = document.forms.forEach(element => {
   console.log(element) 
});


// and can get and set the property of the elements
output = document.links[0].href = 'google-link'


console.log(output)
