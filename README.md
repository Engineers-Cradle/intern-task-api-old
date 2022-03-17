# Engineer's Cradle Intership Tasks

## Frontend Intern Task

Create a Website to Show a Contact Form Input on Homepage and another page to list all of those in a table.

Use mage use the following API for Integration :-

URL :- `http://ec-intern-api.b68dev.xyz/api/ft/`

### Task #1

Take Input via Form Input
Data Sample :-

```
POST Request (JSON) at /task1/add
{
    "Name":"Contact Name", // Text Field
    "Address":"Contact Address", //Text Field
    "Email":"contact@email.com", // follow the regex
    "JobStatus":"Student", // Valid data to choose from {"Unemployed", "Working", "Student", "Retired"}
    "DoLiketoCode":true, // Boolean check Box
    "Secret":"12" // Unique code assigned to you
}

```

On successfull submission
Respose :-

```
{
  "success": true,
  "message": "Data added successfully"
}
```

Send a email to Contact's email address with "Response" as Subject and "Done" as "Body"

```
Reference :- https://nodemailer.com/about/#example
Config :-

const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'rosalind.gibson7@ethereal.email',
        pass: 'kAmNnjptEsdhNar7uF'
    }
});
```

### Task 2

List all responses from Contact Form

```
GET Request at /task2/view/<unique-code`>
Also pass "v3p42mqQDWrg9j4gvbTrxT808n30vr5483" as token in headers while requesting data

{
  "success": true,
  "message": "Data fetched successfully",
  "data": [
    {
      "Name": "Jyoti",
      "Address": "Kolkata, India",
      "Email": "admin@bravo.com",
      "JobStatus": "Student",
      "DoLiketoCode": true,
      "Secret": "<unique-code>"
    },
    {
      "Name": "Alok",
      "Address": "Pune, India",
      "Email": "api@gmail.com",
      "JobStatus": "Student",
      "DoLiketoCode": false,
      "Secret": "<unique-code>"
    }
  ]
}

```

### Task #3

Show Footer data fetched from API and keep it in both pages.

```
GET /task3/layout
GET /task3/layout/logo
```

Also Keep in mind that

- Make it responsive
- Make sure to only use your unique code to feed data to api
