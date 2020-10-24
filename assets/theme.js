/* BLOG */

    function loadArticles()
    {
        var blogPosts = [];
        
        $.get('./posts/?C=M;O=D', (data) => 
        {
            var articles = [];
            let listing = parseDirectoryListing(data);
            blogPosts = listing;
            
            // console.log("Loading Articles");
            // console.log(blogPosts);

            for(var i in blogPosts)
            {
                document.getElementById("articles").innerHTML += `
                
                    <div class="article_header">` + blogPosts[i].title.replace(/\.[^/.]+$/, "") + `</div>
                    <div class="article_date">` + "Posted " + blogPosts[i].date + `</div>
                    <p class="article">` + 
                    readFile("posts/" + blogPosts[i].title) + `
                    </p>

                `
            }

        });
    }

    function parseDirectoryListing(txt) 
    {

        txt = txt.split("Description</a></th>")[1];
        var obj = txt.split("<a href=");
        var blogPosts = [];

        for(var i in obj)
        {
	    if(i < 2)
                continue;

            if(obj[i].includes("."))
            {
                var entry = {};

                var titleParse = obj[i].split("\"")[1];
		console.log(obj[i]);
                console.log("Printing: " + i + ", " + titleParse);
                entry.title = titleParse.replace(/%20/g, " ");

                entry.date = obj[i].split(`<td align="right">`)[1].split(" ")[0];

                // parse date
                var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

                var d = new Date(entry.date);
                entry.date = months[d.getMonth()] + " " + d.getDate() + ", " + d.getFullYear();

                // console.log("Entry: ");
                // console.log(entry);
                
                blogPosts.push(entry);
            }
        }
        
        return blogPosts;
    }   

    function readFile(file)
    {
        var result = "";
        var rawFile = new XMLHttpRequest();
        rawFile.open("GET", file, false);
        rawFile.onreadystatechange = function ()
        {
            if(rawFile.readyState === 4)
            {
                if(rawFile.status === 200 || rawFile.status == 0)
                {
                    var allText = rawFile.responseText.replace(/\n/g, "<br>");
                    result = allText;
                }
            }
        }
        rawFile.send(null);

        if((/\.(gif|jpe?g|tiff|png|webp|bmp)$/i).test(file))
        {
            return `<a href="` + file + `" target="_new"><img src="` + file + `" class="blogImg"></a>`;
        }
        
        return result;
    }