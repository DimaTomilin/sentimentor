# Sentimentor

My new project I did is sentimentor analyst. How it work? You need only to write text in text area and my site will get to you result if you text have positive, negative or neutral type. I saw this idea in https://sentim-api.herokuapp.com/. This is an API that tries to determine if a text expresses positive or negative emotions. The problem is, it doesn't have a nice webpage to display the results. So I thinked that it is nice opportunity to improve it and add some fuchers

## Requirements

What i tryed to do:

Webpage that contain:

-   a `textarea` input where the user can write/paste text
-   a `button` for sending the text to the API
-   an area to display the result

Once the API returns an answer, the results area contain:

-   the numeral `polarity` of the result
-   the string `type` of the result (positive/negative)
-   both of the above should be green if positive, red if negative, and grey if neutral.

While the result from the API is still being loaded, the results area contain a "loading" indicator. 
If the API returns an error, the results area show a message that there was an error.
Below the results area, I decide to display the appropriate [HTTP Cat](https://http.cat/) based on the status of the response.

I trying to write my code in all standarts and add comments that it will be more understadable. If you have some quastions or you have an idea how to improve my code you can write me.

Thank you!

