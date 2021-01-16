# Install
Run `npm install`

# Running the code
Run `npm run start`, the project will run on `http://localhost:3000`. Also attached the Insomnia json file, if you want to test it on Insomnia.

# API
`/login` `POST`
```
Request
{
	"username": "john",
	"password": "111000aaabbb"
}
Response
{
  "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImpvaG4iLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2MTA3OTQxNzB9.nbaUVZo9qDoLSeZ8uwmjEvE4aTLnC2Y5DdM10is9I34"
}
```
###### Once done with the login, please add the token to Authorization header for the `/pathChange`, `/thumbnail`. `JWT expires in 1 min.`
##
##
##
`/pathChange` `PATCH`

```
Request
{
	"document": {
		"baz": "qux",
  	"foo": "bar"
	},
	"patch":  [
  	{ "op": "replace", "path": "/baz", "value": "boo" }
	]
}
Header
Authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImpvaG4iLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2MTA3OTIzMTN9.vYrQCLoRKh85zmfv8-Ffqv9KoqJRAI6C1ROq70zb3kE
Response
{
  "baz": "boo",
  "foo": "bar"
}
```

`/thumbnail` `POST`

```
Request
{
	"uri": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/DSC_4585_%288204033522%29.jpg/220px-DSC_4585_%288204033522%29.jpg"
}
Header
Authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImpvaG4iLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2MTA3OTIzMTN9.vYrQCLoRKh85zmfv8-Ffqv9KoqJRAI6C1ROq70zb3kE
Response
"/9j/2wBDAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/2wBDAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/wAARCAAPABYDAREAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAABgcICv/EACIQAAIDAQABBAMBAAAAAAAAAAMEAQIFBgcIERITAAkUJP/EABcBAQEBAQAAAAAAAAAAAAAAAAYHCAP/xAAlEQADAQACAgEEAgMAAAAAAAABAgMEBRIGERMHFCEiADEVIzL/2gAMAwEAAhEDEQA/AMvnkHMySIaOmll7qe+9smsS5s5RcRrbezVldiPscETObnSJFBDgVEGZta4RqEsaCZh4zlOV2eQVi2rFaNtFnkJ6qu/dTVRJ+sel1aTezQMtp/qKd0CMNt81wvBYPFoaEx8hC8sUJU+bHFEWZEGNZh7CmcfOPZmUfPRizTM3ZldwZHM86oIV9V4w3gQqBrOeQcuTLXQKIA81hUI1ThIKgiDZuJ7MYoe5iiPFpn7Btua5qe2mdMzh1vYs4ukRW7l2rX/a9OxND/zSNwFQIZgKOruPjPjt+OnqfXIxbPE/EINdkzIqJCLNNEZQIgFjG+du7F0r/fZwc5znIAw89HLe3xZqkHIoksaczNTI8X+l6yS1CmhezrP+hu1SSXQYi7btinoO8MeN0ctR66NM8j2qqq9aM2jRUIAELuyBeiKAiKAFRQomAvv3OuZz8HmlLLhbZKE6MyyiksmaZfsSEmlCzOxJd6O7sxLdyWHv+F/rv/WP5S9Jfh7I7vb8q8b5C5nS7HL5nWjGydzC36ae4roP5Om8tqEdT0E6URlUtRaV2VGXBXEAq1TlDO/o79aPG/qN5Xbhsnj3J8FycuK18plOnTl25HhleEtMZVzrF41BuKL3gqVSbAurFVJfzTPzHHcIraN8tmVtMM2hkWsqG1S7Rq60LfID8fU/uxmze1XqPf8AJc08fe6jl+D6nKozXe37dODV167JqsNziqoXHLMtmj2Xx8nm9z4wAf3M3emYo5eiwPyr6I5G5Lfm25lD5Krp+anqw1JpZFReqljNp0rIEt67+/wVVPY7ZOW1/wCN4++DezndC0a5ZrTP9g2NCxc0YKl10QhZgs+xmV/IZqFSOc95haxVbC6Lns3rAlgECg7D+KdUwAUFBKmwGsyGKmF7/wBENVPexooapItYvzSy8f8A19ZtFMvUsGAWdw4Zifz9wKEdSCE6lQF/Xr6C+hmnytySdOddRYp/VKZehROo6/bGIYOPzTuCWcB/fst7/9k="
```