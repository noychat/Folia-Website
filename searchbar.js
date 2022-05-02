/*script for head*/
var linkname = new Array; var websitename =new Array; var linkurl = new Array; var keywords = new Array;

linkname[0] = 'Home'; websitename[0] = 'Folia - Homepage'; linkurl[0] = 'https://noychat.github.io/Folia-Website/index.html';  keywords[0] = 'Folia, folia,home, Home, folia';

linkname[1] = 'About Us'; websitename[1] = 'Folia - About Folia'; linkurl[1] = 'https://noychat.github.io/Folia-Website/FoliaAbout.html';  keywords[1] = 'about, team, about us, Team, About, About us, folia';

linkname[2] = 'About'; websitename[2] = 'Folia - About the Development Team'; linkurl[2] = 'https://noychat.github.io/Folia-Website/designteam.html'; keywords[2] = 'about, team, about us, Team, About, About us, design team, development, folia';

linkname[3] = 'Invest'; websitename[3] = 'Folia - Invest in Us'; linkurl[3] = 'https://noychat.github.io/Folia-Website/invest.html'; keywords[3] = 'invest, investments, investing, value proposition, future, plans, phase 1, phase 2, phase 1&2, business, product, goals, mission, marketplace, research, competitors, market, industry, folia';

linkname[4] = 'Consumers'; websitename[4] = 'Folia - Consumer'; linkurl[4] = 'https://noychat.github.io/Folia-Website/consumerpage.html'; keywords[4] = 'consumers, consumer, tea, buy, selections, product,offers, folia';

linkname[5] = 'Tea Selection'; websitename[5] = 'Folia - Try our Tea Selection'; linkurl[5] = 'https://noychat.github.io/Folia-Website/majorroutine.html'; keywords[5] = 'consumer, consumers, tea, buy, selections, options, products, product, offers, types, folia';

linkname[6] = 'Our Events'; websitename[6] = 'Folia - Current Events'; linkurl[6] = 'https://noychat.github.io/Folia-Website/foliaevents.html'; keywords[6] = 'events, news, current, plans, future, folia';

linkname[7] = 'Contact'; websitename[7] = 'Folia - Contact Us'; linkurl[7] = 'https://noychat.github.io/Folia-Website/contact.html'; keywords[7] = 'contact, contact us, phone, email, message, inquiry, send message, folia';

linkname[8] = 'Market'; websitename[8] = 'Folia - The Market'; linkurl[8] = 'https://noychat.github.io/Folia-Website/marketplace.html'; keywords[8] = 'market, market research, invest, competitors, industry, folia';

linkname[9] = 'Financials'; websitename[9] = 'Folia - Financial Projections'; linkurl[9] = 'https://noychat.github.io/Folia-Website/financials.html'; keywords[9] = 'projections, financials, chart, deal terms, ask, deal, porposal, funding, invest, value proposition, business, statistics, data,folia';


var i = Math.floor(Math.random()*10)
/*end of script for head*/




                    
/*script for body*/
                    var searchWebsite = function(searchphrase){
                        
                    
                        newhtml = "";
                        
                        newhtml += "<div id='searchresult' target='_blank'><h1>Search Results:</h1><br>";
            
                        
                        
                        var	count = 0;
                        for (i=0; i<10; i=i+1) {
                    
                            if(keywords[i].toLowerCase().indexOf(searchphrase.toLowerCase()) != -1 || linkname[i].toLowerCase().indexOf(searchphrase.toLowerCase()) != -1 || websitename[i].toLowerCase().indexOf(searchphrase.toLowerCase()) != -1){
                                count++;
                                // count = count + 1
                                newhtml = newhtml + "<div><h2>" + "<a href=" + linkurl[i] + ">"+ linkname[i]+ "</a>" +"</h2>" + websitename[i] + "<br><br><br></div>";
                            } else{

                                /*newhtml = newhtml + "<div><h2>" + "Sorry, we found no results from your search." + "</h2><br></div>";*/
                            }
                                
                            
                            }
                    
                            console.log(newhtml);
                    
                            if(count==0){
                                alert ('Did not find any results');
                                newhtml = newhtml + "<div id='noresults'>" + ":( Sorry, we found no results from your search." + "<br></div>";
                            } else{
                                alert('Found ' + count + " results")
                            }
                        
                        document.querySelector('#contentbox').innerHTML = newhtml;
                    
                    }
            
                    
                    document.querySelector("#search").addEventListener("click", function(){
                        searchWebsite(document.querySelector("#searchbox").value);
                        window.location.href="https://noychat.github.io/Folia-Website/searchbar.html"
                    })

                    document.querySelector("#searchbox").addEventListener("keydown", function(e){
                        if(e.key === 'Enter'){
                        searchWebsite(document.querySelector("#searchbox").value);
                        e.preventDefault();
                    
                        navigateToURL(new URLRequest("https://noychat.github.io/Folia-Website/searchbar.html"),"_blank");
                        }
                    })
/*end of script for body*/

                   

                        
                    
                    
                
