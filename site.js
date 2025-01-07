//js used on the whole site

//all items used as links for pages. 
let pageLinks = [
    //images
    ["logo", "img/site/pof-logo.svg"], 

    ["Politics Of Fashion", "index.html"],
    //page links used in header
    ["Core Ideas", "coreideas/coreideas.html"], 
    ["Fashion Highlights", "piecenote/piecenote.html"], 
    ["Assignments", "assign/assign.html"]
]

function setLinks(steps) {
    console.log("steps: " + steps);
    for (i = 0; i < pageLinks.length; i++) {
        for (step = 0; step < steps; step++) {
            console.log(pageLinks[i][0]);
            pageLinks[i][1] = "../" + pageLinks[i][1];
        }
    }
    console.log("pageLinks: " + pageLinks);
}

//setting up the header bar. each page calls the funciton in its own js to make sure the corresponding links are correct
function insertHeader() {
    let linksInHeader = [2, 3, 4]
    //inserting the logo
    $("#header-vert").before("<a href='" + pageLinks[1][1] + "'><img id='logo' src='" + pageLinks[0][1] + "'>")

    
    // console.log($("#topbar"))
    //splitting the tob bar into the appropriate number of sections
    $("#topbar").css({
        "grid-template-columns": "repeat(" + linksInHeader.length + ", " + 100 / linksInHeader.length + "%)",
    })

    //inserting the actual links
    for (i = 0; i < linksInHeader.length; i++) {
        $("#topbar").append("<a href='" + pageLinks[linksInHeader[i]][1] + "'><div>" + pageLinks[linksInHeader[i]][0]);
    }

}