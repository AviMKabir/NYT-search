

// the only thing using the API is the search button so its going to be caalled within the click

$(".searchBtn").on("click", function () {



    // clear out the headlines first
    $(".headline").remove();
    $(".authorName").remove();


    // this is just catchhing the input and pushing it to the url
    var query = $("#searchTerms").val();
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + query + "&api-key=NG9jVWvtffggz6biOpKTakBKbH3RtwyD";


    // getting the ajax and using .then to load in the next function
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {



        // catching the text value and turning into a number  so we can use it for the for loop
        var selected_option = $('#recordNum option:selected').val();

        console.log(selected_option);


        // for loop

        for (let i = 0; i < selected_option; i++) {





            //  making some divs here
            var headlineDiv = $("<div class = 'card-body headline' >");

            // appending to the body
            $(".articleBody").append(headlineDiv);

            headlineDiv.text(response.response.docs[i].headline.main);

            //  making some divs here

            var authorDiv = $("<div class = 'authorName' >");

            // appending to the headline
            $(".headline").append(authorDiv);

            authorDiv.text(response.response.docs[i].byline.original);


        };





    });

    console.log(query);


    console.log(queryURL);









});


// we all know what this does right

$(".clearBtn").on("click", function () {

    $(".headline").remove();
    $(".authorName").remove();

});

    // });

